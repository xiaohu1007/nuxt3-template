/*
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-10-30 16:28:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-11-01 12:06:19
 * @Description: 
 * @FilePath: \joyreels-h5\composables\useUserStore.ts
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const state: {
    browserDevice: null | string
    uuid?: string
    token?: string
    info?: User.Info
  } = reactive({
    browserDevice: 'pc',
  })

  return {
    ...toRefs(state),
  }
}, {
  persist: true,
})
