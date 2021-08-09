<template>
  <div>
    test
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import {push} from '../../components/layout/sider/menu/index';

export default defineComponent({
  name: "Test"
})
const test = {
  name: 'test',
  router: '/test'
};
push(test);

</script>

<style scoped>

</style>