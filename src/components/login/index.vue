<template>
  <div style="width: 100%;height: 100vh; min-width: 1500px; min-height: 600px;">
    <div
      style="width: 50%; min-width: 600px; height: 100vh;background-image: url('login-bg.svg');
      position: absolute;
      top: 0;
      left: 0;
      background-position: 100%;
      background-repeat: no-repeat;
      background-size: auto 100%;"
    >
    </div>
    <div
      style="width: 80%;min-width: 1200px; height: 80%; margin-top: 10%;
      padding-top: 50px; margin-left: 10%;
      text-align: center;
      position: absolute;"
    >
      <div style="float: left; width: 50%;height: 100%;padding-top: 5%">
        <a-image :preview="false"
                 src="login-box-bg.svg"
                 style="width: 350px; height: auto;"
        />
        <div style="color: white; font-size: 24px;margin-top: 50px">
          欢迎使用 XXXX
        </div>
      </div>
      <div
        style="float: left;
        width: 50%;
        height: 100%;
        text-align: center;
        padding-left: 40px;
        font-size: 24px; "
      >
        <a-card style="width: 80%;min-height: 350px;"
                :tab-list="tabList"
                :active-tab-key="key"
                @tabChange="(tabKey) => {key = tabKey}"
        >
          <a-space direction="vertical" size="large" style="width: 90%">
            <a-input placeholder="请输入用户名" v-model:value="username" size="large">
              <template #prefix>
                <UserOutlined type="user"/>
              </template>
            </a-input>
            <a-input-password placeholder="请输入密码" v-model:value="password" size="large">
              <template #prefix>
                <LockOutlined/>
              </template>
            </a-input-password>
            <a-input-password placeholder="请输入新密码" v-model:value="newPassword" v-if="key === 'tab2'" size="large">
              <template #prefix>
                <LockOutlined/>
              </template>
            </a-input-password>
            <a-input-password placeholder="请再次输入新密码" v-model:value="secondPassword" v-if="key === 'tab2'" size="large">
              <template #prefix>
                <LockOutlined/>
              </template>
            </a-input-password>
            <a-button ghost type="primary" size="large" style="width: 100%;" @click="submit">
              {{
                key === 'tab1' ? '登录' : '修改密码'
              }}
            </a-button>
            <a-divider v-if="key === 'tab1'">
              暂无账号，请联系管理员获取
            </a-divider>
          </a-space>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent, ref} from 'vue';
import {message} from 'ant-design-vue';
import {UserOutlined, LockOutlined} from '@ant-design/icons-vue';

export default defineComponent({
  name: "index",
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const tabList = [
      {
        key: 'tab1',
        tab: '登录系统',
        slots: {
          tab: 'customRender',
        },
      },
      {
        key: 'tab2',
        tab: '修改密码',
      },
    ];
    const key = ref('tab1');
    
    /*
    npm install --save js-base64
    
    
import org.apache.commons.codec.binary.Base64
byte[] result2 = Base64.decodeBase64(result1);
        String str12=new String(result2);
     */
    const Base64 = require('js-base64').Base64;
    const submit = () => {
      if (key.value === 'tab2' && !checkNewPassword(newPassword.value, secondPassword.value)) {
        return;
      }
      if (!notBlank(username.value, "用户名不能为空") && !notBlank(password.value, "用户密码不能为空")) {
        return;
      }
      message.info(Base64.encode(password.value))
      message.info(Base64.encode(newPassword.value))
      message.info('提交成功')
    }
    
    const notBlank = (value, msg) => {
      if (value === undefined || value === '') {
        message.error(msg)
        return false;
      }
      return true;
    }
    
    const pwdRegex = new RegExp('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{6,30}');
    
    const checkNewPassword = (new1, new2) => {
      if (new1 !== new2) {
        message.error("两次输入的密码不一致")
        return false;
      } else if (!pwdRegex.test(new1)) {
        message.error("密码复杂度太低（密码中必须包含大小写字母、数字、特殊字符）,至少6个字符，最多30个字符")
        return false;
      }
      return true;
    }
    
    const username = ref();
    const password = ref();
    const newPassword = ref();
    const secondPassword = ref();
    return {
      username,
      password,
      newPassword,
      secondPassword,
      key,
      tabList,
      submit,
    }
  }
})
</script>