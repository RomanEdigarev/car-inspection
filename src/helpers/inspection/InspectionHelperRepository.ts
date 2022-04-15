import {Damage, Inspection, InspectionFormBlock, InspectionScript} from "@/helpers/inspection/model";

export interface InspectionHelperRepository {
  get arrayFromDamages(): Damage[]
  get inspectionScript(): Inspection['script']
  get inspectionForm(): Inspection['form']
  getAllParams(): Inspection['allParams']
  getBlockInfoFromKHD(): InspectionFormBlock
  getBlockGeneralInfo(): InspectionFormBlock
  getBlockEngineInfo(): InspectionFormBlock
  getBlockSignalingInfo(): InspectionFormBlock
  getBlockTiresInfo(): InspectionFormBlock
  getBlockInteriorInfo(): InspectionFormBlock
  getBlockEquipmentInfo(): InspectionFormBlock
  getBlockOptionalInfo(): InspectionFormBlock
  getInspectionScript(): Promise<any>
  fetchGetAllParams(): Promise<any>
  getCurrentInspection(id: string) : Promise<any>
}
