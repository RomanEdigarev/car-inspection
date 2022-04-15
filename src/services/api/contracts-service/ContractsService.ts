import { ContractsServiceRepository } from './ContractsServiceRepository';
import { contractsRepo } from './ContractsServiceRepositoryImpl';

class ContractsService {
  private repository: ContractsServiceRepository;

  constructor(repository: ContractsServiceRepository) {
    this.repository = repository;
  }

  async getContracts() {
    const contractsApi: any = await this.repository.getContracts();

    for (const key in contractsApi) {
      const damagedComponentMap = new Map();
      if (contractsApi[key].inspection) {
        contractsApi[key].inspection.damagedComponents.forEach((item: any) => {
          damagedComponentMap.set(item.component, item);
        });
        contractsApi[key].inspection.damagedComponents = damagedComponentMap;
      }
    }

    return contractsApi;
  }
}

export default new ContractsService(contractsRepo);
