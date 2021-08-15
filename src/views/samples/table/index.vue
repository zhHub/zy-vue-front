<template>
  <a-table :dataSource="dataSource" :columns="columns">
    <template #finish="{text:finish}">
    <span>
      <check-circle-two-tone v-if="finish"/>
      <close-circle-two-tone v-if="!finish"/>
    </span>
    </template>
  </a-table>
</template>

<script>
import {defineComponent} from 'vue';
import {CheckCircleTwoTone, CloseCircleTwoTone} from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    CheckCircleTwoTone,
    CloseCircleTwoTone
  },
  setup() {
    return {
      dataSource: [
        {
          key: '1',
          name: '胡彦斌',
          finish: true,
          time: '2021年8月15日19:44:54'
        },
        {
          key: '2',
          name: '胡彦祖',
          finish: false,
          time: '2021年8月15日19:44:54'
        },
      ],
      columns: [
        {
          title: '组件',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '是否完成',
          dataIndex: 'finish',
          key: 'finish',
          /* 自定义实现列操作 */
          slots: {
            customRender: 'finish',
          },
        },
        {
          title: '完成日期',
          dataIndex: 'time',
          key: 'time',
        },
      ],
    };
  },
})
</script>

<style scoped>

</style>