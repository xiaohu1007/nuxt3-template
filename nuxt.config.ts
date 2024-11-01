/*
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-10-24 14:04:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-11-01 14:25:52
 * @Description:
 * @FilePath: \joyreels-h5\nuxt.config.ts
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
import postcssConfig from './postcss.config'
import { currentLocales } from './config/i18n'
import { DEFAULT_LANG } from './config/constant'
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    '@vant/nuxt',
    '@element-plus/nuxt',
  ],

  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [
          path.resolve(process.cwd(), "assets/icons/h5"),
          path.resolve(process.cwd(), "assets/icons/pc")
        ],
      }),
    ],
  },

  experimental: {
    typedPages: true,
  },

  css: [
    '~/assets/styles/h5/main.less',
    '~/assets/styles/pc/main.less',
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/display.css',
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  components: [
    {
      path: '~/common',
    },
  ],
  devServer: {
    host: true,
    port: 5000,
  },
  postcss: postcssConfig,
  i18n: {
    locales: currentLocales,
    lazy: true,
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    langDir: 'locales',
    defaultLocale: DEFAULT_LANG,
    vueI18n: './config/i18n.config.ts',
  },

  // 运行时常量
  runtimeConfig: {
    // public 内的变量 服务端 和 客户端 都能拿到
    public: {
      PUBLIC_PATH: process.env.NUXT_PUBLIC_PATH, // 打包路径
      PUBLIC_CDN_PATH: process.env.NUXT_PUBLIC_CDN_PATH, // CDN路径
      CDN_DEPS: process.env.NUXT_CDN_DEPS, //是否开启CDN加速
      API_BASE_URL: process.env.NUXT_API_BASE_URL, //接口地址
      LOGIN_URL: process.env.NUXT_LOGIN_URL, //第三方登录地址
      AIRWALLEX_API: process.env.NUXT_AIRWALLEX_API, //h5第三方支付
      AIRWALLEX_MODE: process.env.NUXT_AIRWALLEX_MODE, // h5第三方支付模式
    },
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },

  future: {
    compatibilityVersion: 4,
  },

  typescript: {
    shim: false,
  },

  routeRules: {
    // 首页服务端渲染
    /* '/': { ssr: true },
    '/genre': { ssr: false },
    '/rankings': { ssr: false }, */
  },
  nitro: {
    devProxy: {
      "/api": {
        target: "https://dev-hph-api.joyreels.cc", // 这里是接口地址
        changeOrigin: true,
        prependPath: true,
      },
    },
    prerender: {
      routes: [],
      ignore: []
    }
  },
  // ssr: false, // 不预渲染路由，即传统的客户端渲染

  compatibilityDate: '2024-10-29',
})
