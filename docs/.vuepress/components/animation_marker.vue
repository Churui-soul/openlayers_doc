<template>
    <div class="fill-page">
        <ol-map ref="map" />

        <button class="map-btn" @click="changeDuckState">{{ animating ? '站住' : '快跑' }}</button>
    </div>
</template>

<script>
import OlMap from './InitMap.vue'

import MultiLineString from 'ol/geom/MultiLineString.js'
import Point from 'ol/geom/Point.js'
import Feature from 'ol/Feature.js'

// 图层
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector.js'
// 样式
import { Icon, Stroke, Style } from 'ol/style.js'

// 用于获取绘制矢量图像的上下文对象
import { getVectorContext } from 'ol/render.js'

// 样式
const styles = {
    route: new Style({
        stroke: new Stroke({
            width: 6,
            color: '#ffa86f',
        }),
    }),
    start: new Style({
        image: new Icon({
            anchor: [0.5, 1],
            src: 'house.png',
        }),
    }),
    end: new Style({
        image: new Icon({
            anchor: [0.5, 1],
            src: 'flowers.png',
        }),
    }),
    geoMarker: new Style({
        image: new Icon({
            anchor: [0.5, 1],
            src: 'duck.png',
        }),
    }),
}

export default {
    components: {
        OlMap,
    },
    data() {
        return {
            _map: null,
            _route: null,
            _geometry: null,
            _lastTime: null,
            _position: null,
            _distance: 0,

            // 这里是速度，可以自行调节
            speed: 300,
            animating: false,
        }
    },
    mounted() {
        this.$data._map = this.$refs.map.getMap()

        this.setFeatures()
    },
    methods: {
        setFeatures() {
            fetch('json/testLineData.geojson')
                .then((response) => response.json())
                .then((result) => {
                    // 添加路由
                    const route = new MultiLineString(result.features[0].geometry.coordinates)
                    this.$data._route = route

                    // 添加起始结束坐标点
                    const startMarker = new Feature({
                        type: 'start',
                        geometry: new Point(route.getFirstCoordinate()),
                    })
                    const endMarker = new Feature({
                        type: 'end',
                        geometry: new Point(route.getLastCoordinate()),
                    })

                    // 复制起始坐标点
                    const position = startMarker.getGeometry().clone()
                    this.$data._position = position
                    const geoMarker = new Feature({
                        type: 'geoMarker',
                        geometry: position,
                    })
                    this.$data._geoMarker = geoMarker

                    // 创建图层
                    const layer = new VectorLayer({
                        source: new VectorSource({
                            features: [
                                geoMarker,
                                endMarker,
                                startMarker,
                                new Feature({
                                    type: 'route',
                                    geometry: route,
                                }),
                            ],
                        }),
                        style: (feature) => styles[feature.get('type')],
                    })
                    this.$data._layer = layer

                    this.$data._map.addLayer(layer)
                    // 聚焦
                    this.$data._map.getView().fit(layer.getSource().getExtent(), {
                        padding: [100, 100, 100, 100],
                    })
                })
        },
        // 由于MultiLineString不支持直接获取线路长度，这里简单处理下
        getMultiLineStringLength(multiLineString) {
            // 获取MultiLineString总长度
            var length = 0
            multiLineString.getLineStrings().forEach(function (lineString) {
                length += lineString.getLength()
            })

            return length
        },
        /**
         * @description 获取百分比位置坐标
         * @multiLineString 多线路
         * @targetLength 百分比位置
         * */
        getTargetCoordinate(multiLineString, percentage) {
            // 根据线路坐标集合长度转换为线路目的地长度
            let targetLength = this.getMultiLineStringLength(multiLineString) * percentage
            // 统计总长度
            let totalLength = 0
            // 用于储存最终坐标
            let targetCoordinate = null
            multiLineString.getLineStrings().forEach(function (lineString) {
                var lineStringLength = lineString.getLength()
                // 判定当前线路坐标集合长度是否超出传入目的地坐标位置
                if (totalLength + lineStringLength >= targetLength) {
                    var progress = (targetLength - totalLength) / lineStringLength
                    targetCoordinate = lineString.getCoordinateAt(progress)
                }
                totalLength += lineStringLength
            })
            return targetCoordinate
        },
        startAnimation() {
            this.animating = true
            this.$data._lastTime = Date.now()
            this.$data._layer.on('postrender', this.moveFeature)

            // 隐藏geoMarker并通过更改事件触发地图渲染
            this.$data._geoMarker.setGeometry(null)
        },
        stopAnimation() {
            this.animating = false

            // 将标记保持在当前动画位置
            this.$data._geoMarker.setGeometry(this.$data._position)
            this.$data._layer.un('postrender', this.moveFeature)
        },
        moveFeature(event) {
            // 函数执行时间
            const time = event.frameState.time
            // 执行时间 - 触发事件 = 至目前运行时间
            const elapsedTime = time - this.$data._lastTime
            // 1e6 = 1000000，可以理解为精度，可以随意更改
            // 当前位置 = (之前位置 + (速度 * 运行时间)) 取余 2
            // 这里取余2可以将最终数字控制在2以内。当数值小于1的时候是从0-1运动，当其大于1会用2减去当前的距离变为倒数形式。
            this.$data._distance = (this.$data._distance + (this.speed * elapsedTime) / 1e6) % 2
            this.$data._lastTime = time

            const currentCoordinate = this.getTargetCoordinate(
                this.$data._route,
                this.$data._distance > 1 ? 2 - this.$data._distance : this.$data._distance
            )

            this.$data._position.setCoordinates(currentCoordinate)
            const vectorContext = getVectorContext(event)
            vectorContext.setStyle(styles.geoMarker)
            vectorContext.drawGeometry(this.$data._position)
            // 开始动画
            this.$data._map.render()
        },
        changeDuckState() {
            if (this.animating) {
                this.stopAnimation()
            } else {
                this.startAnimation()
            }
        },
    },
}
</script>
<style lang="less" scoped>
.fill-page {
    position: relative;
    text-align: center;
}
.map-btn {
    position: absolute;
    left: 50%;
    bottom: 10px;
    padding: 0 16px;
    margin-left: -8px;

    cursor: pointer;
    display: block;
    height: 30px;
    border: none;
    box-shadow: 0 5px 0 0 #324774;
    background-color: #6f9bff;
    border-radius: 6px;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;

    &:hover {
        box-shadow: 0 5px 0 0 #69452d;
        background-color: #ffa86f;
    }
    &:active {
        transform: translateY(5px);
        box-shadow: 0 0 0 0 #69452d;
        background-color: #ffa86f;
    }
}
</style>
