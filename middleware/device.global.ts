/*
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-10-31 10:19:18
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-11-01 11:32:46
 * @Description: 
 * @FilePath: \joyreels-h5\middleware\device.global.ts
 */
export default defineNuxtRouteMiddleware((to, from) => {
  let UA: string;
  const UserStore = useUserStore()
  if (import.meta.client) {
    // 如果是在客户端执行，则通过 navigator 获取 user-agent
    UA = navigator.userAgent;
  } else {
    // 如果是在服务端执行，则通过请求头获取 user-agent
    UA = useRequestHeader('user-agent') as string;
  }

  UserStore.browserDevice = deviceType(UA).type
})