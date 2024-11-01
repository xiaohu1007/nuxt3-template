/*
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-10-29 15:11:31
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-30 14:22:08
 * @Description:
 * @FilePath: \joyreels-h5\eslint.config.js
 */
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(antfu({
  formatters: true,
  rules: {
    // 解决process全局问题
    'node/prefer-global/process': ['always'],
  },
}))
