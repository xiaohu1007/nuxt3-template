/*
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-10-30 17:04:51
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-31 17:19:53
 * @Description:
 * @FilePath: \joyreels-h5\plugins\i18n.ts
 */

import { locales } from "~/config/i18n"

export default defineNuxtPlugin(() => {
  const languageStore = useLanguageStore()
  // 载入 element 语言包
  const i18n = useNuxtApp().$i18n

  // 获取浏览器的首选语言
  let browserLanguage = navigator?.language || (navigator as any)?.userLanguage
  if (import.meta.server) {
    browserLanguage = useRequestHeader('Accept-Language')?.split(',')[0]
  }

  // // 如果Nuxt应用程序没有设置语言，则使用浏览器的首选语言
  const locale = browserLanguage
  const curLang = locales.find(item => item.code == languageStore.lang) || locales.find(item => item.code == locale) || locales.find(item => item.code == i18n.locale.value)
  languageStore.changeLanguage(curLang as any)
})
