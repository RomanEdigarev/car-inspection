<template>
  <el-row class="inspection-form">
    <el-col class="inspection-form__left-side" :span="10">
      <InspectionFormHeader @back="$emit('back')"/>
      <InspectionFormForm />
    </el-col>

    <el-col
        v-if="currentContract"
        class="inspection-form__right-side"
        :span="14"
        type="flex"
        justify="end"
    >
      <DetailsCard v-if="selectedDamagedComponent"/>

    </el-col>
  </el-row>
</template>

<script>
import InspectionHelper from '@/helpers/inspection/InspectionHelper';
import { DetailsCard } from '@/components';
import InspectionFormHeader from './InspectionFormHeader/InspectionFormHeader';
import InspectionFormForm from './InspectionFormForm/InspectionFormForm';

export default {
  name: 'InspectionForm',
  components: { InspectionFormHeader, InspectionFormForm, DetailsCard },
  async created() {
    await InspectionHelper.fetchGetAllParams();
  },
  async mounted() {
    await InspectionHelper.fetchGetInitialInspection(
      this.$store.state.contracts.currentContract.inspection.id,
    );
    InspectionHelper.initForm();
  },
  computed: {
    currentContract() {
      return this.$store.state.contracts.currentContract;
    },
    selectedDamagedComponent() {
      return this.$store.getters['contracts/selectedDamagedComponent'];
    },
  },

};
</script>

<style lang="scss" scoped>
.inspection-form {
  //max-width: 720px;
  margin-left: 80px;
  &__right-side {
    max-width: 1040px;
    float: right;
  }
}
</style>
