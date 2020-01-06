import { AlimentsModel, AlimentsType } from "../models/aliments-model";

export const fruitsFake: AlimentsModel[] = [
  { name: "Apple", type: AlimentsType.FRUIT },
  { name: "Banana", type: AlimentsType.FRUIT },
  { name: "Orange", type: AlimentsType.FRUIT },
  { name: "Kiwi", type: AlimentsType.FRUIT },
  { name: "Pear", type: AlimentsType.FRUIT }
];

export const vegetablesFake: AlimentsModel[] = [
  { name: "Cabbage", type: AlimentsType.VEGETABLE },
  { name: "Eggplant", type: AlimentsType.VEGETABLE },
  { name: "Tomato", type: AlimentsType.VEGETABLE }
];
