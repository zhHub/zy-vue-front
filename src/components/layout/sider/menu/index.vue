<template>
  <a-menu
    :inline-collapsed="collapsed"
    theme="dark"
    style="margin-left: 10px"
  >
    <a-menu-item v-for="(menu,i) in menuAll" :key="i" @click="routTo(menu)">
         <span>
            {{ menu.name }}
          </span>
    </a-menu-item>
  </a-menu>
</template>

<script>
import {PieChartOutlined} from '@ant-design/icons-vue';
import {defineComponent} from 'vue';
import router from "../../../../router";

export default defineComponent({
  name: "ZyMenu",
  components: {PieChartOutlined},
  props: {
    collapsed: {
      // 侧边栏菜单是否收起
      type: Boolean
    },
  },
  setup() {
    const menuAll = menu;
    
    const routTo = (value) => {
      router.push({name: value.router})
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