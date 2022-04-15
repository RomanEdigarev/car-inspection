<template>
  <div class="auth">
    <el-row>
      <el-col
        class="auth__left-side"
        :xs="4"
        :sm="6"
        :md="8"
        :lg="12"
        :xl="12"
        :style="{
          backgroundImage: `url(${require('/src/assets/images/auth-bg.jpg')})`
        }"
      >
      </el-col>
      <el-col
        class="auth__right-side"
        :xs="4"
        :sm="18"
        :md="16"
        :lg="12"
        :xl="12"
      >
        <el-row :gutter="12" type="flex" justify="space-between">
          <el-col :span="10" class="auth__login">
            <Login />
          </el-col>
          <el-col :span="10" class="auth__change-password">
            <ChangePass />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Login, ChangePass } from '@/components';

export default Vue.extend({
  name: 'AuthHelper',
  components: { Login, ChangePass },
  data: () => ({}),
});
</script>

<style lang="scss" scoped>
.auth {

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__left-side {
    height: 100vh;
  }

  &__right-side {
    height: 100vh;
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $clr-beta;
    ::v-deep .el-row {
      width: 100%;
    }
  }

}
</style>
