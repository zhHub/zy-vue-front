<template>
  <div class="content-tabs">
    
    <router-view/>
  </div>
</template>

<script>
import {defineComponent, toRef} from 'vue';

export default defineComponent({
  name: "Content",
  props: {
    count: {
      type: Number,
      default: 12
    },
  },
  setup(props) {
    const count = toRef(props, 'count');
    return {
      count,
    };
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