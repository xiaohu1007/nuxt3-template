/*
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-11-01 14:23:41
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-11-01 14:23:58
 * @Description: 
 * @FilePath: \joyreels-h5\plugins\svgicon.ts
 */
import svgIcon from '@/components/SvgIcon.vue'
import 'virtual:svg-icons-register' // 注册脚本，不进行nuxt.config.ts里面的配置，会报错
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('svg-icon', svgIcon)
})