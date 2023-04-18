<!-- 基本概念 -->
<template>
    <div class="vue-openlayers" ref="rootmap"></div>
</template>

<script>
import 'ol/ol.css'
import { Map, View } from 'ol'
import { fromLonLat } from 'ol/proj'
import TileLayer from 'ol/layer/Tile'
import TileArcGISRest from 'ol/source/TileArcGISRest'

export default {
    data() {
        return {
            zoom: 8,
            minZoom: 4,
            projection: 'EPSG:3857',
            center: fromLonLat([126.59073, 43.86189]),

            _map: null,
        }
    },
    mounted() {
        let mapContainer = this.$refs.rootmap
        this.$data._map = new Map({
            target: mapContainer,
            layers: [
                new TileLayer({
                    source: new TileArcGISRest({
                        url: 'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer',
                    }),
                }),
            ],
            view: new View({
                zoom: this.zoom,
                minZoom: 4,
                center: this.center,
                projection: this.projection,
            }),
        })
    },
    methods: {
        getMap() {
            return this.$data._map
        },
    },
}
</script>

<style lang="css" scoped>
.vue-openlayers {
    width: 100%;
    height: 300px;
}
</style>
