<template>
  <div class="inspection-form-header">
    <div class="inspection-form-header__nav">
      <button class="inspection-form-header__nav__back-btn" @click="back">
        <i class="el-icon-arrow-left"></i>
        <span>Назад</span>
      </button>
      <div class="inspection-form-header__nav__car-info">
        Осмотр ТС {{ currentContractCar.make }} {{ currentContractCar.model }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InspectionFormHeader',
  methods: {
    back() {
      this.$emit('back');
    },
  },
  computed: {
    currentContractCar() {
      return this.$store.state.contracts.currentContract.car;
    },
  },
};
</script>

<style lang="scss" scoped>
.inspection-form-header {
  &__nav {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 720px;
    height: 48px;
    margin: 16px 0 24px 0;
    padding: 12px;
    box-shadow: 0 2px 8px 0 rgba(34, 34, 37, 0.1);
    background-color: white;

    &__car-info {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.5;
      color: #939aa2;
    }

    &__back-btn {
      border: none;
      background-color: transparent;
      display: flex;
      align-items: center;
      span {
        margin-top: -1px;
        font-weight: 600;
        font-size: 12px;
        margin-left: 8px;
        cursor: pointer;
      }
    }
  }
}
</style>
