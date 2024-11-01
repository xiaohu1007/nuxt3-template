/*
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-10-21 16:19:37
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-29 16:50:49
 * @Description:
 * @FilePath: \joyreels-h5\postcss.config.ts
 */
export default {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
    /**
     * 参考文档
     * https://github.com/kirklin/postcss-px-conversion/blob/main/README.zh-CN.md
     */
    'postcss-px-conversion': {
      // 需要转换的单位，默认为"px"
      unitType: 'px',

      // 设计稿的视口宽度
      viewportWidth: 375,

      enablePerFileConfig: true, // 启用per-file配置

      viewportWidthComment: 'viewport-width', // 用于指定视口宽度的注释

      // 单位转换后保留的精度
      unitPrecision: 5,

      // 能转化为vw的属性列表
      propList: ['*'],

      // 希望使用的视口单位
      viewportUnit: 'vw',

      // 字体使用的视口单位
      fontViewportUnit: 'vw',

      // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
      selectorBlacklist: ['.ignore', '.hairlines'],

      // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      minPixelValue: 1,

      // 媒体查询里的单位是否需要转换单位
      allowMediaQuery: false,

      //  是否直接更换属性值，而不添加备用属性
      replaceRules: true,

      // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      excludeFiles: [/dist/, /node_modules/, /.output/, /.vscode/, /assets\/styles\/pc\/*/, /pages\/.*\/pc\/*/, /components\/.*\/pc\/*/, /common\/.*\/pc\/*/],

      // 如果设置了include，那将只有匹配到的文件才会被转换
      includeFiles: [/assets\/styles\/h5\/*/, /components\/.*\/h5\/*/, /common\/.*\/h5\/*/],

      // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      enableLandscape: false,

      // 横屏时使用的单位
      landscapeUnit: 'vw',

      // 横屏时使用的视口宽度
      landscapeViewportWidth: 1338,
    },
  },
}
