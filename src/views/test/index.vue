<template>
  <div>
    test
    {{ count }}
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue';
import {onBeforeMount, onBeforeUpdate, onMounted, onUpdated} from "@vue/runtime-core";
import {testFun} from "../../api/test";

export default defineComponent({
  name: "Test",
  setup() {
    const count = ref(1)
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      count.value = count.value + 1;
      count.value = testFun();
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    return {
      count
    }
  }
})

</script>

<style scoped>

</style>