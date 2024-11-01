<!--
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-10-15 16:55:33
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-11-01 14:03:28
 * @Description:
 * @FilePath: \joyreels-h5\layouts\mobile.vue
-->
<template>
  <div class="h5 w-full h-screen">
    <p>{{ $t('index.mobile') }}</p>
    <p v-for="d in locales" :class="{ 'text-red-500': languageStore.lang == d.code }" :key="d.code" @click="languageStore.changeLanguage(d)">{{d.name}}</p>
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { guestLoginApi } from '~/api/user';

const languageStore = useLanguageStore()
const { locales } = useI18n()

</script>
<style lang="less">
.active {
  color: red;
}
</style>
