<!--
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-10-29 14:27:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-29 17:46:00
 * @Description: 首页
 * @FilePath: \joyreels-h5\pages\index.vue
-->
<script setup lang="ts">
const PcHome = resolveComponent('LazyHomePc')
const MbHome = resolveComponent('LazyHomeH5')
const layout = useState('layout')
</script>

<template>
  <component :is="layout === 'default' ? PcHome : MbHome" />
</template>
