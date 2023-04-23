<template>
    <ol-map ref="map" />
</template>

<script>
import OlMap from './InitMap.vue'
import Feature from 'ol/Feature.js'
import Point from 'ol/geom/Point.js'
// 坐标转换
import { fromLonLat } from 'ol/proj.js'

// 图层
import { OSM, Vector as VectorSource } from 'ol/source.js'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js'
// 样式
import { Circle as CircleStyle, Stroke, Style, Icon } from 'ol/style.js'

// 用于获取绘制矢量图像的上下文对象
import { getVectorContext } from 'ol/render.js'

// 线性动画
import { easeOut } from 'ol/easing.js'
// 移除监听器
import { unByKey } from 'ol/Observable.js'

// 创建附加图层，用于绘制动画
const tileLayer = new TileLayer({
    source: new OSM({
        wrapX: false,
    }),
})
const source = new VectorSource({
    wrapX: false,
})
const vector = new VectorLayer({
    source: source,
})

export default {
    components: {
        OlMap,
    },
    data() {
        return {
            _map: null,
            duration: 3000,
        }
    },
    mounted() {
        this.$data._map = this.$refs.map.getMap()
        // 添加栅格化图层
        this.$data._map.addLayer(tileLayer)
        // 添加数据图层
        this.$data._map.addLayer(vector)

        // 定时添加点
        source.on('addfeature', (e) => {
            this.flash(e.feature)
        })

        for( let n = 0; n < 100 ; n++) {
            setTimeout(() => {
                this.addRandomFeature()
            }, n * 1000)
        }
    },
    methods: {
        generateRandomCoordinate() {
            // 长春市经纬度范围
            var minLng = 125.064
            var maxLng = 125.695
            var minLat = 43.359
            var maxLat = 43.995
            // 生成随机经纬度
            var lng = Math.random() * (maxLng - minLng) + minLng
            var lat = Math.random() * (maxLat - minLat) + minLat
            // 返回经纬度
            return [lng, lat]
        },
        addRandomFeature() {
            const geom = new Point(fromLonLat(this.generateRandomCoordinate()))
            const feature = new Feature(geom)
            // 设置样式
            let iconStyle = new Style({
                image: new Icon({
                    src: 'duck.png',
                }),
            })
            feature.setStyle(iconStyle)
            source.addFeature(feature)
        },
        flash(feature) {
            const start = Date.now()
            const flashGeom = feature.getGeometry().clone()
            const listenerKey = tileLayer.on('postrender', (event) => {
                const frameState = event.frameState
                const elapsed = frameState.time - start
                if (elapsed >= this.duration) {
                    unByKey(listenerKey)
                    return
                }
                // 获取绘制矢量图像的上下文对象
                const vectorContext = getVectorContext(event)
                const elapsedRatio = elapsed / this.duration
                // 起始半径为5，结束为30
                const radius = easeOut(elapsedRatio) * 45 + 5
                const opacity = easeOut(1 - elapsedRatio)

                const style = new Style({
                    image: new CircleStyle({
                        radius: radius,
                        stroke: new Stroke({
                            color: 'rgba(255, 0, 0, ' + opacity + ')',
                            width: 1.25 + opacity,
                        }),
                    }),
                })

                vectorContext.setStyle(style)
                vectorContext.drawGeometry(flashGeom)
                // 让地图渲染动画
                this.$data._map.render()
            })
        },
    },
}
</script>
