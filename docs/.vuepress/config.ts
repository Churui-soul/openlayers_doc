import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)
const resolve = (filePath: string) => path.resolve(__dirname, filePath)

export default {
    base: 'openlayers_doc.github.io',
    title: 'Openlayers',
    theme: defaultTheme({
        // Public 文件路径
        logo: '/images/MAP.svg',
        navbar: [
            // NavbarItem
            {
                text: '基础',
                link: '/openlayers/concept.md',
                activeMatch: '/openlayers/',
            },
            // NavbarGroup
            {
                text: '动画',
                link: '/animation/point.md',
                activeMatch: '/animation/',
            },
        ],
        // 侧边栏数组
        // 所有页面会使用相同的侧边栏
        sidebar: {
            // 基础
            '/openlayers': [
                '/openlayers/concept.md',
                '/openlayers/geometry.md',
                '/openlayers/camera.md',
                '/openlayers/event.md',
            ],
            // 动画
            '/animation': [
                '/animation/point.md',
                '/animation/marker.md',
                '/animation/gif.md',
                '/animation/line.md',
            ],
        },
    }),
    plugins: [
        registerComponentsPlugin({
            // 配置项
            components: {
                InitMap: resolve('./components/InitMap.vue'),
                EventTest: resolve('./components/EventTest.vue'),
                AnimationGif: resolve('./components/animation_gif.vue'),
                AnimationLine: resolve('./components/animation_line.vue'),
                AnimationPoint: resolve('./components/animation_point.vue'),
                AnimationMarker: resolve('./components/animation_marker.vue'),
            },
        }),
    ],
}
