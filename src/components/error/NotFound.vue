<template>
  <div>
    <h1>
      <FrownTwoTone/>
      页面走丢了！
    </h1>
    <a-button type="primary">
      <router-link to="/">回到首页</router-link>
    </a-button>
  </div>
</template>

<script>
import {FrownTwoTone} from '@ant-design/icons-vue'

export default {
  name: "NotFound",
  components: {
    FrownTwoTone,
  }
}
</script>

<style scoped>

</style>