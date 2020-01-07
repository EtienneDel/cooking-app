import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import FoodList from "./food-list/food-list";
import { fruitsFake, vegetablesFake } from "./data-sets/aliments-dataset";
import { database } from "./db";

export const alimentsCollection = database.collections.get("aliments");

export default async function App() {
  await database.action(async () => {
    fruitsFake.map(async fruit => {
      await alimentsCollection.create(() => fruit);
    });
    vegetablesFake.map(async vegetable => {
      await alimentsCollection.create(() => vegetable);
    });
  });

  return (
    <View style={styles.container}>
      <FoodList aliments={database} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
