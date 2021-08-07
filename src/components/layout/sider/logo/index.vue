<template>
  <div class="logo">
    <a-space
      size="middle"
      align="center"
    >
      <a-avatar
        :src="src"
        @click="toHome"
        shape="square"
      />
      <h2
        v-show="!collapsed"
        class="title"
      >
        {{ interceptString }}
      </h2>
    </a-space>
  </div>
</template>

<script>
import router from "@/router";
import {interceptString} from "@/utils/base-utils";

export default {
  name: "Logo",
  props: {
    collapsed: false,
  },
  data() {
    return {
      src: 'https://portrait.gitee.com/uploads/avatars/user/1729/5188703_Zjy15_1578982040.png!avatar200',
      name: '幼年星辰'
    }
  },
  computed: {
    interceptString(){
      return interceptString(this.name, 7)
    }
  },
  methods: {
    toHome() {
      router.push("/");
    },
  },
}
</script>

<style scoped>
.logo {
  display: flex;
  height: 64px;
  padding-left: 24px;
  overflow: hidden;
  line-height: 64px;
  white-space: nowrap;
  align-items: center;
}

.logo .ant-design-image {
  height: 32px;
  margin-right: 8px;
}

.logo .title {
  margin-bottom: 0;
  color: #ffffff;
}

</style>