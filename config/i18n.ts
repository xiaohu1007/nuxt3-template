/*
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-10-30 17:05:48
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-11-01 11:16:54
 * @Description: 
 * @FilePath: \joyreels-h5\config\i18n.ts
 */
import type { LocaleObject } from '@nuxtjs/i18n'

// element i18
import e_zhCn from 'element-plus/es/locale/lang/zh-cn'
import e_enUS from 'element-plus/es/locale/lang/en'

// dayjs i18
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'

// vant i18
import v_enUS from 'vant/es/locale/lang/en-US'
import v_zhCn from 'vant/es/locale/lang/zh-CN'

import type { LanguageTypes } from '~/typings/i18'


// 语言列表
export const locales: LanguageTypes.LocaleObjectAll[] = [
  {
    code: 'zh-CN',
    file: 'zh-CN.json',
    name: '简体中文',
    e_lang: e_zhCn,
    v_lang: v_zhCn,
    d_lang: 'zh-cn',
  },
  {
    code: 'en',
    file: 'en-US.json',
    name: 'English',
    e_lang: e_enUS,
    v_lang: v_enUS,
    d_lang: 'en',
  },
]

function buildLocales() {
  const useLocales = Object.values(locales).reduce((acc, data) => {
    acc.push(data)

    return acc
  }, <LanguageTypes.LocaleObjectAll[]>[])

  return useLocales.sort((a, b) => a.code.localeCompare(b.code))
}

export const currentLocales = buildLocales()
