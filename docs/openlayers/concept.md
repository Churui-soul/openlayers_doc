# 基本概念

## 创建地图
OpenLayers 的核心组件是地图（来自ol/Map模块）。它被渲染到一个target容器（例如div网页上包含地图的元素）。

在`vue`中可以用ref的方式去标记元素然后使用`$refs`关键字去获取。

``` html
<div
    id="vue-openlayers"
    ref="map"
></div>
```

js中使用map元素的 id 作为选择器，或是直接传入HTMLElement构建地图。

``` js
// --------- id 形式 ---------
const map = new Map({
    target: 'vue-openlayers',
})

// --------- vue $ref 形式 ---------
const container = this.$refs.map
const map = new Map({
    target: container,
})
```

### 添加地图底图
``` js
import TileLayer from 'ol/layer/Tile'
import TileArcGISRest from 'ol/source/TileArcGISRest'

map.addLayer(new TileLayer({
    source: new TileArcGISRest({
        url: 'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer',
    }),
}))
```

![地图](/images/map-init.jpg)

## 视图概念

地图不负责诸如地图的中心、缩放级别和投影之类的事情。这些都需要调用ol/View实例实现。
``` js
import { View } from 'ol'
import { fromLonLat } from 'ol/proj'

const view = new View({
    zoom: 2,
    center: fromLonLat([126.59073, 43.86189]),
    projection: 'EPSG:3857',
})

map.setView(view)
```

::: tip projection: 'EPSG:3857'
由于目前网络上大多底图都是3857坐标系的，而openlayers默认是4326，如果我们直接加载的话底图会呈现拉抻的状态，这就需要我们手动设置坐标系让地图按照我们期望的方式去加载底图。
:::

::: tip fromLonLat
你可能得到的坐标是4326，因为坐标系发生了转换4326坐标系这个外地人坐标系将会漂流在无尽的大海里，在这里使用了openlayers自带的转换函数为他办了个移民。
:::

### 更新视图属性
虽然我们创建了视图并设置了属性，但我们仍然可以在未来的任意时刻去更改他。

例如：
``` js
// 更新缩放大小
view.setZoom(7)

// 更新中心坐标
view.setCenter(7)
```

## 层
这个标题可能比较模糊，实际上就是openlayers当中提供的图层加载方式，目前openlayers分为四种图层。

### ol/layer/Tile

用于加载栅格瓦片数据的图层类，通常用于加载地图底图，支持多种栅格瓦片格式例如，PNG、JPG等。

```js
new TileLayer({
    source: new TileArcGISRest({
        url: 'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer',
    }),
})
```

### ol/layer/Image
    
用于加载固定的图片资源，需要注意的是加载的不是分割成网格的栅格瓦片数据而是一张完整的图片。

```js
new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: 'path/to/image.jpg',               // 图片的URL地址
        imageSize: [width, height],             // 图片的尺寸
        projection: 'EPSG:3857',                // 图片的坐标系
        imageExtent: [minx, miny, maxx, maxy]   // 图片的范围
    })
})
```
### ol/layer/Vector
    
这是我们项目开发中最常用的图层，用于加载电、线、面等数据。

```js
new VectorLayer({
    source: new VectorSource({
        features: new Feature({
            geometry: new Point([lon, lat])
        })
    })
})
```
### ol/layer/VectorTile

用于加载矢量瓦片的数据图层，不同于`ol/layer/Tile`加载栅格瓦片数据，因为加载的是矢量瓦片数据，这意味着我们可以动态的更新矢量数据，展示最新的数据。

图层类支持多种矢量瓦片格式，例如Mapbox Vector Tiles和GeoJSON Vector Tiles。

```js
new ol.layer.VectorTile({
    source: new ol.source.VectorTile({
        format: new ol.format.MVT(),         // 矢量瓦片数据格式
        url: 'path/to/tiles/{z}/{x}/{y}.mvt' // 矢量瓦片数据的URL地址
    })
})
```

## 初始化代码
为了方便初始化Demo，这里是初始化地图所需要的所有代码。
``` vue
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

<style lang="less" scoped>
.vue-openlayers {
    width: 100vw;
    height: 100vh;
}
</style>
```