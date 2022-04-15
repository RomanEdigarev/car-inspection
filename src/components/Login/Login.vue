<template>
  <div class="login">
    <div class="login__title text-style">
      {{ loginTitle }}
    </div>
    <el-form ref="loginForm" :model="loginData" :rules="rules">
      <el-form-item prop="login">
        <el-input
          class="login__input"
          v-model="loginData.login"
          placeholder="Логин"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          class="login__input"
          v-model="loginData.password"
          placeholder="Пароль"
        ></el-input>
      </el-form-item>
      <Button type="primary" @click="onLogin"> Войти </Button>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Button } from '@/ui';
import * as yup from 'yup';
import AuthHelper from '@/helpers/auth/AuthHelper';

export default {
  name: 'Login',
  components: { Button },
  data: () => {
    const loginTitle = 'Вход в систему';
    const loginData = {
      login: '',
      password: '',
    };
    const isValidForm = false;

    const validationSchema = yup.object().shape({
      login: yup.string().required('Обязательное поле'),
      password: yup.string().required('Обязательное поле'),
    });

    // Rules for form
    const rules = {
      login: [
        {
          required: true,
          message: 'Обязательное поле',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: 'Обязательное поле',
          trigger: 'blur',
        },
      ],
    };

    return {
      loginTitle,
      loginData,
      rules,
      validationSchema,
      isValidForm,
    };
  },
  methods: {
    onLogin() {
      const $this = this as any;
      $this.$refs.loginForm.validate(async (valid: boolean) => {
        if (valid) {
          await AuthHelper.login($this.loginData);
          if ($this.$store.state.auth.isAuth) {
            await $this.$router.push('/seizure');
          }
        } else {
          return false;
        }
      });
    },
  },
  watch: {
    loginData: {
      async handler({ login, password }: any) {
        const self = this as any;
        self.isValidForm = await self.validationSchema.isValid({
          login,
          password,
        });
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__title {
    color: $clr-alpha;
    text-transform: uppercase;
    margin-bottom: 32px;
  }
  &__input {
    ::v-deep .el-input__inner {
      border-top: none;
      border-left: none;
      border-right: none;
      border-radius: 0;
      &::placeholder {
        color: $clr-epsilon;
      }
      &:focus {
        border-color: $clr-delta;
      }
    }
  }
}
</style>
