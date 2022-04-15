import { InspectionHelperRepository } from './InspectionHelperRepository';
import { inspectionHelper } from './InspectionHelperRespositoryImpl';
import store from '@/store';
import {Damage, Inspection} from "@/helpers/inspection/model";

class InspectionHelper {
  private repository: InspectionHelperRepository;

  constructor(repository: InspectionHelperRepository) {
    this.repository = repository;
  }

  get arrayFromDamages(): Damage[] {
    return this.repository.arrayFromDamages
  }

  get inspectionScript(): Inspection['script'] {
    return this.repository.inspectionScript
  }

  get inspectionForm(): Inspection['form'] {
    return this.repository.inspectionForm
  }

  async fetchGetAllParams() {
    await this.repository.fetchGetAllParams();
  }

  async fetchGetInitialInspection(id: string) {
    await this.repository.getCurrentInspection(id);
  }

  async getInspectionScript() {
    await this.repository.getInspectionScript()
  }

  getAllParams() {
    this.repository.getAllParams();
  }

  private get infoFromKHD() {
    return this.repository.getBlockInfoFromKHD();
  }
  private get generalInfo() {
    return this.repository.getBlockGeneralInfo();
  }
  private get engineInfo() {
    return this.repository.getBlockEngineInfo();
  }
  private get signalInfo() {
    return this.repository.getBlockSignalingInfo();
  }
  private get tiresInfo() {
    return this.repository.getBlockTiresInfo();
  }
  private get interiorInfo() {
    return this.repository.getBlockInteriorInfo();
  }
  private get equipmentInfo() {
    return this.repository.getBlockEquipmentInfo();
  }
  private get optionalInfo() {
    return this.repository.getBlockOptionalInfo();
  }

  async initForm() {
    if (store.state.inspection.form.length < 1) {
      store.commit('inspection/setInitFrom', [
        this.infoFromKHD,
        this.generalInfo,
        this.engineInfo,
        this.signalInfo,
        this.tiresInfo,
        this.interiorInfo,
        this.optionalInfo,
      ]);
    }
  }

  resetForm() {
    store.commit('inspection/resetForm');
  }

  setNewValueInForm(payload: {
    indexInForm: number;
    indexInBlock: number;
    value: string | number;
  }) {
    store.commit('inspection/setNewValueInForm', payload);
  }
}

export default new InspectionHelper(inspectionHelper);
