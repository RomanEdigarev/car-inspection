export type ContractApi = {
  attachments: AttachmentApi[];
  car: CarApi;
  client: ClientApi;
  creditAgreementNumber: string;
  creditAgreementStatus: string;
  creditAgreementSubStatus: string;
  evaluation: EvaluationApi;
  evaluationCreatedDate: string;
  evaluationType: string;
  id: string;
  inspection: ContractsInspectionApi;
  totalDebt: number;
  userFullName: string;
  userId: string;
};

export type AttachmentApi = {
  filename: string;
  id: string;
};

export type CarApi = {
  archival: boolean;
  color: string;
  enginePower: number;
  evaluationStatus: string;
  hasImportWarnings: boolean;
  id: string;
  licensePlate: string;
  make: string;
  manufactureYear: number;
  model: string;
  parkingId: string;
  pledgeAgreementNumber: string;
  returnDate: string;
  saleDate: string;
  vin: string;
  withdrawalDate: string;
};

export type ClientApi = {
  clientAddress: string;
  clientId: string;
  clientName: string;
  clientPhoto: string;
};

export type EvaluationApi = {
  attachmentId: string;
  carId: string;
  city: string;
  clientFullName: string;
  createdDate: string;
  creationComment: string;
  evaluationCompanyId: string;
  evaluationSum: number;
  evaluationType: string;
  finishComment: string;
  finishedEvaluation: string;
  inspectionAddress: string;
  inspectionDateTime: string;
  inspectionId: string;
  lawyerFullName: string;
  lawyerPhone: string;
  lawyerProxyNumber: string;
  proxyFullName: string;
  proxyNumber: string;
  proxyPhone: string;
  returnedEvaluation: string;
  returnedFromEvaluationCompany: string;
  sendToEvaluation: string;
  sendToEvaluationCompany: string;
};

export type ContractsInspectionApi = {
  address: string;
  car: CarApi;
  carId: string;
  comment: string;
  damagedComponents: DamagedComponentApi[];
  datetime: string;
  followUpShortName: string;
  generalPhotos: GeneralPhotoApi[];
  id: string;
  initialInspection: InitialInspectionApi[];
  isAbsent: boolean;
  parkingId: string;
  pdfVersion: string;
  signatureFileId: string;
  typeShortName: string;
  videoFileId: string;
};

export type DamagedComponentApi = {
  comment: string;
  component: string;
  damages: DamageApi;
  // id: string;
  photos: string[];
};

export type DamageApi = string[];

export type PhotoApi = {
  photo: string;
};

export type GeneralPhotoApi = {
  fileId: string;
  id: string;
  viewShortName: string;
};

export type InitialInspectionApi = {
  chosenValue: string;
  comment: string;
  id: string;
  parameter: string;
};
