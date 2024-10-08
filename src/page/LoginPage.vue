<script setup>
import { ref } from "vue";
const input = ref("");
const input1 = ref("");
</script>
<template>
  <header>
    <img src="../static/images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png" />
    <div class="biglogin">
      <div class="loginbox">
        <h1 style="text-align: center">登录，即刻创造您的应用</h1>
        <div class="switchlogin">
          <p class="fix">手机号登陆</p>
          <p class="fix">账号密码登录</p>
        </div>
        <div class="textinput">
          <p>
            <el-input
              v-model="input"
              style="width: 350px; height: 50px"
              placeholder="账号"
            />
          </p>
          <p>
            <el-input
              v-model="input1"
              style="width: 350px; height: 50px"
              type="password"
              placeholder="密码"
              show-password
            />
          </p>
        </div>
        <el-checkbox label="我已阅读并同意服务协议和隐私协议" size="large" />
        <el-button type="primary" width="80px">登录</el-button>
        <p style="text-align: center">
          <span>还未注册？</span>
          <span style="color: #409eff">立即注册</span>
        </p>
      </div>
    </div>
  </header>
</template>
<style scoped>
header,
.switchlogin,
.biglogin,
.loginbox,
.textinput {
  display: flex;
}

img {
  width: 60vw;
  height: 750px;
  object-fit: contain;
  margin-left: -220px;
  margin-top: -8px;
}

.biglogin {
  width: 50vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.loginbox {
  justify-content: center;
  flex-direction: column;
  margin-right: 100px;
}

.switchlogin {
  justify-content: space-around;
}

.textinput {
  align-items: center;
  flex-direction: column;
}
.el-button {
  padding: 25px 15px;
  background-color: rgb(0, 43, 256);
}

.fix {
  cursor: pointer;
  text-decoration: underline;
}
.fix.active {
  text-decoration: underline; /* 点击后添加下划线 */
  background-color: blue;
}
</style>