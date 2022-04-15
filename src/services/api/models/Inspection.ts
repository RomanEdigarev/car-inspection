export type InspectionParameterApi = {
  id: string;
  name: string;
  values: InspectionParameterValueApi[];
};

export type InspectionParameterValueApi = {
  id: string;
  name: string;
  textRequired: boolean;
  textVisible: boolean;
};

export type InspectionApi = {
  id: string;
  carId: string;
  car: InspectionCarApi;
  initialInspection: InitialInspectionApi[];
  generalPhotos: InspectionGeneralPhotoApi[];
  damagedComponents: InspectionDamagedComponentApi[];
  followUpShortName: string;
  typeShortName: string;
  address: string;
  videoFileId: null;
  signatureFileId: null;
  pdfVersion: string;
  comment: string;
  datetime: Date;
  isAbsent: boolean;
};

export type InspectionCarApi = {
  id: string;
  pledgeAgreementNumber: string;
  make: string;
  model: string;
  manufactureYear: number;
  color: string;
  vin: string;
  licensePlate: string;
  archival: boolean;
};

export type InspectionDamagedComponentApi = {
  component: string;
  damages: string[];
  photos: string[];
  comment: string;
};

export type InspectionGeneralPhotoApi = {
  fileId: string;
  viewShortName: string;
};

export type InitialInspectionApi = {
  parameter: string;
  chosenValue?: string;
  comment: string;
};

export type InspectionScriptApi = {
  damages: InspectionDamageApi[];
  components: InspectionComponentApi[];
} | null

export type InspectionComponentApi = {
  id: string;
  name: string;
  serialNumber: number;
  possibleDamages: string[];
}

export type InspectionDamageApi = {
  id: string;
  name: string;
}
