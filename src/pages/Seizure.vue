<template>
  <InspectionForm v-if="currentContract && isInspection" @back="stopInspection"></InspectionForm>
  <!-- eslint-disable-next-line vue/valid-template-root -->
  <el-row v-else class="seizure" type="flex" justify="space-between">
    <el-col class="seizure__left-side" :span="11" :md="9">
      <el-skeleton class="seizure__left-side__skeleton" v-if="isLoading" :rows="6" animated />
      <div v-else class="seizure__left-side__container">
        <Search class="seizure__search" v-model="searchString" />
        <span
          v-if="Object.keys(filteredData).length > 0"
          class="seizure__left-side__count"
        >
          Найдено: {{ Object.keys(filteredData).length }} контрактов
        </span>
        <div v-if="Object.keys(filteredData).length > 0">
          <ContractCard
            v-for="contract in filteredData"
            :contract="contract"
          ></ContractCard>
        </div>
        <div v-else>
          <ContractCard
            v-for="contract in contracts"
            :contract="contract"
          ></ContractCard>
        </div>
      </div>
    </el-col>
    <el-col
      v-if="currentContract"
      class="seizure__right-side"
      :span="13"
      :md="14"
      type="flex"
      justify="center"
    >
      <div class="seizure__right-side__header">
        <button class="seizure__close-btn" @click="closeCard">
          <img :src="require('/src/assets/images/icon-close.svg')" alt="">
        </button>
        <div class="seizure__right-side__title">
          {{ currentContract.car.make }} {{ currentContract.car.model }}
        </div>
        <div class="seizure__right-side__info-container">
          <div class="seizure__right-side__info">
            <div class="seizure__right-side__info__title">Год</div>
            <div class="seizure__right-side__info__title">Л/С</div>
            <div class="seizure__right-side__info__title">Цвет</div>
            <div class="seizure__right-side__info__title">Гос.Номер</div>
            <div class="seizure__right-side__info__title">VIN</div>
            <div class="seizure__right-side__info__value">
              {{
                currentCar.withdrawalDate &&
                currentCar.withdrawalDate.split('-')[0]
              }}
            </div>
            <div class="seizure__right-side__info__value">
              {{ currentCar.enginePower }}
            </div>
            <div class="seizure__right-side__info__value">
              {{ currentCar.color }}
            </div>
            <div class="seizure__right-side__info__value">
              {{ currentCar.licensePlate }}
            </div>
            <div class="seizure__right-side__info__value">
              {{ currentCar.vin }}
            </div>
          </div>
          <el-button class="seizure__right-side__info-container__btn">
            Документы
          </el-button>
        </div>
      </div>
      <div class="seizure__right-side__body-container">
        <div class="seizure__right-side__body">
          <div class="seizure__right-side__body__avatar">
            <img :src="require('/src/assets/images/avatar.png')" alt="" />
          </div>
          <div class="seizure__right-side__body__cell">
            <div>Заемщик</div>
            <div>{{ currentContract.client.clientName }}</div>
          </div>
          <div class="seizure__right-side__body__cell">
            <div>Номер кредитного договора</div>
            <div>{{ currentContract.creditAgreementNumber }}</div>
          </div>
          <div class="seizure__right-side__body__cell">
            <div>Сумма долга</div>
            <div>{{ currentContract.totalDebt }}</div>
          </div>
          <div class="seizure__right-side__body__cell">
            <div>Адрес регистрации</div>
            <div>{{ currentContract.client.clientAddress }}</div>
          </div>
          <div class="seizure__right-side__body__cell">
            <div>Статус кредитного договора</div>
            <div>{{ currentContract.creditAgreementStatus }}</div>
          </div>
          <div class="seizure__right-side__body__cell">
            <div>Подстатус кредитного договора</div>
            <div>{{ currentContract.creditAgreementSubStatus }}</div>
          </div>
        </div>
        <div class="seizure__right-side__btn">
          <Button type="primary" @click="startInspection">
            Начать осмотр
          </Button>
        </div>
      </div>

    </el-col>
  </el-row>
</template>

<script>
import ContractsHelper from '@/helpers/contracts/ContractsHelper';
import { Search, ContractCard, InspectionForm } from '@/components';
import { Button } from '@/ui';
import InspectionHelper from '@/helpers/inspection/InspectionHelper';

export default {
  name: 'Seizure',
  components: { ContractCard, Search, Button, InspectionForm },
  data: () => {
    const searchString = '';
    const isInspection = false;

    return {
      searchString,
      isInspection,
    };
  },
  async created() {
    await ContractsHelper.getContracts();
    await InspectionHelper.fetchGetAllParams();
    await InspectionHelper.getInspectionScript();
  },
  computed: {
    contracts() {
      return this.$store.state.contracts.items;
    },
    isLoading() {
      return this.$store.state.contracts.isLoading;
    },
    currentContract() {
      return this.$store.state.contracts.currentContract;
    },
    currentCar() {
      return this.currentContract.car;
    },
    filteredData() {
      if (this.searchString.length >= 3) {
        const itemsContracts = this.contracts;
        const result = {};
        Object.entries(itemsContracts).forEach(([key, value]) => {
          if (
            value.client.clientName
              .toLowerCase()
              .includes(this.searchString.toLowerCase())
          ) {
            result[key] = value;
          }
        });
        return result;
      }
      return {};
    },
  },
  methods: {
    startInspection() {
      this.isInspection = true;
    },
    stopInspection() {
      this.isInspection = false;
    },
    closeCard() {
      this.$store.commit('contracts/resetCurrentContract');
    },
  },
};
</script>

<style lang="scss" scoped>
.seizure {
  &__left-side {
    display: flex;
    justify-content: center;
    padding-top: 24px;
    &__container {
      width: 100%;
      max-width: 720px;
    }
    &__skeleton {
      width: 720px;
    }
    &__count {
      display: inline-block;
      margin-bottom: 8px;
      font-size: 14px;
    }
  }

  &__right-side {
    box-shadow: 0 2px 8px 0 rgba(34, 34, 37, 0.1);
    height: 100vh;
    position: sticky;
    top: 64px;

    &__header {
      position: relative;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 160px;
      padding: 32px 40px 29px 80px;
      background-color: $clr-alpha;
      color: white;
      margin-bottom: 64px;
    }
    &__title {
      font-size: 28px;
    }
    &__info {
      max-width: 70%;
      display: grid;
      grid-template-columns: repeat(5, auto);
      grid-template-rows: auto auto;
      flex: 0.8;
      &-container {
        display: flex;
        justify-content: space-between;
        &__btn.el-button {
          border: 1px solid white;
          background-color: transparent;
          color: white;
          border-radius: 1px;
          padding: 8px 24px;
          line-height: 1;
          max-height: 32px;
          align-self: end;
        }
      }
      &__title {
        line-height: 1.5;
        color: #939aa2;
        padding-left: 20px;
        border-right: 1px solid #939aa2;
        &:first-child {
          padding-left: 0px;
        }
        &:nth-child(5) {
          border: none;
        }
      }
      &__value {
        line-height: 1.5;
        padding-left: 20px;
        border-right: 1px solid #939aa2;
        &:nth-child(6) {
          padding-left: 0px;
        }
        &:last-child {
          border: none;
        }
      }
    }

    &__body {
      width: 100%;
      display: grid;
      grid-template-columns: min-content repeat(3, auto);
      grid-template-rows: auto auto;
      margin: 0 auto 28px;
      border-bottom: 1px solid #e8e6e6;
      &-container {
        display: flex;
        justify-content: center;
        align-items: end;
        flex-direction: column;
        padding: 0 80px;
      }
      &__cell {
        margin-bottom: 24px;
        border-right: 1px solid #e8e6e6;
        padding-left: 24px;
        padding-right: 24px;
        &:nth-child(4) {
          border: none
        }
        &:last-child {
          border: none
        }
        div:first-child {
          color: #939aa2;
          line-height: 1.5;
        }
        div:nth-child(2) {
          line-height: 1.5;
        }
        overflow: hidden;
      }
      &__avatar {
        grid-row: 1 / 3;
        align-self: center;
        display: inline;
      }
    }
    &__btn {
      float: right;
    }
  }

  &__search {
    box-shadow: 0 2px 8px 0 rgba(34, 34, 37, 0.1);
    margin-bottom: 24px;
  }

  &__close-btn {
    display: inline;
    justify-content: center;
    background-color: transparent;
    position: absolute;
    border: none;
    padding: 0;
    top: 32px;
    right: 40px;
    cursor: pointer;
  }
}
</style>
