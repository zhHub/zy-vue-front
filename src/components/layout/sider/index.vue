<template>
  <Logo
    :collapsed="collapsed"
  />
  <ZyMenu
    :collapsed="collapsed"
  />
</template>

<script>
import Logo from "./logo";
import ZyMenu from "./menu"
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: "Sider",
  components: {
    Logo,
    ZyMenu,
  },
  props: {
    collapsed: {
      // 侧边栏菜单是否收起
      type: Boolean
    }
  },
})
</script>

<style scoped>

</style>