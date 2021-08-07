<template>
  <Logo
    :collapsed="collapsed"
  />
  <ZyMenu
    :collapsed="collapsed"
  />
</template>

<script>
import Logo from "@/components/layout/sider/logo";
import ZyMenu from "@/components/layout/sider/menu"

export default {
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
}
</script>

<style scoped>

</style>