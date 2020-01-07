import { Model } from "@nozbe/watermelondb";

export enum AlimentsType {
  FRUIT = "FRUIT",
  VEGETABLE = "VEGETABLE"
}

export interface AlimentsModel {
  name: string;
  type: AlimentsType;
  quantity: number;
}

export default class Aliments extends Model {
  static table = "aliments";
}
