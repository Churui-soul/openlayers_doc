import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("InitMap", defineAsyncComponent(() => import("C:/Users/churu/Desktop/演讲/vuepress-starter/docs/.vuepress/components/InitMap.vue"))),
      app.component("EventTest", defineAsyncComponent(() => import("C:/Users/churu/Desktop/演讲/vuepress-starter/docs/.vuepress/components/EventTest.vue")))
  },
}
