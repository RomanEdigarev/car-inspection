import {ContractInitialInspection, Contracts, DamagedComponent} from './model';

export interface ContractsHelperRepository {
  get damagedComponents(): any
  get selectedDamagedComponent(): any
  setCurrentDamagedComponent(idx: string): void
  changeValueInCurrentDamageComponent(damage: DamagedComponent, isChecked: boolean): void
  changeCommentInDamagedComponent(value: string): void
  getContracts(): Promise<Contracts | null>;
  getCurrentContractInitialInspection():ContractInitialInspection
  getPhotosForDamages(): Promise<void>;

}
