<template>
  <a-layout class="layout">
    <a-layout-sider :trigger="null"
                    class="layout-sider"
                    collapsible>
      <Sider :collapsed="collapsed"/>
    
    </a-layout-sider>
    <a-layout class="ant-layout">
      <a-layout-header class="ant-layout-header">
        <Header/>
      </a-layout-header>
      <a-layout-content class="ant-layout-content">
        <Content/>
      </a-layout-content>
      <a-layout-footer class="ant-layout-footer">
        <Footer/>
      </a-layout-footer>
    </a-layout>
  </a-layout>

</template>

<script>


import Footer from "./footer";
import Header from "./header";
import Content from "./content";
import Sider from "./sider";
import {defineComponent, ref} from 'vue';


export default defineComponent({
  name: "Layout",
  components: {
    Sider,
    Content,
    Header,
    Footer,
  },
  setup() {
    const collapsed = false;
    
    return {
      collapsed,
    }
  }
})
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.layout .ant-layout {
  overflow: hidden;
}

.layout .layout-content {
}
</style>