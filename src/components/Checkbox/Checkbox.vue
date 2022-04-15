<template>
  <el-checkbox class="checkbox" :value="checked" @change="$emit('change', $event)">{{label}}</el-checkbox>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
  },

};
</script>

<style lang="scss" scoped>
.checkbox {
  ::v-deep .el-checkbox {
    &__input.is-checked {
      .el-checkbox__inner {
        background-color: transparent;
        border: 1px solid #e8e6e6;
        &:after {
          border: 1px solid $clr-delta;
          border-left: 0;
          border-top: 0;
        }
      }
      &+.el-checkbox__label {
        color: black;
      }
    }
    &__label {
      color: black
    }
  }
}

</style>
