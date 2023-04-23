<template>
    <ol-map ref="map" />
</template>

<script>
import 'gifler'
import OlMap from './InitMap.vue'
import Feature from 'ol/Feature.js'
import Point from 'ol/geom/Point.js'

// 图层
import { Vector as VectorSource } from 'ol/source.js'
import { Vector as VectorLayer } from 'ol/layer.js'
// 样式
import { Style, Icon } from 'ol/style.js'

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

        this.addPointGif([14203335.093542054, 5428667.749246727], 'gif/dog_dance.gif')
        this.addPointGif([14143335.093542054, 5480667.749246727], 'gif/dog_cheer.gif')
        this.addPointGif([14263335.093542054, 5480667.749246727], 'gif/dog_cheer.gif')
    },
    methods: {
        addPointGif(coordinates, path) {
            const iconFeature = new Feature({
                geometry: new Point(coordinates),
            })

            const vectorSource = new VectorSource({
                features: [iconFeature],
            })

            const vectorLayer = new VectorLayer({
                source: vectorSource,
            })
            window.gifler(path).frames(
                document.createElement('canvas'),
                (ctx, frame) => {
                    if (!iconFeature.getStyle()) {
                        iconFeature.setStyle(
                            new Style({
                                image: new Icon({
                                    img: ctx.canvas,
                                    imgSize: [frame.width, frame.height],
                                    opacity: 0.8,
                                }),
                            })
                        )
                    }
                    ctx.clearRect(0, 0, frame.width, frame.height)
                    ctx.drawImage(frame.buffer, frame.x, frame.y)
                    this.$data._map.render()
                },
                true
            )
            this.$data._map.addLayer(vectorLayer)
        },
    },
}
</script>
