/*
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-11-01 11:58:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-11-01 12:05:20
 * @Description: 
 * @FilePath: \joyreels-h5\api\user\index.ts
 */

// 访客登录
export const guestLoginApi = async () => {
  const res = await useFetchPost('/web/auth/guest', {})
  return res
}
