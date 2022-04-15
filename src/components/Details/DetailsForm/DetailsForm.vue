<template>
  <div class="details-form">
    <div
      class="details-form__item"
      v-for="(damagedComponent, index) in damagedComponents"
      :class="{ 'is-current': index === currentIndex }"
      @click="setCurrentDamagedComponent(index)"
    >
      {{ index + 1}}. {{ damagedComponent.component.name }}
    </div>
  </div>
</template>

<script>

import ContractsHelper from '@/helpers/contracts/ContractsHelper';

export default {
  name: 'DetailsForm',
  data: () => {
    const currentIndex = null;
    return {
      currentIndex,
    };
  },
  async mounted() {
    await ContractsHelper.getPhotosForDamages();
  },
  computed: {
    damagedComponents() {
      return ContractsHelper.damagedComponents;
    },
  },
  methods: {
    setCurrentDamagedComponent(idx) {
      ContractsHelper.setCurrentDamagedComponent(idx);
    },
  },
  watch: {
    damagedComponents() {
      if (typeof this.currentIndex === 'number' && this.currentIndex >= 0) {
        this.setCurrentDamagedComponent(this.currentIndex);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.details-form {
  display: grid;
  grid-template-columns: minmax(auto, 304px) minmax(auto, 304px);
  justify-content: space-between;
  padding: 32px 40px;
  &__item {
    max-width: 304px;
    padding: 24px 14px 24px;
    border: solid 1px #e8e6e6;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    &:hover {
      background-color: $clr-delta;
      color: white;
    }
  }

  .is-current {
    background-color: $clr-delta;
    color: white;
  }
}
</style>
