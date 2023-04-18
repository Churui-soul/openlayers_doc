<template><div><h1 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h1>
<h2 id="创建地图" tabindex="-1"><a class="header-anchor" href="#创建地图" aria-hidden="true">#</a> 创建地图</h2>
<p>OpenLayers 的核心组件是地图（来自ol/Map模块）。它被渲染到一个target容器（例如div网页上包含地图的元素）。</p>
<p>在<code v-pre>vue</code>中可以用ref的方式去标记元素然后使用<code v-pre>$refs</code>关键字去获取。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vue-openlayers<span class="token punctuation">"</span></span>
    <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>js中使用map元素的 id 作为选择器，或是直接传入HTMLElement构建地图。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// --------- id 形式 ---------</span>
<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'vue-openlayers'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// --------- vue $ref 形式 ---------</span>
<span class="token keyword">const</span> container <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>map
<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> container<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加地图底图" tabindex="-1"><a class="header-anchor" href="#添加地图底图" aria-hidden="true">#</a> 添加地图底图</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> TileLayer <span class="token keyword">from</span> <span class="token string">'ol/layer/Tile'</span>
<span class="token keyword">import</span> TileArcGISRest <span class="token keyword">from</span> <span class="token string">'ol/source/TileArcGISRest'</span>

map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TileLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">TileArcGISRest</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/images/map-init.jpg" alt="地图"></p>
<h2 id="视图概念" tabindex="-1"><a class="header-anchor" href="#视图概念" aria-hidden="true">#</a> 视图概念</h2>
<p>地图不负责诸如地图的中心、缩放级别和投影之类的事情。这些都需要调用ol/View实例实现。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> View <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'ol'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fromLonLat <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'ol/proj'</span>

<span class="token keyword">const</span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">View</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token function">fromLonLat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">126.59073</span><span class="token punctuation">,</span> <span class="token number">43.86189</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">projection</span><span class="token operator">:</span> <span class="token string">'EPSG:3857'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

map<span class="token punctuation">.</span><span class="token function">setView</span><span class="token punctuation">(</span>view<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">projection: 'EPSG:3857'</p>
<p>由于目前网络上大多底图都是3857坐标系的，而openlayers默认是4326，如果我们直接加载的话底图会呈现拉抻的状态，这就需要我们手动设置坐标系让地图按照我们期望的方式去加载底图。</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">fromLonLat</p>
<p>你可能得到的坐标是4326，因为坐标系发生了转换4326坐标系这个外地人坐标系将会漂流在无尽的大海里，在这里使用了openlayers自带的转换函数为他办了个移民。</p>
</div>
<h3 id="更新视图属性" tabindex="-1"><a class="header-anchor" href="#更新视图属性" aria-hidden="true">#</a> 更新视图属性</h3>
<p>虽然我们创建了视图并设置了属性，但我们仍然可以在未来的任意时刻去更改他。</p>
<p>例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 更新缩放大小</span>
view<span class="token punctuation">.</span><span class="token function">setZoom</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>

<span class="token comment">// 更新中心坐标</span>
view<span class="token punctuation">.</span><span class="token function">setCenter</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="层" tabindex="-1"><a class="header-anchor" href="#层" aria-hidden="true">#</a> 层</h2>
<p>这个标题可能比较模糊，实际上就是openlayers当中提供的图层加载方式，目前openlayers分为四种图层。</p>
<h3 id="ol-layer-tile" tabindex="-1"><a class="header-anchor" href="#ol-layer-tile" aria-hidden="true">#</a> ol/layer/Tile</h3>
<p>用于加载栅格瓦片数据的图层类，通常用于加载地图底图，支持多种栅格瓦片格式例如，PNG、JPG等。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">TileLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">TileArcGISRest</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ol-layer-image" tabindex="-1"><a class="header-anchor" href="#ol-layer-image" aria-hidden="true">#</a> ol/layer/Image</h3>
<p>用于加载固定的图片资源，需要注意的是加载的不是分割成网格的栅格瓦片数据而是一张完整的图片。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>Image</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>source<span class="token punctuation">.</span>ImageStatic</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'path/to/image.jpg'</span><span class="token punctuation">,</span>               <span class="token comment">// 图片的URL地址</span>
        <span class="token literal-property property">imageSize</span><span class="token operator">:</span> <span class="token punctuation">[</span>width<span class="token punctuation">,</span> height<span class="token punctuation">]</span><span class="token punctuation">,</span>             <span class="token comment">// 图片的尺寸</span>
        <span class="token literal-property property">projection</span><span class="token operator">:</span> <span class="token string">'EPSG:3857'</span><span class="token punctuation">,</span>                <span class="token comment">// 图片的坐标系</span>
        <span class="token literal-property property">imageExtent</span><span class="token operator">:</span> <span class="token punctuation">[</span>minx<span class="token punctuation">,</span> miny<span class="token punctuation">,</span> maxx<span class="token punctuation">,</span> maxy<span class="token punctuation">]</span>   <span class="token comment">// 图片的范围</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ol-layer-vector" tabindex="-1"><a class="header-anchor" href="#ol-layer-vector" aria-hidden="true">#</a> ol/layer/Vector</h3>
<p>这是我们项目开发中最常用的图层，用于加载电、线、面等数据。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">VectorLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">VectorSource</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">features</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Feature</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">geometry</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token punctuation">[</span>lon<span class="token punctuation">,</span> lat<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ol-layer-vectortile" tabindex="-1"><a class="header-anchor" href="#ol-layer-vectortile" aria-hidden="true">#</a> ol/layer/VectorTile</h3>
<p>用于加载矢量瓦片的数据图层，不同于<code v-pre>ol/layer/Tile</code>加载栅格瓦片数据，因为加载的是矢量瓦片数据，这意味着我们可以动态的更新矢量数据，展示最新的数据。</p>
<p>图层类支持多种矢量瓦片格式，例如Mapbox Vector Tiles和GeoJSON Vector Tiles。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>VectorTile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>source<span class="token punctuation">.</span>VectorTile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>format<span class="token punctuation">.</span>MVT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>         <span class="token comment">// 矢量瓦片数据格式</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'path/to/tiles/{z}/{x}/{y}.mvt'</span> <span class="token comment">// 矢量瓦片数据的URL地址</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化代码" tabindex="-1"><a class="header-anchor" href="#初始化代码" aria-hidden="true">#</a> 初始化代码</h2>
<p>为了方便初始化Demo，这里是初始化地图所需要的所有代码。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- 基本概念 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vue-openlayers<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rootmap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token string">'ol/ol.css'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Map<span class="token punctuation">,</span> View <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'ol'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fromLonLat <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'ol/proj'</span>
<span class="token keyword">import</span> TileLayer <span class="token keyword">from</span> <span class="token string">'ol/layer/Tile'</span>
<span class="token keyword">import</span> TileArcGISRest <span class="token keyword">from</span> <span class="token string">'ol/source/TileArcGISRest'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token literal-property property">minZoom</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token literal-property property">projection</span><span class="token operator">:</span> <span class="token string">'EPSG:3857'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token function">fromLonLat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">126.59073</span><span class="token punctuation">,</span> <span class="token number">43.86189</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

            <span class="token literal-property property">_map</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> mapContainer <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>rootmap
        <span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">.</span>_map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">target</span><span class="token operator">:</span> mapContainer<span class="token punctuation">,</span>
            <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token keyword">new</span> <span class="token class-name">TileLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">TileArcGISRest</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer'</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">view</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">View</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>zoom<span class="token punctuation">,</span>
                <span class="token literal-property property">minZoom</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>center<span class="token punctuation">,</span>
                <span class="token literal-property property">projection</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>projection<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">getMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">.</span>_map
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.vue-openlayers</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


