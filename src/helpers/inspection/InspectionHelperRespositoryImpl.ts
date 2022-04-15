import { InspectionHelperRepository } from './InspectionHelperRepository';
import store from '@/store';
import {Damage, Inspection, InspectionFormBlock} from '@/helpers/inspection/model';

class InspectionHelperRepositoryImpl implements InspectionHelperRepository {
  get arrayFromDamages(): Damage[] {
    const damages = store.getters['inspection/getInspectionScript'].damages
    return Array.from<[string, Damage]>(damages).map(([name, value]) => ({ ...value }));
  }

  get inspectionScript(): Inspection['script'] {
    return store.getters['inspection/getInspectionScript'];
  }

  get inspectionForm(): Inspection['form'] {
    return store.state.inspection.form;
  }

  async fetchGetAllParams(): Promise<any> {
    await store.dispatch('inspection/getAllParams');
  }

  async getCurrentInspection(id: string): Promise<any> {
    await store.dispatch('inspection/getInitialInspection', id);
  }

  async getInspectionScript(): Promise<any> {
    await store.dispatch('inspection/getInspectionScript')
  }

  getValueParameter(key: string) {
    let parameterId = ''
    if (key in store.state.inspection.allParamsByText) {
      parameterId = store.state.inspection.allParamsByText[key].id
    }
    if (parameterId in store.state.inspection.initialInspection) {
      return store.state.inspection.initialInspection[parameterId].chosenValue || '';
    } else {
      return '';
    }
  }

  getOptionsParameter(key: string) {
    if (key in store.state.inspection.allParamsByText) {
      return store.state.inspection.allParamsByText[key].values.map(
        (item) => ({ value: item.id, label: item.name })
      );
    }
    return [];
  }

  getAllParams(): Inspection['allParams'] {
    return store.getters['inspection/getAllParams'];
  }

  getBlockInfoFromKHD(): InspectionFormBlock {
    return [
      {
        name: 'Марка',
        value: store.state.contracts.currentContract!.car.make,
        options: [],
        type: 'Select',
        rules: [],
        prop: 'make',
      },
      {
        name: 'Модель',
        value: store.state.contracts.currentContract!.car.model,
        options: [],
        type: 'Select',
        rules: [],
        prop: 'model',
      },
      {
        name: 'Год выпуска',
        value: store.state.contracts.currentContract!.car.manufactureYear,
        options: [],
        type: 'Input',
        rules: [{ required: true, message: 'Please input email address' }],
        prop: 'manufactureYear',
      },
      {
        name: 'Л/С',
        value: store.state.contracts.currentContract!.car.enginePower,
        options: [],
        type: 'Input',
        rules: [],
        prop: 'enginePower',
      },
      {
        name: 'Цвет',
        value: store.state.contracts.currentContract!.car.color,
        options: [],
        type: 'Input',
        rules: [],
        prop: 'color',
      },
      {
        name: 'Гос. номер',
        value: store.state.contracts.currentContract!.car.licensePlate,
        options: [],
        type: 'Input',
        rules: [],
        prop: 'licensePlate',
      },
      {
        name: 'VIN',
        value: store.state.contracts.currentContract!.car.vin,
        options: [],
        type: 'Input',
        rules: [],
        prop: 'vin',
      },
    ];
  }

  getBlockGeneralInfo(): InspectionFormBlock {
    return [
      {
        name: 'ПТС',
        value: this.getValueParameter('ПТС'),
        options: this.getOptionsParameter('ПТС'),
        type: 'Select',
        rules: [],
        prop: 'ПТС',
      },
      {
        name: 'Пробег',
        value: this.getValueParameter('Пробег'),
        options: this.getOptionsParameter('Пробег'),
        type: 'Input',
        rules: [],
        prop: 'Пробег',
      },
      {
        name: 'Тип кузова',
        value: this.getValueParameter('Тип кузова'),
        options: this.getOptionsParameter('Тип кузова'),
        type: 'Select',
        rules: [],
        prop: 'Тип кузова',
      },
    ];
  }

  getBlockEngineInfo(): InspectionFormBlock {
    return [
      {
        name: 'Тип двигателя',
        value: this.getValueParameter('Тип двигателя'),
        options: this.getOptionsParameter('Тип двигателя'),
        type: 'Select',
        rules: [],
        prop: 'Тип двигателя',
      },
      {
        name: 'Объем двигателя',
        value: this.getValueParameter('Объем двигателя'),
        options: this.getOptionsParameter('Объем двигателя'),
        type: 'Input',
        rules: [],
        prop: 'Объем двигателя',
      },
      {
        name: 'Тип КПП',
        value: this.getValueParameter('Тип КПП'),
        options: this.getOptionsParameter('Тип КПП'),
        type: 'Select',
        rules: [],
        prop: 'Тип КПП',
      },
      {
        name: 'АКБ',
        value: this.getValueParameter('АКБ'),
        options: this.getOptionsParameter('АКБ'),
        type: 'Select',
        rules: [],
        prop: 'АКБ',
      },
    ];
  }

  getBlockEquipmentInfo(): InspectionFormBlock {
    return [
      {
        name: 'Фары',
        value: this.getValueParameter('Фары'),
        options: this.getOptionsParameter('Фары'),
        type: 'Select',
        rules: [],
        prop: 'Фары',
      },
      {
        name: 'Парк-контроль',
        value: this.getValueParameter('Парк-контроль'),
        options: this.getOptionsParameter('Парк-контроль'),
        type: 'Select',
        rules: [],
        prop: 'Парк-контроль',
      },
      {
        name: 'Камера обзора (штатная)',
        value: this.getValueParameter('Камера обзора (штатная)'),
        options: this.getOptionsParameter('Камера обзора (штатная)'),
        type: 'Select',
        rules: [],
        prop: 'Камера обзора (штатная)',
      },
      {
        name: 'Ходовые огни',
        value: this.getValueParameter('Ходовые огни'),
        options: this.getOptionsParameter('Ходовые огни'),
        type: 'Select',
        rules: [],
        prop: 'Ходовые огни',
      },
      {
        name: 'Литые диски',
        value: this.getValueParameter('Литые диски'),
        options: this.getOptionsParameter('Литые диски'),
        type: 'Select',
        rules: [],
        prop: 'Литые диски',
      },
      {
        name: 'Колпаки колёс',
        value: this.getValueParameter('Колпаки колёс'),
        options: this.getOptionsParameter('Колпаки колёс'),
        type: 'Select',
        rules: [],
        prop: 'Колпаки колёс',
      },
      {
        name: 'Противотуманные фары',
        value: this.getValueParameter('Противотуманные фары'),
        options: this.getOptionsParameter('Противотуманные фары'),
        type: 'Select',
        rules: [],
        prop: 'Противотуманные фары',
      },
      {
        name: 'Тягово-сцепное устройство (фаркоп)',
        value: this.getValueParameter('Тягово-сцепное устройство (фаркоп)'),
        options: this.getOptionsParameter('Тягово-сцепное устройство (фаркоп)'),
        type: 'Select',
        rules: [],
        prop: 'Тягово-сцепное устройство (фаркоп)',
      },
      {
        name: 'Защита бампера передняя (дуга)',
        value: this.getValueParameter('Защита бампера передняя (дуга)'),
        options: this.getOptionsParameter('Защита бампера передняя (дуга)'),
        type: 'Select',
        rules: [],
        prop: 'Защита бампера передняя (дуга)',
      },
      {
        name: 'Защита бампера задняя (дуга)',
        value: this.getValueParameter('Защита бампера задняя (дуга)'),
        options: this.getOptionsParameter('Защита бампера задняя (дуга)'),
        type: 'Select',
        rules: [],
        prop: 'Защита бампера задняя (дуга)',
      },
      {
        name: 'Ступень правая',
        value: this.getValueParameter('Ступень правая'),
        options: this.getOptionsParameter('Ступень правая'),
        type: 'Select',
        rules: [],
        prop: 'Ступень правая',
      },
      {
        name: 'Ступень левая',
        value: this.getValueParameter('Ступень левая'),
        options: this.getOptionsParameter('Ступень левая'),
        type: 'Select',
        rules: [],
        prop: 'Ступень левая',
      },
      {
        name: 'Газовое оборудование',
        value: this.getValueParameter('Газовое оборудование'),
        options: this.getOptionsParameter('Газовое оборудование'),
        type: 'Select',
        rules: [],
        prop: 'Газовое оборудование',
      },
      {
        name: 'Коврик багажника',
        value: this.getValueParameter('Коврик багажника'),
        options: this.getOptionsParameter('Коврик багажника'),
        type: 'Select',
        rules: [],
        prop: 'Коврик багажника',
      },
      {
        name: 'Люк',
        value: this.getValueParameter('Люк'),
        options: this.getOptionsParameter('Люк'),
        type: 'Select',
        rules: [],
        prop: 'Люк',
      },
      {
        name: 'Система контроля мертвых зон',
        value: this.getValueParameter('Система контроля мертвых зон'),
        options: this.getOptionsParameter('Система контроля мертвых зон'),
        type: 'Select',
        rules: [],
        prop: 'Система контроля мертвых зон',
      },
      {
        name: 'Крыша с панорамным остеклением',
        value: this.getValueParameter('Крыша с панорамным остеклением'),
        options: this.getOptionsParameter('Крыша с панорамным остеклением'),
        type: 'Select',
        rules: [],
        prop: 'Крыша с панорамным остеклением',
      },
      {
        name: 'Рейлинги на крыше',
        value: this.getValueParameter('Рейлинги на крыше'),
        options: this.getOptionsParameter('Рейлинги на крыше'),
        type: 'Select',
        rules: [],
        prop: 'Рейлинги на крыше',
      },
      {
        name: 'Коврики салона',
        value: this.getValueParameter('Коврики салона'),
        options: this.getOptionsParameter('Коврики салона'),
        type: 'Select',
        rules: [],
        prop: 'Коврики салона',
      },
      {
        name: 'Рейлинги на крыше ',
        value: this.getValueParameter('Рейлинги на крыше '),
        options: this.getOptionsParameter('Рейлинги на крыше '),
        type: 'Select',
        rules: [],
        prop: 'Рейлинги на крыше ',
      },
    ];
  }

  getBlockInteriorInfo(): InspectionFormBlock {
    return [
      {
        name: 'Климат-контроль',
        value: this.getValueParameter('Климат-контроль'),
        options: this.getOptionsParameter('Климат-контроль'),
        type: 'Select',
        rules: [],
        prop: 'Климат-контроль',
      },
      {
        name: 'Кондиционер',
        value: this.getValueParameter('Кондиционер'),
        options: this.getOptionsParameter('Кондиционер'),
        type: 'Select',
        rules: [],
        prop: 'Кондиционер',
      },
      {
        name: 'Дополнительный ряд сидений',
        value: this.getValueParameter('Дополнительный ряд сидений'),
        options: this.getOptionsParameter('Дополнительный ряд сидений'),
        type: 'Select',
        rules: [],
        prop: 'Дополнительный ряд сидений',
      },
      {
        name: 'Электрореглировка пасажирского сиденья',
        value: this.getValueParameter('Электрореглировка пасажирского сиденья'),
        options: this.getOptionsParameter('Электрореглировка пасажирского сиденья'),
        type: 'Select',
        rules: [],
        prop: 'Электрореглировка пасажирского сиденья',
      },
      {
        name: 'Электрореглировка водительского сиденья',
        value: this.getValueParameter('Электрореглировка водительского сиденья'),
        options: this.getOptionsParameter('Электрореглировка водительского сиденья'),
        type: 'Select',
        rules: [],
        prop: 'Электрореглировка водительского сиденья',
      },
      {
        name: 'Обивка сидений',
        value: this.getValueParameter('Обивка сидений'),
        options: this.getOptionsParameter('Обивка сидений'),
        type: 'Select',
        rules: [],
        prop: 'Обивка сидений',
      },
      {
        name: 'А/магнитола',
        value: this.getValueParameter('А/магнитола'),
        options: this.getOptionsParameter('А/магнитола'),
        type: 'Select',
        rules: [],
        prop: 'А/магнитола',
      },
    ];
  }

  getBlockOptionalInfo(): InspectionFormBlock {
   return [
     {
       name: 'Блокиратор КПП',
       value: this.getValueParameter('Блокиратор КПП'),
       options: this.getOptionsParameter('Блокиратор КПП'),
       type: 'Select',
       rules: [],
       prop: 'Блокиратор КПП',
     },    {
       name: 'Блокиратор рулевого вала',
       value: this.getValueParameter('Блокиратор рулевого вала'),
       options: this.getOptionsParameter('Блокиратор рулевого вала'),
       type: 'Select',
       rules: [],
       prop: 'Блокиратор рулевого вала',
     },    {
       name: 'Бокс на крышу',
       value: this.getValueParameter('Бокс на крышу'),
       options: this.getOptionsParameter('Бокс на крышу'),
       type: 'Select',
       rules: [],
       prop: 'Бокс на крышу',
     },    {
       name: 'Брызговики',
       value: this.getValueParameter('Брызговики'),
       options: this.getOptionsParameter('Брызговики'),
       type: 'Select',
       rules: [],
       prop: 'Брызговики',
     },    {
       name: 'Дефлекторы окон (ветровики)',
       value: this.getValueParameter('Дефлекторы окон (ветровики)'),
       options: this.getOptionsParameter('Дефлекторы окон (ветровики)'),
       type: 'Select',
       rules: [],
       prop: 'Дефлекторы окон (ветровики)',
     },    {
       name: 'Дефлектор капота',
       value: this.getValueParameter('Дефлектор капота'),
       options: this.getOptionsParameter('Дефлектор капота'),
       type: 'Select',
       rules: [],
       prop: 'Дефлектор капота',
     },   {
       name: 'Защита картера',
       value: this.getValueParameter('Защита картера'),
       options: this.getOptionsParameter('Защита картера'),
       type: 'Select',
       rules: [],
       prop: 'Защита картера',
     },    {
       name: 'Дополнительные противотуманные фары',
       value: this.getValueParameter('Дополнительные противотуманные фары'),
       options: this.getOptionsParameter('Дополнительные противотуманные фары'),
       type: 'Select',
       rules: [],
       prop: 'Дополнительные противотуманные фары',
     },    {
       name: 'Кунг',
       value: this.getValueParameter('Кунг'),
       options: this.getOptionsParameter('Кунг'),
       type: 'Select',
       rules: [],
       prop: 'Кунг',
     },  {
       name: 'Защита порогов (хромированные трубы)',
       value: this.getValueParameter('Защита порогов (хромированные трубы)'),
       options: this.getOptionsParameter('Защита порогов (хромированные трубы)'),
       type: 'Select',
       rules: [],
       prop: 'Защита порогов (хромированные трубы)',
     },    {
       name: 'Парковочная система задняя',
       value: this.getValueParameter('Парковочная система задняя'),
       options: this.getOptionsParameter('Парковочная система задняя'),
       type: 'Select',
       rules: [],
       prop: 'Парковочная система задняя',
     },    {
       name: 'Лебедка',
       value: this.getValueParameter('Лебедка'),
       options: this.getOptionsParameter('Лебедка'),
       type: 'Select',
       rules: [],
       prop: 'Лебедка',
     },    {
       name: 'Предпусковой обогреватель',
       value: this.getValueParameter('Предпусковой обогреватель'),
       options: this.getOptionsParameter('Предпусковой обогреватель'),
       type: 'Select',
       rules: [],
       prop: 'Предпусковой обогреватель',
     },    {
       name: 'Парковочная система передняя ',
       value: this.getValueParameter('Парковочная система передняя '),
       options: this.getOptionsParameter('Парковочная система передняя '),
       type: 'Select',
       rules: [],
       prop: 'Парковочная система передняя ',
     },
     {
       name: 'Усиленный задний бампер',
       value: this.getValueParameter('Усиленный задний бампер'),
       options: this.getOptionsParameter('Усиленный задний бампер'),
       type: 'Select',
       rules: [],
       prop: 'Усиленный задний бампер',
     },
     {
       name: 'Усиленный передний бампер',
       value: this.getValueParameter('Усиленный передний бампер'),
       options: this.getOptionsParameter('Усиленный передний бампер'),
       type: 'Select',
       rules: [],
       prop: 'Усиленный передний бампер',
     },
     {
       name: 'Спойлер',
       value: this.getValueParameter('Спойлер'),
       options: this.getOptionsParameter('Спойлер'),
       type: 'Select',
       rules: [],
       prop: 'Спойлер',
     },

   ]
  }

  getBlockSignalingInfo(): InspectionFormBlock {
    return [
      {
        name: 'Безключевой доступ/Start Engine',
        value: this.getValueParameter('Безключевой доступ/Start Engine'),
        options: this.getOptionsParameter('Безключевой доступ/Start Engine'),
        type: 'Select',
        rules: [],
        prop: 'Безключевой доступ/Start Engine',
      },
      {
        name: 'Количество ключей',
        value: this.getValueParameter('Количество ключей'),
        options: this.getOptionsParameter('Количество ключей'),
        type: 'Select',
        rules: [],
        prop: 'Количество ключей',
      },
      {
        name: 'Количество брелоков от сигнализации',
        value: this.getValueParameter('Количество брелоков от сигнализации'),
        options: this.getOptionsParameter('Количество брелоков от сигнализации'),
        type: 'Select',
        rules: [],
        prop: 'Количество брелоков от сигнализации',
      },
      {
        name: 'А/сигнализация',
        value: this.getValueParameter('А/сигнализация'),
        options: this.getOptionsParameter('А/сигнализация'),
        type: 'Select',
        rules: [],
        prop: 'А/сигнализация',
      },
    ];
  }

  getBlockTiresInfo(): InspectionFormBlock {
    return [
      {
        name: 'Марка/Модель Резины',
        value: this.getValueParameter('Марка/Модель Резины'),
        options: this.getOptionsParameter('Марка/Модель Резины'),
        type: 'Input',
        rules: [],
        prop: 'Марка/Модель Резины',
      },
      {
        name: 'Ремкомплект',
        value: this.getValueParameter('Ремкомплект'),
        options: this.getOptionsParameter('Ремкомплект'),
        type: 'Select',
        rules: [],
        prop: 'Ремкомплект',
      },
      {
        name: 'Запасное колесо',
        value: this.getValueParameter('Запасное колесо'),
        options: this.getOptionsParameter('Запасное колесо'),
        type: 'Select',
        rules: [],
        prop: 'Запасное колесо',
      },
      {
        name: 'Запасное колесо комментарий',
        value: this.getValueParameter('Запасное колесо комментарий'),
        options: this.getOptionsParameter('Запасное колесо комментарий'),
        type: 'Input',
        rules: [],
        prop: 'Запасное колесо комментарий',
      },
    ];
  }




}
export const inspectionHelper = new InspectionHelperRepositoryImpl();
