<template>
  <el-card
    class="contract-card"
    :class="{
      'is-current': contract === currentContractId,
    }"
    shadow="always"
    @click.native="setCurrentContract(contract.id)"
  >
    <div class="text-style-45" @click="setCurrentContract(contract.id)">
      {{ contract.car.make }} {{ contract.car.model }}
    </div>
    <div class="contract-card__text">{{ contract.creditAgreementNumber }}</div>
    <div class="contract-card__text with-line">
      <span>{{ contract.car.licensePlate }}</span>
      <div class="contract-card__line"></div>
      <span>VIN:{{ contract.car.vin }}</span>
    </div>
    <div class="contract-card__text">Изъятие остановлено</div>
    <div class="contract-card__text">{{ contract.client.clientName }}</div>
  </el-card>
</template>

<script>
import InspectionHelper from '@/helpers/inspection/InspectionHelper';
import LocalStorageService from '@/services/localStorage/LocalStorageService';

export default {
  name: 'ContractCard',
  props: {
    contract: {
      type: Object,
    },
  },
  methods: {
    async setCurrentContract(id) {
      this.$store.commit('contracts/setCurrentContract', id);
      LocalStorageService.setKey('currentContract', true);
      InspectionHelper.resetForm();
      await InspectionHelper.fetchGetInitialInspection(
        this.$store.state.contracts.currentContract.inspection.id,
      );
    },
  },
  computed: {
    currentContractId() {
      return this.$store.state.contracts.currentContract
        ? this.$store.state.contracts.currentContract.id
        : null;
    },
  },
};
</script>

<style lang="scss" scoped>
.contract-card {
  width: 100%;
  max-width: 720px;
  height: 104px;
  border-radius: 1px;
  margin-bottom: 8px;

  &__text {
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
  }

  &__text.with-line {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    span {
      line-height: 1;
    }
  }

  &__line {
    display: inline-block;
    width: 2px;
    height: 16px;
    background-color: #d8d8d8;
    margin: 0px 18px;
  }

  &:hover {
    cursor: pointer;
    background-color: $clr-delta;
    div {
      color: white;
    }
  }

  ::v-deep .el-card__body {
    padding: 24px 32px 0px 56px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto auto;
    div:first-child {
      margin-bottom: 8px;
    }
  }
}
.contract-card.is-current {
  background-color: $clr-delta;
  div {
    color: white;
  }
}
</style>
