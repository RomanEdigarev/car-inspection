<template>
  <div class="inspection-form-block" :class="{'is-static': isStatic}">
    <span class="inspection-form-block__title">{{ title }}</span>
    <div class="inspection-form-block__input-container">
      <el-form-item
        v-for="(item, index) in formBlock"
        :rules="item.rules"
        :prop="item.prop"
      >
        <!-- eslint-disable-next-line vue/require-component-is -->
        <component
          :is="item.type"
          :value="item.value"
          :options="item.options"
          :label="item.name"
          @change="changeValue(index, $event)"
          @input="changeValue(index, $event)"
        />
      </el-form-item>
    </div>
  </div>
</template>

<script>
import InspectionHelper from '@/helpers/inspection/InspectionHelper';
import { Input, Select } from '@/components';

export default {
  name: 'InspectionFormBlock',
  // eslint-disable-next-line vue/no-unused-components
  components: { Input, Select },
  props: {
    indexInForm: {
      type: Number,
      required: true,
    },
    formBlock: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
    },
    isStatic: {
      type: Boolean,
      default: false,
    },
  },
  data: () => {
    const value = '';
    const options = [
      {
        value: 'Option1',
        label: 'Option1',
      },
    ];
    return {
      value,
      options,
    };
  },
  mounted() {
    if (this.isStatic) {
      const inputs = document.querySelectorAll('input');
      for (const input of inputs) {
        input.setAttribute('disabled', 'true');
      }
    }
  },
  computed: {
    allParamsByText() {
      return this.$store.state.inspection.allParamsByText;
    },
  },
  methods: {
    changeValue(index, value) {
      InspectionHelper.setNewValueInForm({
        indexInForm: this.indexInForm,
        indexInBlock: index,
        value,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.inspection-form-block {
  margin-top: 32px;
  &__title {
    display: inline-block;
    font-weight: bold;
    margin-bottom: 16px;
  }

  &__input-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

.inspection-form-block.is-static {
  margin-top: 0;
  ::v-deep .el-select .el-input__suffix {
    display: none;
  }
}
</style>
