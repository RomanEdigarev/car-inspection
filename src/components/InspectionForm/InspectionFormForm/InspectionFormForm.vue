<template>
  <div class="inspection-form-form">
    <div class="inspection-form-form__tabs">
      <el-menu mode="horizontal" @select="handleSelect" default-active="0">
        <el-menu-item
            v-for="(tab, index) in tabs"
            class="inspection-form-form__tab"
            :index="index + ''"
        >
          <!-- eslint-disable-next-line vue/require-component-is -->
          <component v-bind:is="`${tab.icon}-icon`"></component>
          <span>{{ tab.name }}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <el-skeleton
      class="inspection-form-form__skeleton"
      v-if="isLoading"
      :rows="6"
      animated
    />
    <!-- eslint-disable-next-line vue/require-component-is -->
    <component v-else :is="`${activeTab.icon}-form`"></component>
  </div>
</template>

<script>
import { DetailsForm, InfoForm, PhotoForm, OrderForm } from '@/components';
import * as Icons from '@/components/Icons';

export default {
  name: 'InspectionFormForm',
  components: { InfoForm, PhotoForm, DetailsForm, ...Icons, OrderForm },
  data: () => {
    const tabs = [
      {
        name: 'Информация о ТС',
        icon: 'info',
      },
      {
        name: 'Фото / Видео',
        icon: 'photo',
      },
      {
        name: 'Повреждения',
        icon: 'details',
      },
      {
        name: 'Результат осмотра',
        icon: 'order',
      },
      {
        name: 'Завешение',
        icon: 'finish',
      },
    ];
    const activeTab = {
      name: 'Информация о ТС',
      icon: 'info',
    };
    return {
      tabs,
      activeTab,
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.inspection.isLoading;
    },
  },
  methods: {
    handleSelect(key) {
      this.activeTab = this.tabs[key];
    },
  },
};
</script>

<style lang="scss" scoped>
.inspection-form-form {
  width: 100%;
  max-width: 720px;
  box-shadow: 0 2px 8px 0 rgba(34, 34, 37, 0.1);
  padding-bottom: 40px;
  margin-top: 24px;

  &__skeleton {
    padding: 20px;
  }

  &__tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1;
    justify-content: center;
    height: 80px !important;

    span {
      margin-top: 4px;
      display: inline-block;
      line-height: 1;
    }
    &:hover {
      ::v-deep g {
        transition: opacity 0.3s ease-in-out;
        opacity: 1 !important;
      }
    }
  }
  & &__tab.is-active {
    border-bottom: 1px solid $clr-delta;
    ::v-deep g {
      transition: opacity 0.3s ease-in-out;
      opacity: 1 !important;
    }
  }

  .el-form {
    padding-left: 40px;
  }
  &__btn {
    float: right;
    margin-right: 40px;
  }
}
</style>
