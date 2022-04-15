import { ContractApi } from '@/services/api/models/Contracts';
import {
  InspectionApi,
  InspectionParameterApi, InspectionScriptApi,
} from '@/services/api/models/Inspection';

export interface InspectionServiceRepository {
  getAllParams(): Promise<InspectionParameterApi[] | null>;
  getInspectionById(id: string): Promise<InspectionApi | null>;
  getInspectionScript(): Promise<InspectionScriptApi>
}
