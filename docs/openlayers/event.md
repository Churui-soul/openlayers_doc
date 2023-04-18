# 事件绑定

## 事件类型
``` js
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
```

## 事件测试
<EventTest/>