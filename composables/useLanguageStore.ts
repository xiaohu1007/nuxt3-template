/*
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-10-30 16:28:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-31 17:24:12
 * @Description: 
 * @FilePath: \joyreels-h5\composables\useLanguageStore.ts
 */
import dayjs from 'dayjs'
import { defineStore } from 'pinia'
import { Locale } from 'vant'
import type { LanguageTypes } from '~/typings/i18'

export const useLanguageStore = defineStore('language', () => {
  const i18n = useNuxtApp().$i18n
  const { setLocale } = i18n
  const state: {
    lang: string | null,
  } = reactive({
    lang: null
  })

  const changeLanguage = (lang: LanguageTypes.LocaleObjectAll) => {
    state.lang = lang.code

    // 配置系统语言
    setLocale(lang.code)

    // 配置vant语言
    Locale.use(lang.code, lang.v_lang)

    // 配置dayjs语言
    dayjs.locale(lang.d_lang)
  }

  return {
    ...toRefs(state),
    changeLanguage,
  }
}, {
  persist: true,
})
