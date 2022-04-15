<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>
<script>
import DefaultLayout from '@/layouts/DefaultLayout';

export default {
  name: 'App',
  components: { DefaultLayout },
  computed: {
    hasError() {
      const errors = this.$store.getters.errors;
      return this && errors.length > 0;
    },
  },
  watch: {
    hasError(val) {
      const errors = this.$store.getters.errors;
      if (val) {
        this.$notify.error({
          title: errors[0].data.message,
          message: errors[0].data.type,
        });
      }
    },
  },
};
</script>

<style lang="scss">
//
</style>
