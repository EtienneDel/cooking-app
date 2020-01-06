export enum AlimentsType {
  FRUIT = "FRUIT",
  VEGETABLE = "VEGETABLE"
}

export interface AlimentsModel {
  name: string;
  type: AlimentsType;
}
