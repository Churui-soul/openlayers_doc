<template>
    <ol-map ref="map" />
</template>

<script>
import OlMap from './InitMap.vue'
import Overlay from 'ol/Overlay'

import * as echarts from 'echarts'

export default {
    components: {
        OlMap,
    },
    data() {
        return {
            _map: null,
        }
    },
    mounted() {
        this.$data._map = this.$refs.map.getMap()
        this.initChart()
    },
    methods: {
        initChart() {
            const option = {
                tooltip: {
                    trigger: 'item',
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2,
                        },
                        label: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 20,
                                fontWeight: 'bold',
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' },
                        ],
                    },
                ],
            }

            const container = document.createElement('div')
            container.className = 'chart-container'
            document.body.appendChild(container)
            this.chart = echarts.init(container)
            this.chart.setOption(option)
            var overlay = new Overlay({
                position: [14092015.602748781, 5506060.1156725455],
                positioning: 'center-center',
                element: container,
                stopEvent: false,
            })
            this.$data._map.addOverlay(overlay)
        },
    },
}
</script>
<style>
.chart-container {
    width: 150px;
    height: 150px;
}
</style>
