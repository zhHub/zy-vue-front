<template>
  <div>
    <h1>
      500！
    </h1>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="primary">
      <router-link to="/">回到首页</router-link>
    </a-button>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: "500",
  components: {}
})
</script>

<style scoped>

</style>