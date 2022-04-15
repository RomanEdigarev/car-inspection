import { ContractsHelperRepository } from './ContractsHelperRepository';
import { contractsHelper } from './ContractsHelperRespositoryImpl';
import {DamagedComponent} from "@/helpers/contracts/model";

class ContractsHelper {
  private repository: ContractsHelperRepository;

  constructor(repository: ContractsHelperRepository) {
    this.repository = repository;
  }

  get damagedComponents(): DamagedComponent[] {
    return this.repository.damagedComponents
  }
  get selectedDamagedComponent(): DamagedComponent {
    return this.repository.selectedDamagedComponent
  }

  changeValueInCurrentDamageComponent(damage: DamagedComponent, isChecked: boolean): void {
    this.repository.changeValueInCurrentDamageComponent(damage, isChecked)
  }

  changeCommentInDamagedComponent(value: string): void {
    this.repository.changeCommentInDamagedComponent(value)
  }

  setCurrentDamagedComponent(idx: string): void {
    this.repository.setCurrentDamagedComponent(idx)
  }

  async getContracts() {
    return await this.repository.getContracts()
  }

  async getPhotosForDamages() {
    await this.repository.getPhotosForDamages()
  }

}

export default new ContractsHelper(contractsHelper);
