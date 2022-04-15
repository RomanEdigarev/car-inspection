<template>
  <div class="photo-form">
    <div class="photo-form__title">Общий вид</div>
    <div class="photo-form__block">
      <AddMedia v-for="title in firstBlockTitles" :title="title"/>
      <AddMedia title="Круговое видео" type="camera"/>
    </div>
    <div class="photo-form__title">Подробно</div>
    <div class="photo-form__block">
      <AddMedia v-for="title in secondBlockTitles" :title="title"/>
    </div>
    <Button class="photo-form__btn" type="primary" >
      Продолжить
    </Button>
  </div>
</template>

<script>
import { Button } from '@/ui';
import AddMedia from './AddMedia/AddMedia';

export default {
  name: 'PhotoForm',
  components: { AddMedia, Button },
  data() {
    const files = [];
    const firstBlockTitles = [
      'Спереди слева',
      'Спереди справа',
      'Сзади слева',
      'Сзади справа',
    ];

    const secondBlockTitles = [
      'Фото VIN-кода',
      'Фото передней части салона',
      'Фото показаний одометра при включенном зажигании (при наличии ключей от ТС)',
      'Фото шин и дисков',
      'Фото задней части салона',
      'Фото подкапотного пространства',
    ];


    return {
      imageUrl: '',
      files,
      firstBlockTitles,
      secondBlockTitles,
    };
  },

};
</script>

<style lang="scss" scoped>
.photo-form {
  padding: 32px;
  &__block {
    display: grid;
    justify-content: space-between;
    grid-template-columns: minmax(auto, 304px) minmax(auto, 304px);
    margin-bottom: 32px;
    grid-row-gap: 16px;

  }
  &__title {
    font-weight: bold;
    margin-bottom: 16px;
  }
  &__item {
    display: flex;
    align-items: center;
  }
  &__btn {
    float: right;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
