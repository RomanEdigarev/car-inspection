<template>
  <div class="input-container">
    <span>{{ label }}</span>
    <el-input
      type="text"
      class="input"
      :value="value"
      :placeholder="label"
      @input="inputStr"
      @change="changeStr"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: {
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
  methods: {
    inputStr(value) {
      this.$emit('input', value);
    },

    changeStr(value) {
      this.$emit('change', value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  &-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 304px;
    span {
      line-height: 1.33;
      font-size: 12px;
      color: #939aa2;
    }
  }

  ::v-deep .el-input__inner {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    padding: 0;
    &::placeholder {
      color: $clr-epsilon;
    }
    &:focus {
      border-color: $clr-delta;
    }
  }
}
</style>
