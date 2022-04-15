import { ContractApi } from '@/services/api/models/Contracts';

export interface ContractsServiceRepository {
  getContracts(): Promise<{ [key: string]: ContractApi } | null>;
}
