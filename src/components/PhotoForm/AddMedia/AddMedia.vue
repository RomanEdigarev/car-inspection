<template>
  <div class="add-media">
    <el-upload
      class="add-media__upload"
      action=""
      :auto-upload="true"
      list-type="picture-card"
      :show-file-list="true"
      :on-preview="handlePictureCardPreview"
      :on-change="change"
      :on-remove="removeImage"
      :http-request="sendFile"
    >
      <img v-if="currentImageUrl || imageUrl" :src="currentImageUrl || imageUrl" class="add-media__image" />
      <img v-else :src="require(`/src/assets/images/${type}-icon.svg`)" />
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    <span v-if="title" class="add-media__title"> {{ title }} </span>
  </div>
</template>

<script>
import FilesHelper from '@/helpers/files/FilesHelper';

export default {
  name: 'AddMedia',
  props: {
    title: {
      type: String,
    },
    type: {
      type: String,
      default: 'photo',
    },
    currentImageUrl: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    imageUrl: '',
    dialogImageUrl: '',
    dialogVisible: false,
  }),
  methods: {
    change(file) {
      this.file = file;
      // this.imageUrl = URL.createObjectURL(file.raw);
    },
    async sendFile() {
      await FilesHelper.sendFile(this.file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    removeImage() {
      this.imageUrl = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.add-media {
  max-width: 304px;
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #e8e6e6;
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__title {
    font-size: 14px;
  }
  &__upload {
    margin-right: 16px;
    ::v-deep .el-upload {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 112px;
      height: 72px;
      border-radius: 0.7px;
      border: solid 0.7px rgba(232, 230, 230, 0.3);
      background-color: rgba(250, 250, 250, 0.6);
      &-list {
        position: absolute;
        &__item {
          width: 112px;
          height: 72px;
          border-radius: 0.7px;
          border: 1px solid rgba(232, 230, 230, 0.3);
        }
        &__item-thumbnail {
          object-fit: cover;
        }
      }
    }
  }
}
</style>
