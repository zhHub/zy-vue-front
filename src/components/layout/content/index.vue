<template>
  <div class="content-tabs">
    <router-view/>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: "Content",
  setup() {
    
    return {};
  },
  
})
</script>

<style scoped>
.content-tabs {
  background-color: #fff;
  height: 100vh;
  margin: 5px;
}
</style>