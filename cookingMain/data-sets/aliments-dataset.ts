import { AlimentsModel, AlimentsType } from "../models/aliments-model";

export const fruitsFake: AlimentsModel[] = [
  { name: "Apple", type: AlimentsType.FRUIT, quantity: 0 },
  { name: "Banana", type: AlimentsType.FRUIT, quantity: 0 },
  { name: "Orange", type: AlimentsType.FRUIT, quantity: 0 },
  { name: "Kiwi", type: AlimentsType.FRUIT, quantity: 0 },
  { name: "Pear", type: AlimentsType.FRUIT, quantity: 0 }
];

export const vegetablesFake: AlimentsModel[] = [
  { name: "Cabbage", type: AlimentsType.VEGETABLE, quantity: 0 },
  { name: "Eggplant", type: AlimentsType.VEGETABLE, quantity: 0 },
  { name: "Tomato", type: AlimentsType.VEGETABLE, quantity: 0 }
];
