import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("InitMap", defineAsyncComponent(() => import("D:/Github/openlayers_doc/docs/.vuepress/components/InitMap.vue"))),
      app.component("EventTest", defineAsyncComponent(() => import("D:/Github/openlayers_doc/docs/.vuepress/components/EventTest.vue")))
  },
}
