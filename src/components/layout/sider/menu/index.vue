<template>
  <a-menu
    :inline-collapsed="collapsed"
    :open-key="openKeys"
    :selected-keys="selectedKeys"
  >
    <a-menu-item key="1">
      <template #icon>
        <PieChartOutlined />
      </template>
      <span>Option 1</span>
    </a-menu-item>
  </a-menu>
</template>

<script>
import {PieChartOutlined} from '@ant-design/icons-vue';

export default {
  name: "ZyMenu",
  components: {PieChartOutlined},
  props: {
    collapsed: {
      // 侧边栏菜单是否收起
      type: Boolean
    }
  },
  data() {
    return {
      openKeys: 1,
      selectedKeys: [1]
    }
  },
}
</script>

<style scoped>

</style>