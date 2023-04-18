import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)

export default {
    base: 'openlayers_doc.github.io',
    theme: defaultTheme({
        // 侧边栏数组
        // 所有页面会使用相同的侧边栏
        sidebar: [
            // SidebarItem
            {
                text: 'Openlayers',
                link: '/',
                children: [
                    '/openlayers/concept.md',
                    '/openlayers/geometry.md',
                    '/openlayers/camera.md',
                    '/openlayers/event.md',
                ],
            },
        ],
    }),
    plugins: [
        registerComponentsPlugin({
          // 配置项
          components: {
              InitMap: path.resolve(__dirname, './components/InitMap.vue'),
              EventTest: path.resolve(__dirname, './components/EventTest.vue'),
          }
        }),
      ],
}