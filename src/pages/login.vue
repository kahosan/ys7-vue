<template>
  <div id="login">
    <div class="bg"></div>
    <div id="login-form">
      <h1>阿巴阿巴后台</h1>
      <form class="form-group">
        <input :class="{ error: usernameError }" type="text" v-model="username" placeholder="账号" autofocus />
        <div class="errorTip clearfix">
          <p>{{ usernameTip }}</p>
        </div>
        <input :class="{ error: passwordError }" type="password" v-model="password" placeholder="密码" autocomplete="true" @keyup.enter="login" />
        <div class="errorTip clearfix">
          <p>{{ passwordTip }}</p>
        </div>
        <div class="submit">
          <button @click="login">登入</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '@assets/scss/login.scss';
</style>

<script setup>
  import loginData from '@components/common/login/useLogin';

  const { username, usernameError, usernameTip, password, passwordError, passwordTip, login } = loginData();
</script>
