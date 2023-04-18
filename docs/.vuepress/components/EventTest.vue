<template>
    <div class="map-container">
        <ol-map ref="map" />

        <div ref="mapMiniContainer" class="map-container-mini"></div>

        <!-- 事件测试 -->
        <ul class="map-helper">
            <li v-for="(item, index) in helperList" :key="index" :class="['map-helper-item']">
                <button class="map-helper-item-btn" @click="btnClick(index)">{{ item.label }}</button>
            </li>
        </ul>

        <!-- 控制台 -->
        <div class="map-cmd">
            <div class="map-cmd-title"></div>
            <ul ref="mapLog">
                <li v-for="text in logs">{{ text }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import OlMap from './InitMap.vue'
import { View } from 'ol'
import { fromLonLat } from 'ol/proj'

export default {
    components: {
        OlMap,
    },
    data() {
        return {
            _map: null,
            logs: [],
            helperList: [
                {
                    label: '绑定渲染事件',
                    activeLabel: '解绑渲染事件',
                    defaultLabel: '绑定渲染事件',
                    onName: 'onRender',
                    unName: 'unRender',
                },
                {
                    label: '绑定移动事件',
                    activeLabel: '解绑移动事件',
                    defaultLabel: '绑定移动事件',
                    onName: 'onMoveend',
                    unName: 'unMoveend',
                },
                {
                    label: '绑定鼠标事件',
                    activeLabel: '解绑鼠标事件',
                    defaultLabel: '绑定鼠标事件',
                    onName: 'onPointer',
                    unName: 'unPointer',
                },
                {
                    label: '更改Size',
                    activeLabel: '还原Size',
                    defaultLabel: '更改Size',
                    onName: 'changeSize',
                    unName: 'unchangeSize',
                },
                {
                    label: '更改Target',
                    activeLabel: '还原Target',
                    defaultLabel: '更改Target',
                    onName: 'changeTarget',
                    unName: 'unchangeTarget',
                },
                {
                    label: '更改View',
                    activeLabel: '还原View',
                    defaultLabel: '更改View',
                    onName: 'changeView',
                    unName: 'unchangeView',
                },
            ],
            renderCallback: [
                () => {
                    this.log('地图准备渲染')
                },
                () => {
                    this.log('地图正在渲染')
                },
                () => {
                    this.log('地图完成渲染')
                    this.log('----------------------')
                },
            ],
            moveendCallback: [],
            pointerCallback: [() => this.log('鼠标移动'), () => this.log('鼠标拖拽')]
        }
    },
    mounted() {
        this.$data._map = this.$refs.map.getMap()
        let map = this.$data._map
        // map.getView().setRotation((Math.PI / 180) * 45)

        // change:size事件
        map.on('change:size', () => {
            this.log('size改变')
        })
        // change:view事件
        map.on('change:view', () => {
            this.log('view改变')
        })
        // change:target事件
        map.on('change:target', () => {
            this.log('target改变')
        })
        // propertychange事件
        map.on('propertychange', () => {
            this.log('property改变')
        })
    },
    methods: {
        log (string) {
            this.logs.push(string)
            this.$nextTick(() => {
                this.$refs.mapLog.scrollTo(0, this.$refs.mapLog.scrollHeight)
            })
            console.log(string)
        },
        // 渲染事件
        onRender() {
            this.$data._map.on('precompose', this.renderCallback[0])
            this.$data._map.on('postcompose', this.renderCallback[1])
            this.$data._map.on('postrender', this.renderCallback[2])
        },
        unRender() {
            this.$data._map.un('precompose', this.renderCallback[0])
            this.$data._map.un('postcompose', this.renderCallback[1])
            this.$data._map.un('postrender', this.renderCallback[2])
        },

        // 移动事件
        onMoveend() {
            this.moveendCallback[0] = () => {
                let map = this.$data._map
                let extent = map.getView().calculateExtent(map.getSize())
                let xmin = extent[0]
                let ymin = extent[1]
                let xmax = extent[2]
                let ymax = extent[3]

                // 输出左下角和右上角坐标
                this.log('左下角X: ' + xmin)
                this.log('左下角Y: ' + ymin)
                this.log('右上角X: ' + xmax)
                this.log('右上角Y: ' + ymax)
                this.log('---------------')
            }
            this.$data._map.on('moveend', this.moveendCallback[0])
        },
        unMoveend() {
            this.$data._map.un('moveend', this.moveendCallback[0])
        },

        // 鼠标事件
        onPointer() {
            this.$data._map.on('pointermove', this.pointerCallback[0])
            this.$data._map.on('pointerdrag', this.pointerCallback[1])
        },
        unPointer() {
            this.$data._map.un('pointermove', this.pointerCallback[0])
            this.$data._map.un('pointerdrag', this.pointerCallback[1])
        },

        // changeSize
        changeSize() {
            this.$refs.map.$el.style.width = '250px'
            this.$data._map.updateSize()
        },
        unchangeSize() {
            this.$refs.map.$el.style.width = '100%'
            this.$data._map.updateSize()
        },

        // changeTarget
        changeTarget() {
            this.$data._map.setTarget(this.$refs.mapMiniContainer)
        },
        unchangeTarget() {
            this.$data._map.setTarget(this.$refs.map.$el)
        },

        // changeView
        changeView() {
            let view = new View({
                projection: 'EPSG:3857',
                center: fromLonLat([116.406568, 39.914714]),
                zoom: 5,
            })
            this.$data._map.setView(view)
        },
        unchangeView() {
            let view = new View({
                projection: 'EPSG:3857',
                center: fromLonLat([126.59073, 43.86189]),
                zoom: 8,
            })
            this.$data._map.setView(view)
        },

        // 按钮样式
        btnClick(index) {
            let item = this.helperList[index]

            if (item.activeLabel === undefined) {
                return this[item.onName]()
            }

            if (item.label === item.activeLabel) {
                item.label = item.defaultLabel
                this[item.unName]()
            } else {
                item.label = item.activeLabel
                this[item.onName]()
            }
        },

        getEventTypeDict() {
            //事件类型
            return {
                //单击，双击会触发两次
                click: 'click',
                //双击
                dblclick: 'dblclick',
                //单击，延迟250毫秒，双击不会触发
                singleclick: 'singleclick',
                //缩放结束或拖动结束都会触发
                moveend: 'moveend',
                //鼠标移动事件
                pointermove: 'pointermove',
                //鼠标拖动事件
                pointerdrag: 'pointerdrag',
                //地图准备渲染
                precompose: 'precompose',
                //地图渲染中
                postcompose: 'postcompose',
                //地图渲染全部结束
                postrender: 'postrender',
                //地图图层增删时触发
                changeLayerGroup: 'change:layerGroup',
                //地图窗口发生变化就会触发
                changeSize: 'change:size',
                //地图绑定的div发生更改时触发，也就是更换了地图div容器时
                changeTarget: 'change:target',
                //地图view对象发生变化触发，为地图设置了新的view，map.setView(view)
                changeView: 'change:view',
                /**
                 * change:size、change:target、change:view都会触发propertychange事件。
                 * 地图首次加载就会触发size和propertychange事件。
                 * change:target触发的时间顺序为:
                 * change:size——propertychange——change:target——propertychange
                 */
                propertychange: 'propertychange', //Map对象中任意的property值改变时触发
            }
        },
    },
}
</script>
<style lang="less" socped>
.map-container {
    position: relative;
    width: 100%;
    height: 100%;

    &-mini {
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 0;
        width: 300px;
        height: 300px;
    }
    &-mini &-mini-self {
        width: 100%;
        height: 100%;
    }
}
.map-helper {
    position: absolute;
    top: 0;
    right: 0;
    list-style: none;
    margin-right: 10px;
    padding-left: 0;

    &-item {
        margin-bottom: 16px;

        &-btn {
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
    }
}

.map-cmd {
    margin-top: 20px;

    &-title {
        width: 100%; height: 8px;
        background-color: var(--c-tip);
    }

    ul {
        height: 200px;
        font-size: 12px;
        overflow: auto;
        position: relative;
        list-style: none;
        margin: 0; padding: 0;
        padding: 6px 6px 4px 6px;
        color: var(--c-text);
        background-color: var(--c-tip-bg);
    }
}
</style>
