import { InitialInspectionApi } from '@/services/api/models/Inspection';

export type InitialInspection = {
  [key: string]: InitialInspectionApi;
};

export type InspectionValue = {
  id: string;
  name: string;
  type: any;
};

export type InspectionParameter = {
  id: string;
  name: string;
  values: InspectionValue[];
};

export type InspectionFormBlockItem = {
  name: string;
  value: string | number;
  options: any[];
  type: 'Select' | 'Input';
  rules: any[];
  prop: string;
};

export type InspectionFormBlock = InspectionFormBlockItem[];

export type Inspection = {
  allParams: {
    [key: string]: InspectionParameter;
  };
  initialInspection: InitialInspection;
  isLoading: boolean;
  allParamsByText: {
    [key: string]: InspectionParameter;
  };
  form: InspectionFormBlock[];
  script: InspectionScript;
};

export type InspectionScript = {
  damages: Map<string, Damage>;
  components: Map<string, Component>;
}

export type Component = {
  id: string;
  name: string;
  serialNumber: number;
  possibleDamages: string[];
}

export type Damage = {
  id: string;
  name: string;
}
