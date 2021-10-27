<template>
  <a-button type="primary" @click="editToggleNameDescription">新增</a-button>
  <br/>
  <br/>
  <a-table :dataSource="dataSource" :columns="columns" :pagination="false" :scroll="{ y: 300 }" rowKey="id">
    <template #action="{ record }">
      <a @click="editToggleNameDescription(record)">修改</a>
      <a-divider type="vertical"/>
      <a @click="deleteToggleNameDescription(record)">删除</a>
    </template>
  </a-table>
  
  <a-modal :visible="visible"
           title="特性描述"
           ok-text="保存"
           cancel-text="取消"
           centered
           :maskClosable="false"
           @ok="handleOk"
           @cancel="handleCancel">
    <a-select
      v-model:value="toggleName"
      show-search
      placeholder="请选择一个特性"
      style="width: 400px"
      :options="options"
      :disabled="id>0"
      :aria-required="true"
    />
    <br/>
    <br/>
    <a-input v-model:value="toggleDescription"
             style="width: 400px"
             placeholder="请输入特性描述"/>
  </a-modal>
</template>

<script>
import {defineComponent, ref} from 'vue';
import {getAllToggleNameDescription} from "../../../api/test";

export default defineComponent({
  name: "index",
  setup() {
    const dataSource = ref([]);
    const searchAllToggleNameDescription = () => {
      // TODO 调用后台查询接口 getAllToggleNameDescription 模拟获取数据
      dataSource.value = getAllToggleNameDescription(0).data;
    }
    searchAllToggleNameDescription()
    
    const deleteToggleNameDescription = (record) => {
      console.log("deleteToggleNameDescription")
      console.log(record)
      // TODO 调用后台删除接口
    }
    const visible = ref(false);
    const id = ref('');
    const toggleName = ref('');
    const toggleDescription = ref('');
    let i = 1;
    const strings = [
      {value: 'toggle' + i, label: 'toggle' + (i++)},
      {value: 'toggle' + i, label: 'toggle' + (i++)},
      {value: 'toggle' + i, label: 'toggle' + (i++)},
      {value: 'toggle' + i, label: 'toggle' + (i++)},
    ];
    const options = ref(strings)
    const editToggleNameDescription = (record) => {
      visible.value = !visible.value;
      id.value = record.id;
      toggleName.value = record.toggleName;
      toggleDescription.value = record.toggleDescription;
    }
    const handleOk = () => {
      if (!toggleName.value){
        return;
      }
      if (!toggleDescription.value){
        return;
      }
      const toggleNameDescription = {};
      if (id.value) {
        toggleNameDescription.id = id.value;
      }
      toggleNameDescription.toggleName = toggleName.value;
      toggleNameDescription.toggleDescription = toggleDescription.value;
      // TODO 调用后台保存接口
      // save(toggleNameDescription)
      console.log(toggleNameDescription)
      // 退出弹框
      handleCancel()
      // 刷新页面数据
      searchAllToggleNameDescription()
    }
    const handleCancel = () => {
      id.value = '';
      toggleName.value = '';
      toggleDescription.value = '';
      visible.value = !visible.value;
    }
    
    return {
      visible,
      options,
      id,
      toggleDescription,
      toggleName,
      editToggleNameDescription,
      deleteToggleNameDescription,
      handleOk,
      handleCancel,
      dataSource,
      columns: [
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: '特性名称',
          dataIndex: 'toggleName',
          key: 'toggleName',
        },
        {
          title: '特性描述',
          dataIndex: 'toggleDescription',
          key: 'toggleDescription',
        },
        {
          title: '操作',
          key: 'operation',
          fixed: 'right',
          slots: {
            customRender: 'action',
          },
        },
      ],
    };
  },
})
</script>

<style scoped>

</style>