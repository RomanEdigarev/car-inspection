<template>
  <el-button class="button" :type="type" @click="$emit('click')" :disabled="disabled">
    <slot>Button</slot>
  </el-button>
</template>

<script lang="ts">
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  min-width: 132px;
  min-height: 36px;
}

$--button-font-size: 14px;
$--button-default-font-color: $clr-beta;
$--color-primary: $clr-delta;
$--button-border-radius: 1px;
@import "~element-ui/packages/theme-chalk/src/button";

</style>
