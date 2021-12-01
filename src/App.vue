<template>
  <a-config-provider :local="zhCN">
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
  </a-config-provider>
</template>

<script>
import {defineComponent} from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import AConfigProvider from "ant-design-vue/lib/config-provider";
import moment from 'moment';
import 'moment/dist/locale/zh-cn';

export default defineComponent({
  name: 'App',
  components: {AConfigProvider},
  setup(){
    return {
      zhCN,
      moment
    }
  }
})
</script>