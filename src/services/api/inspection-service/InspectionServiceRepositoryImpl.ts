import { client } from '@/services/api/client';
import { InspectionServiceRepository } from '@/services/api/inspection-service/InspectionServiceRepository';
import {
  InspectionApi,
  InspectionParameterApi, InspectionScriptApi,
} from '@/services/api/models/Inspection';

class InspectionServiceRepositoryImpl implements InspectionServiceRepository {
  async getAllParams(): Promise<InspectionParameterApi[] | null> {
    try {
      const response = await client.get<InspectionParameterApi[]>(
        'inspection/parameters'
      );
      return response.data;
    } catch (error) {
      return null;
    }
  }

  async getInspectionById(id: string): Promise<InspectionApi | null> {
    try {
      const response = await client.get<InspectionApi>(`inspection/${id}`);
      return response.data;
    } catch (error) {
      return null;
    }
  }

  async getInspectionScript(): Promise<InspectionScriptApi> {
    try {
      const response = await client.get<InspectionScriptApi>(`inspection/script`);
      return response.data;
    } catch (error) {
      return null;
    }
  }




}

export const inspectionRepo = new InspectionServiceRepositoryImpl();
