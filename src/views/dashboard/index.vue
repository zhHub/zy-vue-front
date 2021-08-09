<template>
  <div>
    dashboard
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import {push} from '../../components/layout/sider/menu/index'

export default defineComponent({
  name: "Dashboard"
})
const dashboard = {
  name: 'dashboard',
  router: '/dashboard'
};
push(dashboard);
</script>

<style scoped>

</style>