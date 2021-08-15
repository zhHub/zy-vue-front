<template>
  <div class="header">
    <a-row>
      <a-col :span="22" class="pro-info">
        欢迎 {{ name }} 使用！！！
      </a-col>
      <a-col :span="2" class="user-info">
        <a-badge
          :count="count"
          :overflow-count="overflowCount"
        >
          <a-avatar
            :src="src"
            @click="avatarClick"
          />
        </a-badge>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import {defineComponent, ref, toRef} from 'vue';

export default defineComponent({
  name: "Header",
  props: {
    count: Number,
    name: String,
  },
  setup(props) {
    const count = ref(toRef(props, 'count').value);
    const src = ref('https://portrait.gitee.com/uploads/avatars/user/1729/5188703_Zjy15_1578982040.png!avatar200');
    const name = toRef(props, 'name');
    const overflowCount = ref(100);
    const avatarClick = () => {
      if (count.value > 0) {
        count.value--;
      }
    };
    return {
      src,
      name,
      count,
      overflowCount,
      avatarClick
    }
  },
  methods: {},
})
</script>

<style scoped>
.header {
  width: 100%;
  color: #ffffff;
}

.header .pro-info {
  text-align: center;
}

.header .user-info {
  text-align: right;
}
</style>