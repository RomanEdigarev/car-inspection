<template>
  <div id="app">
    <Header v-if="showHeader" />
    <el-main class="main" :class="{ 'is-auth': isAuthPage }">
      <slot></slot>
    </el-main>
  </div>
</template>

<script>
import { Header } from '@/components';

export default {
  name: 'DefaultLayout',
  data: () => {
    const isAuthPage = false;
    return {
      isAuthPage,
    };
  },
  components: { Header },
  created() {
    this.isAuthPage = window.location.pathname === '/auth';
  },
  computed: {
    showHeader() {
      return !this.isAuthPage;
    },
  },
  watch: {
    $route() {
      this.isAuthPage = this.$route.path === '/auth';
    },
  },
};
</script>

<style lang="scss">
.main.el-main {
  margin-top: 64px;
  background-color: #fafafa;
  overflow: initial;
  padding: 0 0 24px 0;
}
#app .is-auth {
  padding: 0;
}
</style>
