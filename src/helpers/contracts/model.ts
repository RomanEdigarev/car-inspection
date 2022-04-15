import {
  ContractApi, DamagedComponentApi,
  InitialInspectionApi,
} from '@/services/api/models/Contracts';
import {Component, Damage} from "@/helpers/inspection/model";

export type DamagedComponent = DamagedComponentApi

export type Contract = ContractApi & {
  inspection: {
    damagedComponents: Map<string, DamagedComponent>
  }
};
export type ContractInitialInspection = InitialInspectionApi[];

export type Contracts = {
  currentContract: Contract | null;
  items: {
    [key: string]: Contract
  };
  isLoading: boolean;
  selectedDamagedComponent: string | null
};
