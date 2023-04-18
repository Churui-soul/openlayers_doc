# 点线面

## 简述
在向地图添加元素之前，这里简单声明一下向地图添加要素的层级关系，这样就能明确的知道它们在地图中的地位。
<Badge type="tip" text="Map" vertical="middle" /> => <Badge type="tip" text="VectorLayer" vertical="middle" /> => <Badge type="tip" text="VectorSource" vertical="middle" /> => <Badge type="tip" text="Feature" vertical="middle" /> => <Badge type="tip" text="Geom" vertical="middle" />

## 点
创建点需要使用到`openlayers`当中的`ol/geom/Point`
``` js
import Point from 'ol/geom/Point'
```

### 引入依赖
``` js
import Feature from 'ol/Feature'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
```
虽然一下引用了这么多的依赖，但是我们不需要记住，只需要知道他们的关系就好了，在我们使用中就会慢慢的熟悉并了解他们。

### 添加点
我们借鉴一下上面的层级关系添加点。
``` js
// 初始化
let layer = new VectorLayer()
let source = new VectorSource()
let feature = new Feature()
let point = new Point(coordinate)

// 组合
feature.setGeometry(point)
source.addFeature(feature)
layer.setSource(source)

// 添加至地图
map.addLayer(layer)
```

### 默认样式

默认样式不大明显，所以我用箭头标记了一下。

这里有个圆点，它拥有着半透明的白色背景和浅蓝色的外边框。

![地图](/images/default-point.jpg)

### 添加样式

如果需要添加样式我们就需要用到`Style`类。

这里我们只需要用到这两个，更多`Style`信息大家可以自行通过官网的[Style API](https://openlayers.org/en/latest/apidoc/module-ol_style_Style-Style.html)查阅。
``` js
import { Icon, Style } from 'ol/style'
```

添加样式需用引用我们刚才创建Feature类。
``` js
function setFeatureStyle (feature) {
    // 设置样式
    let iconStyle = new Style({
        image: new Icon({
            src: src,
        }),
    })
    feature.setStyle(iconStyle)
}

setFeatureStyle(feature)
```

![地图](/images/duck_point.jpg)

如果大家喜欢这个![鸭子](/images/duck.png)可以点击<a href="/images/duck.png" download="duke">这里</a>进行下载。

### ![鸭子](/images/duck.png) 全部代码
为了将代码整合起来，我们这这简单封装一个添加point的方法。

``` js
function addPoint(coordinate, { src }) {
    let map = this.$refs.map.getMap()

    // 初始化
    let layer = new VectorLayer()
    let source = new VectorSource()
    let feature = new Feature()
    let point = new Point(coordinate)

    // 设置样式
    let iconStyle = new Style({
        image: new Icon({
            src: src,
        }),
    })
    feature.setStyle(iconStyle)
    // 组合
    feature.setGeometry(point)
    source.addFeature(feature)
    layer.setSource(source)
    // 添加至地图
    map.addLayer(layer)
}
```
这里的`map`获取可以参考基本概念中的[初始化代码](/openlayers/concept.html#初始化代码)部分。

### 调用
``` js
addPoint([14092015.602748781, 5444094.159078708], { src: 'duck.png' })
```

## 线

### 引入依赖
创建线需要使用到`openlayers`当中的`ol/geom/LineString`
``` js
import LineString from 'ol/geom/LineString'
```
除此之外我们仍需用到在上方[简述](/openlayers/geometry.html#简述)中所知道的其他依赖。我们在创建点也用到过。

``` js 
import Feature from 'ol/Feature'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
```

### 添加线
``` js
// 创建线路图形
let featureLine = new Feature({
    geometry: new LineString(coordinates),
})
// 添加数据
let sourceLine = new VectorSource({
    features: [featureLine],
})
// 添加图层
let vectorLine = new VectorLayer({
    source: sourceLine,
})

// 添加至地图
map.addLayer(vectorLine)
```
### 默认样式

灰常简单👍
![线路](/images/line_default.jpg)

### 设置样式
通常线路是需要添加线路名称进行展示，的这里我们也给这条线路添加上名称。

``` js
// 设置样式
let style = new Style({
    stroke: new Stroke({
        color: options.color,
        width: 4,
    }),
    text: new Text({
        //文本样式
        text: options.text,
        font: '18px Calibri,sans-serif',
        fill: new Fill({
            color: options.color,
        }),
        stroke: new Stroke({
            color: '#fff',
            width: 3,
        }),
        placement: 'line',
        textAlign: 'center',
    }),
})

featureLine.setStyle(style)
```
![线路](/images/line_style.jpg)

### 全部代码
同样，我们封装一个简单的示例
``` js
function addLineString(
    coordinates,
    options = {
        text: '嘎鸭路',
        color: '#ffa86f',
    }
) {
    let map = this.$refs.map.getMap()
    // 创建线路图形
    let featureLine = new Feature({
        geometry: new LineString(coordinates),
    })
    // 添加数据
    let sourceLine = new VectorSource({
        features: [featureLine],
    })
    // 添加图层
    let vectorLine = new VectorLayer({
        source: sourceLine,
    })
    // 设置样式
    let style = new Style({
        stroke: new Stroke({
            color: options.color,
            width: 4,
        }),
        text: new Text({
            //文本样式
            text: options.text,
            font: '18px Calibri,sans-serif',
            fill: new Fill({
                color: options.color,
            }),
            stroke: new Stroke({
                color: '#fff',
                width: 3,
            }),
            placement: 'line',
            textAlign: 'center',
        }),
    })

    featureLine.setStyle(style)
    // 设置层级
    map.addLayer(vectorLine)
} 
```
### 调用
``` js
addLineString([
    [14092015.602748781, 5444094.159078708],
    [14203335.093542054, 5428667.749246727],
])
```

## 面
创建面需要使用到`openlayers`当中的`ol/geom/Polygon`
``` js
import Polygon from 'ol/geom/Polygon'
```

### 添加面
``` js
let polygon = new Feature({
    geometry: new Polygon([coordinates]),
})
let layer = new VectorLayer({
    source: new VectorSource({ features: [polygon] }),
})
map.addLayer(layer)
```
### 默认样式

![polygon](/images/polygon_default.jpg)

### 添加样式
``` js
let style = new Style({
    text: new Text({
        text: '鸭洲',
        font: '24px sans-serif',
        fill: new Fill({
            color: '#fff',
        }),
        stroke: new Stroke({
            color: strokeColor,
            width: 4,
        }),
    }),
    fill: new Fill({
        color: fillColor,
    }),
    stroke: new Stroke({
        color: strokeColor,
        width: 4,
    }),
})
polygon.setStyle(style) 
```
![polygon](/images/polygon_style.jpg)

### ![鸭子](/images/duck.png) 全部代码
``` js
function addPolygon(coordinates, { strokeColor = '#ffa86f', fillColor = '#ffa86f73' } = {}) {
    let map = this.$refs.map.getMap()
    let polygon = new Feature({
        geometry: new Polygon([coordinates]),
    })
    let layer = new VectorLayer({
        source: new VectorSource({ features: [polygon] }),
    })
    let style = new Style({
        text: new Text({
            text: '鸭州',
            font: '24px sans-serif',
            fill: new Fill({
                color: '#fff',
            }),
            stroke: new Stroke({
                color: strokeColor,
                width: 4,
            }),
        }),
        fill: new Fill({
            color: fillColor,
        }),
        stroke: new Stroke({
            color: strokeColor,
            width: 4,
        }),
    })
    polygon.setStyle(style)
    map.addLayer(layer)
}
```
### 调用
``` js
addPolygon([
    [14092015.602748781, 5506060.1156725455],
    [14036355.857352143, 5428667.749246727],
    [14203335.093542054, 5428667.749246727],
    [14092015.602748781, 5506060.1156725455],
]) 
```