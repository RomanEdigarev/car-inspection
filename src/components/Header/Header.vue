<template>
  <el-header class="header">
    <el-menu
      :default-active="activeIndex"
      class="header__menu"
      mode="horizontal"
      :router="true"
    >
      <el-menu-item class="header__logo" index="/">
      </el-menu-item>
      <el-menu-item
        class="header__menu-item"
        v-for="navlink in links"
        :index="navlink.link"
      >
        {{ navlink.text }}
      </el-menu-item>
      <el-menu-item class="header__menu-item" @click="logout">
        Выйти
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>

export default {
  name: 'Header',
  components: { Logo },
  data: () => {
    const links = [
      {
        text: 'Изъятие',
        link: '/seizure',
      },
      {
        text: 'Контроль',
        link: '/control',
      },
      {
        text: 'Рекламации',
        link: '/claims',
      },
      {
        text: 'Отчеты',
        link: '/reports',
      },
    ];

    return {
      links,
    };
  },
  computed: {
    activeIndex() {
      return this.$route.path;
    },
  },
  methods: {
    logout() {
      this.$store.commit('auth/logout');
      this.$router.push('/auth');
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 64px !important;
  border-bottom: solid 1px #e6e6e6;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: white;
  & &__menu {
    height: 63px;
  }

  & &__logo {
    width: 140px;
    height: 50px;
    border: none;
  }
  & &__logo.is-active {
    border: none;
  }

  & &__menu-item {
    height: 63px;
    color: $clr-alpha;
    &:last-child {
      float: right;
    }
  }
  & &__menu-item.is-active {
    border-bottom: 4px solid $clr-delta;
  }
}
</style>
