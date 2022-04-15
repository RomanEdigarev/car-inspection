<template>
  <div class="order-form">
    <div class="order-form__block">
      <div class="block"></div>
      <div class="order-form__title">Информация о ТС</div>
      <el-form class="order-form__block__body">
        <InspectionFormBlock
            :form-block="form[0]"
            :index-in-form="0"
            title="Общая информация"
            is-static
        />
      </el-form>
    </div>
    <div class="order-form__block">
      <div class="block"></div>
      <div class="order-form__title">Фото / Видео</div>
      <PhotoForm class="order-form__photo-block"/>
    </div>
    <div class="order-form__block">
      <div class="block"></div>
      <div class="order-form__title">Повреждения</div>
      <div class="order-form__block__body">
        <div class="order-form__block__item" v-for="damagedComponent in damagedComponents">
          <div class="order-form__subtitle">
            {{damagedComponent.component.name}}
          </div>
          <div class="order-form__block__item__images-container">
            <img v-for="photo in damagedComponent.photos" :src="photo" alt="">
          </div>
          <div class="order-form__block__item__damage-types-container">
            <div v-for="type in damagedComponent.damages">{{type.name}}</div>
          </div>
          <div class="order-form__block__item__damage-comment" v-if="damagedComponent.comment">
            {{damagedComponent.comment}}
          </div>
        </div>
        <Button class="photo-form__btn" type="primary" >
          Продолжить
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { InspectionFormBlock, PhotoForm, DetailsForm } from '@/components';
import ContractsHelper from '@/helpers/contracts/ContractsHelper';
import { Button } from '@/ui';
import InspectionHelper from '@/helpers/inspection/InspectionHelper';

export default {
  name: 'OrderForm',
  components: { InspectionFormBlock, PhotoForm, DetailsForm, Button },
  computed: {
    form() {
      return InspectionHelper.inspectionForm;
    },
    damagedComponents() {
      return ContractsHelper.damagedComponents;
    },
  },
};
</script>

<style lang="scss" scoped>
.order-form {
  &__block {
    position: relative;
    &__body {
      padding: 32px 40px;
    }
    &__item {
      margin-bottom: 32px;
      &__images-container {
        display: flex;
        margin-bottom: 16px;
        img {
          width: 112px;
          height: 72px;
          object-fit: cover;
          margin-right: 16px;
        }
      }
      &__damage-types-container {
        display: flex;
        margin-bottom: 16px;
        & > div {
          padding: 12px 20px;
          border-radius: 1px;
          border: solid 1px rgba(232, 230, 230, 0.3);
          background-color: rgba(250, 250, 250, 0.6);
          margin-right: 12px;
        }
      }
      &__damage-comment {
        font-size: 14px;
        color: #939aa2;
      }
    }
  }

  &__title {
    box-sizing: border-box;
    width: 100%;
    padding: 16px 40px;
    color: white;
    font-size: 16px;
    background-color: #1f2229;
  }
  &__subtitle {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  &__photo-block {
    ::v-deep button {
      display: none;
    }
  }


  .block {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
}
</style>
