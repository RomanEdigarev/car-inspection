<template>
  <el-input class="search-input" :value="value" @input="updateStr">
    <i slot="suffix" class="el-input__icon el-icon-search"></i>
  </el-input>
</template>

<script>
export default {
  name: 'Search',
  props: ['value'],
  methods: {
    updateStr(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  ::v-deep .el-input__inner {
    border: none;
    border-radius: 1px;
  }
  ::v-deep .el-input__icon {
    font-size: 18px;
    display: flex;
  }
}

</style>
