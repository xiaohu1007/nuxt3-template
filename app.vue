<!--
 * @Author: 吴昊虎 wuhaohu@zhangzhongyun.com
 * @Date: 2024-10-15 16:43:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-10-31 18:16:10
 * @Description:
 * @FilePath: \joyreels-h5\app.vue
-->
<script lang="ts" setup>
import type { ConfigProviderTheme } from 'vant'
import { throttle } from '~/utils/tools'
import { locales } from './config/i18n';
const userStore = useUserStore()
const languageStore = useLanguageStore()

// 获取当前语言
const lang = computed(() => locales.find(item => item.code == languageStore.lang))
const layout = useState('layout', () => userStore.browserDevice === 'pc' ? 'default' : 'mobile')


const color = useColorMode()

const mode = computed(() => {
  return color.value as ConfigProviderTheme
})

// 监听屏幕变化
onMounted(() => {
  window.onresize = throttle(() => {
    const w = window.innerWidth
    if (w <= 690) { // 断点
      useState('layout').value = 'mobile'
    }
    else {
      useState('layout').value = 'default'
    }
  }, 100)

  // 如果你希望根据屏幕宽度做首次渲染，请加上下面的代码( 不推荐 )
  // window.dispatchEvent(  new Event( "resize" ) );
})
</script>

<template>
  <ColorScheme tag="div">
    <el-config-provider :locale="lang?.e_lang">
      <VanConfigProvider :theme="mode">
        <NuxtLayout :name="layout">
          <NuxtPage />
        </NuxtLayout>
      </VanConfigProvider>
    </el-config-provider>
  </ColorScheme>
</template>
