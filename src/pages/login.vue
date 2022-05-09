<template>
  <div class="flex justify-center items-center flex-col">
    <div class="login-bg"></div>
    <div class="font-light text-5xl pt-20">后台工具箱</div>
    <div class="pt-6 pb-14 text-smallTip">萤石云、根云在线工具集</div>
    <div class="w-100">
      <n-form
        ref="formRef"
        label-placement="left"
        size="large"
        :model="loginForm"
        :rules="rules"
        @keyup.enter="handleSubmit"
      >
        <n-form-item path="username">
          <n-input v-model:value="loginForm.username" placeholder="请输入用户名">
            <template #prefix>
              <n-icon size="18" color="#808695">
                <PersonOutline />
              </n-icon>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item path="password">
          <n-input v-model:value="loginForm.password" type="password" show-password-on="click" placeholder="请输入密码">
            <template #prefix>
              <n-icon size="18" color="#808695">
                <LockClosedOutline />
              </n-icon>
            </template>
          </n-input>
        </n-form-item>
        <div class="mb-5"><n-checkbox :checked="rememberPw">记住密码</n-checkbox></div>
        <n-form-item>
          <n-button type="primary" size="large" :loading="loding" block @click="handleSubmit">登入</n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script setup>
  import { changeBodyColor, handleLogin } from '@/components/common/login/useLogin';
  import store from '@/store/store';
  import { PersonOutline, LockClosedOutline } from '@vicons/ionicons5';
  import { useMessage } from 'naive-ui';
  import { onMounted, reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';

  onMounted(() => {
    changeBodyColor();
  });

  const formRef = ref();
  const loding = ref(false);
  const rememberPw = ref(true);
  const message = useMessage();
  const router = useRouter();
  const loginForm = reactive({ username: '', password: '' });

  const rules = {
    username: { required: true, message: '请输入账号呀', trigger: 'blur' },
    password: { required: true, message: '嗯？你没输入密码么？', trigger: 'blur' },
  };

  if (rememberPw.value) {
    loginForm.username = store.state.username ?? '';
    loginForm.password = store.state.userpassword ?? '';
  }

  function handleSubmit(e) {
    e.preventDefault();
    loding.value = true;
    formRef.value?.validate(errors => {
      if (!errors) {
        handleLogin(loginForm)
          .then(() => {
            store.setUserName(loginForm.username);
            store.setUserPassword(loginForm.password);
            message.success('登入成功');
            router.push('/ys7');
          })
          .catch(err => {
            loding.value = false;
            if (err.response) {
              loding;
              message.error(err.response.data.message);
            } else {
              message.error(err.message);
              console.log('Error', err.message);
            }
          });
      } else {
        loding.value = false;
        message.error('请输入正确的账号和密码');
      }
    });
  }
</script>

<style lang="scss" scoped>
  .login-bg {
    background-image: url('@assets/img/login.svg');
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // filter: blur(5px);
    // transform: scale(1.02);
    z-index: -1;
  }

  .errorTip {
    font-size: 0.8rem;
    min-height: 20px;
    line-height: normal;
    margin: 6px 0;

    p {
      color: var(--error-color);
      margin: 0;
    }
  }
</style>
