/*
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-10-30 14:14:44
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-30 14:57:30
 * @Description:
 * @FilePath: \joyreels-h5\env.d.ts
 */
declare namespace NodeJS {
  interface ProcessEnv {
    NUXT_API_BASE_URL: string
    NUXT_PUBLIC_PATH: string
    NUXT_LOGIN_URL: string
    NUXT_AIRWALLEX_API: string
    NUXT_AIRWALLEX_MODE: string
    NUXT_PUBLIC_CDN_PATH: string
  }
}
