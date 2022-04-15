<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox='`0 0 ${width} ${height}`'
  >
      <slot />
  </svg>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    width: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
    },
  },
};
</script>

<style scoped></style>
