<template>
  <div class="select">
    <span v-if="label" class="select__label">{{ label }}</span>
    <el-select :value="value" :placeholder="placeholder" @change="update" :disabled="disabled">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    value: {
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    update(value) {
      this.$emit('change', value);
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  display: flex;
  flex-direction: column;
  max-width: 304px;
  &__label {
    line-height: 1.33;
    font-size: 12px;
    color: #939aa2;
  }
  ::v-deep .el-input {
    &__inner {
      border: none;
      border-bottom: 1px solid #e8e6e6;
      border-radius: 1px;
      padding-left: 0px;
    }
  }
  ::v-deep .el-input.is-focus {
    .el-input__inner {
     border-color: #D92337 ;
    }
  }
}
</style>
