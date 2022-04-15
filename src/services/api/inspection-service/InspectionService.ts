import { InspectionServiceRepository } from './InspectionServiceRepository';
import { inspectionRepo } from './InspectionServiceRepositoryImpl';
import {InspectionApi, InspectionParameterApi, InspectionScriptApi} from '@/services/api/models/Inspection';

class InspectionService {
  private repository: InspectionServiceRepository;

  constructor(repository: InspectionServiceRepository) {
    this.repository = repository;
  }

  async getAllParams(): Promise<InspectionParameterApi[] | null> {
    return await this.repository.getAllParams();
  }

  async getInitialInspection(id: string) : Promise<InspectionApi | null>{
    return await this.repository.getInspectionById(id);
  }

  async getInspectionScript(): Promise<InspectionScriptApi> {
    return await this.repository.getInspectionScript()
  }
}

export default new InspectionService(inspectionRepo);
