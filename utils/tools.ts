/*
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-10-15 17:49:23
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-11-01 11:53:34
 * @Description: 
 * @FilePath: \joyreels-h5\utils\tools.ts
 */
// 防抖
export function debounce(func: { apply: (arg0: any, arg1: any[]) => void; }, delay = 300) {
    let timeoutId: string | number | NodeJS.Timeout | undefined;
    return (...args: any) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// 节流
export function throttle(func: { apply: (arg0: any, arg1: any[]) => void; }, delay = 300) {
    let timeoutId: NodeJS.Timeout | null;
    return (...args: any) => {
        if (!timeoutId) {
            timeoutId = setTimeout(() => {
                timeoutId = null;
                func.apply(this, args);
            }, delay);
        }
    };
}


// 获取浏览器时区
export function getTimeZoneOffset() {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const date = new Date();
    const offset = -date.getTimezoneOffset();
    const sign = offset >= 0 ? '+' : '-';
    const hours = Math.floor(Math.abs(offset) / 60);
    const minutes = Math.abs(offset) % 60;
    return `${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

// 获取并设置值
export function getSetVal(value: any, newValue: any) {
    if (!value) {
        value = newValue
    }
    return value
}

export function px2vw(px: number) {
    return (px / 375) * 100
}

export function px2px(px: number) {
    return px2vw(px) * window.innerWidth / 100
}
