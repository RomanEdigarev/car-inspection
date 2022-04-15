import { ContractsHelperRepository } from './ContractsHelperRepository';
import {ContractInitialInspection, Contracts, DamagedComponent} from '@/helpers/contracts/model';
import store from '@/store';

class ContractsHelperRepositoryImpl implements ContractsHelperRepository {
  get damagedComponents(): any {
    const { components, damages } = store.getters['inspection/getInspectionScript'];
    const currentDamages = store.getters['contracts/currentDamages'];
    return Array.from<[string, DamagedComponent]>(currentDamages).map(([key, value]) => {
      return {
        component: components.get(value.component),
        damages: value.damages.map(damage => damages.get(damage)),
        photos: value.photos,
        comment: value.comment
      }
    });
  }

  get selectedDamagedComponent(): DamagedComponent {
    return store.getters['contracts/selectedDamagedComponent']
  }

  getCurrentContractInitialInspection(): ContractInitialInspection {
    return store.getters["contracts/currentContractInitialInspection"];
  }

  setCurrentDamagedComponent(idx: string): void {
    store.commit('contracts/selectDamagedComponent', this.damagedComponents[idx].component.id)
  }

  changeValueInCurrentDamageComponent(damage: DamagedComponent, isChecked: boolean): void {
    store.commit('contracts/changeValueInCurrentDamageComponent', {
      damage,
      isChecked,
    })
  }

  changeCommentInDamagedComponent(value: string): void {
    store.commit('contracts/changeCommentInDamagedComponent', value)
  }

  async getContracts(): Promise<Contracts | null> {
    return await store.dispatch('contracts/getContracts');
  }

  async getPhotosForDamages(): Promise<void> {
    await store.dispatch('contracts/getPhotosForDamages')
  }



}
export const contractsHelper = new ContractsHelperRepositoryImpl();
