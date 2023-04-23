<template>
    <ol-map ref="map" />
</template>

<script>
// 需要下载“arc”依赖
import arc from 'arc'

import OlMap from './InitMap.vue'
import Feature from 'ol/Feature.js'
import LineString from 'ol/geom/LineString.js'
import { getWidth } from 'ol/extent.js'
// 图层
import { Vector as VectorSource } from 'ol/source.js'
import { Vector as VectorLayer } from 'ol/layer.js'
// 获取上下文
import { getVectorContext } from 'ol/render.js'
// 样式
import { Stroke, Style } from 'ol/style.js'

export default {
    components: {
        OlMap,
    },
    data() {
        return {
            _map: null,
            _tileLayer: null,
            _pointsPerMs: 0.2,
            _flightsSource: null,
            _flightsStyle: new Style({
                stroke: new Stroke({
                    color: '#ffa86f',
                    width: 4,
                }),
            }),
        }
    },
    mounted() {
        this.$data._map = this.$refs.map.getMap()

        this.$data._tileLayer = this.$data._map.getLayers().array_[0]

        this.$data._map.getView().setMinZoom(0)
        this.$data._map.getView().setZoom(0)
        this.addFlights()
    },
    methods: {
        addFlights() {
            this.$data._flightsSource = this.flightsSource()

            const flightsLayer = new VectorLayer({
                source: this.$data._flightsSource,
                style: (feature) => {
                    if (feature.get('finished')) {
                        return this.$data._flightsStyle
                    }
                    return null
                },
            })

            this.$data._map.addLayer(flightsLayer)
        },
        // 获取线路
        flightsSource() {
            return new VectorSource({
                loader: () => {
                    const url = 'json/flights.json'
                    fetch(url)
                        .then(function (response) {
                            return response.json()
                        })
                        .then((json) => {
                            const flightsData = json.flights
                            for (let i = 0; i < flightsData.length; i += 1) {
                                const flight = flightsData[i]
                                const from = flight[0]
                                const to = flight[1]

                                // 将线变为圆弧状
                                const arcGenerator = new arc.GreatCircle(
                                    { x: from[1], y: from[0] },
                                    { x: to[1], y: to[0] }
                                )

                                const arcLine = arcGenerator.Arc(100, { offset: 10 })
                                // 穿过-180°/+180°子午线的路径是分开的
                                // 分成两个部分，将它们依次动画运动
                                const features = []
                                arcLine.geometries.forEach(function (geometry) {
                                    const line = new LineString(geometry.coords)
                                    line.transform('EPSG:4326', 'EPSG:3857')

                                    features.push(
                                        new Feature({
                                            geometry: line,
                                            finished: false,
                                        })
                                    )
                                })
                                // 延迟动画
                                // 使所有线在不同的时间开始
                                this.addLater(features, i * 50)
                            }
                            this.$data._tileLayer.on('postrender', this.animateFlights)
                        })
                },
            })
        },
        // 航班运动动画
        animateFlights(event) {
            const vectorContext = getVectorContext(event)
            const frameState = event.frameState
            vectorContext.setStyle(this.$data._flightsStyle)

            const features = this.$data._flightsSource.getFeatures()
            for (let i = 0; i < features.length; i += 1) {
                const feature = features[i]
                if (!feature.get('finished')) {
                    // 只绘制动画尚未完成的线条
                    const coords = feature.getGeometry().getCoordinates()
                    const elapsedTime = frameState.time - feature.get('start')
                    if (elapsedTime >= 0) {
                        const elapsedPoints = elapsedTime * this.$data._pointsPerMs

                        // 绘制完成设置状态
                        if (elapsedPoints >= coords.length) {
                            feature.set('finished', true)
                        }

                        const maxIndex = Math.min(elapsedPoints, coords.length)
                        const currentLine = new LineString(coords.slice(0, maxIndex))

                        // 动画需要在当前和最近相邻的包装世界中
                        const worldWidth = getWidth(this.$data._map.getView().getProjection().getExtent())
                        const offset = Math.floor(this.$data._map.getView().getCenter()[0] / worldWidth)

                        // 使用之前获取的矢量图形上下文绘制线条
                        currentLine.translate(offset * worldWidth, 0)
                        vectorContext.drawGeometry(currentLine)
                        currentLine.translate(worldWidth, 0)
                        vectorContext.drawGeometry(currentLine)
                    }
                }
            }
            // 地图渲染动画
            this.$data._map.render()
        },
        // 添加线路
        addLater(features, timeout) {
            window.setTimeout(() => {
                let start = Date.now()
                features.forEach((feature) => {
                    // 设置动画开始时间
                    feature.set('start', start)
                    this.$data._flightsSource.addFeature(feature)
                    const duration = feature.getGeometry().getCoordinates() / this.$data._pointsPerMs
                    start += duration
                })
            }, timeout)
        },
    },
}
</script>
