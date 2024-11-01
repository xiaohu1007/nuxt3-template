/*
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-10-15 17:49:28
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-15 17:52:34
 * @Description: 
 * @FilePath: \joyreels-video-h5\utils\deviceType.ts
 */
// 这里的判断类型可以按需追加

/**
 *
 * @param {*} UA ,就是userAgent
 * @returns  type: 设备类型
 *           env: 访问环境(微信/微博/qq)
 *           masklayer: 就是给外部拿到判断是否显示遮罩层的,一些特殊环境要引导用户到外部去打开访问
 */

function isWechat(UA: string) {
    return /MicroMessenger/i.test(UA) ? true : false;
}

function isWeibo(UA: string) {
    return /Weibo/i.test(UA) ? true : false;
}

function isQQ(UA: string) {
    return /QQ/i.test(UA) ? true : false;
}

function isMoible(UA: string) {
    return /(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(UA)
        ? true
        : false;
}

function isIOS(UA: string) {
    return /iPhone|iPad|iPod/i.test(UA) ? true : false;
}

function isAndroid(UA: string) {
    return /Android/i.test(UA) ? true : false;
}

export function deviceType(UA: string) {
    if (isMoible(UA)) {
        if (isIOS(UA)) {
            if (isWechat(UA)) {
                return {
                    type: "ios",
                    env: "wechat",
                    masklayer: true,
                };
            }
            if (isWeibo(UA)) {
                return {
                    type: "ios",
                    env: "weibo",
                    masklayer: true,
                };
            }
            if (isQQ(UA)) {
                return {
                    type: "ios",
                    env: "qq",
                    masklayer: true,
                };
            }
            return {
                type: "ios",
            };
        }
        if (isAndroid(UA)) {
            if (isWechat(UA)) {
                return {
                    type: "android",
                    env: "wechat",
                    masklayer: true,
                };
            }
            if (isWeibo(UA)) {
                return {
                    type: "android",
                    env: "weibo",
                    masklayer: true,
                };
            }
            if (isQQ(UA)) {
                return {
                    type: "android",
                    env: "qq",
                    masklayer: true,
                };
            }
            return {
                type: "android",
            };
        }

        return {
            type: "mobile",
        };
    } else {
        return {
            type: "pc",
        };
    }
}