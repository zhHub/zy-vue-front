<template>
  <a-menu
    :inline-collapsed="collapsed"
    theme="dark"
    mode="inline"
  >
    <template v-for="(menu,i) in menuAll">
      <a-sub-menu :key="menu.id"
                  v-if="menu.submenu && menu.submenu.length > 0">
        <template #icon>
          <UnorderedListOutlined/>
        </template>
        <template #title>
          {{ menu.name }}
        </template>
        <a-menu-item v-for="(submenu,index) in menu.submenu" :key="submenu.id" @click="routTo(submenu)">
          <UnorderedListOutlined/>
          {{ submenu.name }}
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item :key="menu.id" @click="routTo(menu)" v-else>
        <UnorderedListOutlined/>
        {{ menu.name }}
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script>
import {UnorderedListOutlined} from '@ant-design/icons-vue'
import {defineComponent, ref} from 'vue';
import router from "../../../../router";

export default defineComponent({
  name: "ZyMenu",
  components: {UnorderedListOutlined},
  props: {
    collapsed: {
      // 侧边栏菜单是否收起
      type: Boolean
    },
  },
  setup() {
    const menuAll = menu;
    const routTo = (value) => {
      router.push({name: value.name})
    };
    
    return {
      menuAll,
      routTo,
    }
  }
})

export const push = (value) => {
  menu.push(value);
};

const menu = [];

</script>

<style scoped>

</style>