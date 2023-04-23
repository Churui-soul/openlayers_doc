import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("InitMap", defineAsyncComponent(() => import("D:/Github/openlayers_doc/docs/.vuepress/components/InitMap.vue"))),
      app.component("EventTest", defineAsyncComponent(() => import("D:/Github/openlayers_doc/docs/.vuepress/components/EventTest.vue"))),
      app.component("AnimationGif", defineAsyncComponent(() => import("D:/Github/openlayers_doc/docs/.vuepress/components/animation_gif.vue"))),
      app.component("AnimationLine", defineAsyncComponent(() => import("D:/Github/openlayers_doc/docs/.vuepress/components/animation_line.vue"))),
      app.component("AnimationPoint", defineAsyncComponent(() => import("D:/Github/openlayers_doc/docs/.vuepress/components/animation_point.vue"))),
      app.component("AnimationMarker", defineAsyncComponent(() => import("D:/Github/openlayers_doc/docs/.vuepress/components/animation_marker.vue")))
  },
}
