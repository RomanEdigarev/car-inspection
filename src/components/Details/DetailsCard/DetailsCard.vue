<template>
  <div class="details-card">
    <div class="details-card__header">
      {{ inspectionScript.components.get(selectedDamagedComponent.component).name }}
    </div>
    <div class="details-card__body">
      <span class="details-card__body__title text-style-45">Фотографии</span>
      <div class="details-card__photos">
        <AddMedia
          v-for="photo in selectedDamagedComponent.photos"
          :current-image-url="photo"
        />
      </div>
      <span class="details-card__body__title text-style-45"
        >Типы повреждения</span
      >
      <div class="details-card__checkboxes">
        <Checkbox
          v-for="damage in arrDamages"
          :checked="selectedDamagedComponent.damages.includes(damage.id)"
          :label="damage.name"
          @change="change(damage, $event)"
        />
      </div>
      <span class="details-card__body__title text-style-45">Комментарий</span>
      <Input :value="selectedDamagedComponent.comment" @input="changeComment" class="details-card__input" label="Введите текст комментария" />
      <hr class="details-card__line" />
      <Button>
        Далее
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import AddMedia from '@/components/PhotoForm/AddMedia/AddMedia.vue';
import { Checkbox, Input } from '@/components';
import { Button } from '@/ui';
import ContractsHelper from '@/helpers/contracts/ContractsHelper';
import InspectionHelper from '@/helpers/inspection/InspectionHelper';
import { DamagedComponent } from '@/helpers/contracts/model';

export default {
  name: 'DetailsCard',
  components: { AddMedia, Checkbox, Input, Button },
  computed: {
    selectedDamagedComponent() {
      return ContractsHelper.selectedDamagedComponent;
    },
    arrDamages() {
      return InspectionHelper.arrayFromDamages;
    },
    inspectionScript() {
      return InspectionHelper.inspectionScript;
    },
  },
  methods: {
    change(damage: DamagedComponent, isChecked: boolean) {
      ContractsHelper.changeValueInCurrentDamageComponent(damage, isChecked);
    },
    changeComment(value: string) {
      ContractsHelper.changeCommentInDamagedComponent(value);
    },
  },

};
</script>

<style lang="scss" scoped>
.details-card {
  box-shadow: 0 2px 8px 0 rgba(34, 34, 37, 0.1);
  height: 100vh;
  position: sticky;
  top: 0;
  padding-bottom: 40px;

  &__header {
    padding: 32px 80px;
    box-sizing: border-box;
    background-color: #1f2229;
    color: white;
    font-size: 28px;
    font-weight: bold;
  }
  &__body {
    padding: 32px 80px;
    &__title {
      display: inline-block;
      margin-bottom: 16px;
    }
  }
  &__photos {
    display: flex;
    margin-bottom: 32px;
    ::v-deep .add-media {
      border: none;
    }
  }
  &__checkboxes {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 24px;
    margin-bottom: 32px;
  }
  &__input {
    margin-top: 24px;
    max-width: 424px;
    ::v-deep & > span {
      display: none;
    }
  }
  &__line {
    margin-top: 40px;
    margin-bottom: 28px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom:1px solid #e8e6e6;
  }
}
</style>
