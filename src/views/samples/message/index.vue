<template>
  <div>
    <a-button @click="success">Success</a-button>
    <a-button @click="error">Error</a-button>
    <a-button @click="warning">Warning</a-button>
  </div>
</template>
<script>
import {message} from 'ant-design-vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Message',
  setup() {
    const success = () => {
      message.success('This is a success message');
    };
    
    const error = () => {
      message.error('This is an error message');
    };
    
    const warning = () => {
      message.warning('This is a warning message');
    };
    
    return {
      success,
      error,
      warning,
    };
  },
});
</script>