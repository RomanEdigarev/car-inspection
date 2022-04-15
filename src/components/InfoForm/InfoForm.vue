<template>
  <el-form v-else ref="dynamicValidateForm" :model="modelForm">
    <InspectionFormBlock
      v-for="(formBlock, index) in form"
      :form-block="formBlock"
      :index-in-form="index"
      :title="blockTitles[index]"
    />
    <el-form-item>
      <Button
        class="inspection-form-form__btn"
        type="primary"
        @click="submitForm('dynamicValidateForm')"
      >
        Продолжить
      </Button>
    </el-form-item>
  </el-form>
</template>

<script>
import InspectionFormBlock from '@/components/InspectionForm/InspectionFormBlock/InspectionFormBlock';
import { Button } from '@/ui';
import * as Icons from '@/components/Icons';
import { PhotoForm } from '@/components';

export default {
  name: 'InfoForm',
  components: { InspectionFormBlock, Button, ...Icons, PhotoForm },
  data: () => {
    const blockTitles = [
      'Информация из КХД',
      'Общая информация',
      'Двигатель / КПП / АКБ / Привод',
      'Ключи / Сигнализация',
      'Резина / Ремонтный Комплект',
      'Комфорт в салоне',
      'Комплектация',
      'Дополнительное оборудование',
    ];
    return {
      blockTitles,
    };
  },
  computed: {
    form() {
      return this.$store.state.inspection.form;
    },
    modelForm() {
      const model = {};
      this.form.forEach(formBlock => formBlock.forEach(formItem => {
        model[formItem.prop] = formItem.value;
      }));
      return model;
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // TODO
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style scoped></style>
