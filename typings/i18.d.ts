/*
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-10-31 15:08:44
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-31 15:10:33
 * @Description: 
 * @FilePath: \joyreels-h5\types\i18.d.ts
 */
import type { LocaleObject } from '@nuxtjs/i18n'

declare module LanguageTypes {
  export interface LocaleObjectAll extends LocaleObject {
    e_lang?: any,
    v_lang?: any,
    d_lang?: string,
  }
}