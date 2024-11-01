/*
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-10-29 15:56:35
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-11-01 13:51:52
 * @Description: 
 * @FilePath: \joyreels-h5\tailwind.config.ts
 */
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./pages/**/*.{vue,js,ts,jsx,tsx}', './components/**/*.{vue,js,ts,jsx,tsx}', './common/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'container-l': 'var(--container-l)',
      },
      colors: {
        'container': 'rgba(10, 11, 13, 1)',
        'primary': 'var(--primary-color)',
        'danger': 'var(--danger-color)',
        'popup-bg': 'var(--popup-bg)',
        'gray-1': 'var(--gray-1)',
        'gray-2': 'var(--gray-2)',
        'gray-3': 'var(--gray-3)',
        'gray-4': 'var(--gray-4)',
        'placeholder': 'var(--placeholder)',
      },

      fontSize: {
        base: 'var(--font-size-base)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        md: 'var(--font-size-md)',
        sm: 'var(--font-size-sm)',
        xs: 'var(--font-size-xs)',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '99': '99',
        '999': '999'
      },
      fontWeight: {
        '400': '400',
        '500': '500',
        '600': '600'
      },
      height: {
        screen: 'calc(var(--vh) * 100)',
        'screen-nav': 'calc((var(--vh) * 100) - 44px)'
      },
      minHeight: {
        'screen-nav': 'calc((var(--vh) * 100) - 44px)',
        'screen-nav-bottom': 'calc((var(--vh) * 100) - 44px - 50px)',
        'screen-home-nav-bottom': 'calc((var(--vh) * 100) - 44px - 60px - 50px)',
      }
    },
  },
  plugins: [''],
}
