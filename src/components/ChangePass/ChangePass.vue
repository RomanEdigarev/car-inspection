<template>
  <div class="change-pass">
    <div class="change-pass__title text-style">
      {{ title }}
    </div>
    <div class="change-pass__text text-style-2">
      Вы вошли с временным паролем. <br />Для продолжения работы создайте
      постоянный пароль.
    </div>
    <el-form :model="changedPassFrom" ref="changePassForm">
      <el-form-item :rules="rules" prop="password">
        <el-input
          class="change-pass__input"
          type="password"
          show-password
          v-model="changedPassFrom.password"
          placeholder="Пароль"
        ></el-input>
      </el-form-item>
    </el-form>

    <Button type="primary" @click="changePass"> Продолжить </Button>
  </div>
</template>

<script>
import { Button } from '@/ui';

export default {
  name: 'ChangePass',
  components: { Button },
  data: () => {
    const title = 'Созадние нового пароля';

    const changedPassFrom = {
      password: '',
    };
    // Rules for form
    const rules = {
      required: true,
      message: 'Обязательное поле',
      trigger: 'blur',
    };

    return {
      title,
      changedPassFrom,
      rules,
    };
  },
  methods: {
    changePass() {
      this.$refs.changePassForm.validate(valid => {
        if (valid) {
          // TODO смена пароля
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.change-pass {
  &__title {
    text-transform: uppercase;
    margin-bottom: 32px;
    white-space: nowrap;
  }

  &__text {
    margin-bottom: 20px;
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
