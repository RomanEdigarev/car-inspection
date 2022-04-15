import { ContractsServiceRepository } from '@/services/api/contracts-service/ContractsServiceRepository';
import { ContractApi } from '@/services/api/models/Contracts';
import { client } from '@/services/api/client';

class ContractsServiceRepositoryImpl implements ContractsServiceRepository {
  async getContracts(): Promise<{ [key: string]: ContractApi } | null> {
    try {
      const response = await client.get<ContractApi[]>('contracts');
      const result: { [key: string]: ContractApi } = {};
      response.data.forEach((item: ContractApi) => {
        result[item.id as string] = item;
      });
      return result;
    } catch (error) {
      return null;
    }
  }
}

export const contractsRepo = new ContractsServiceRepositoryImpl();
