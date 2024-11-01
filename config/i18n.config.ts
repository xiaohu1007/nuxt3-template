/*
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-10-30 17:05:48
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-31 17:22:54
 * @Description: 
 * @FilePath: \joyreels-h5\config\i18n.config.ts
 */
import { currentLocales } from './i18n'
import { DEFAULT_LANG } from './constant'

export default defineI18nConfig(() => {
  return {
    legacy: false,
    availableLocales: currentLocales.map(l => l.code),
    fallbackLocale: DEFAULT_LANG,
    fallbackWarn: true,
    missingWarn: true,
  }
})
