import React, { useState } from "react";
import {
  Button,
  Modal,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { AlimentsModel, AlimentsType } from "../models/aliments-model";
import { fruitsFake, vegetablesFake } from "../data-sets/aliments-dataset";
import FoodListAddAlimentModal from "./food-list-add-aliment-modal";

export default function FoodList() {
  const [fruitList, setFruitList] = useState<AlimentsModel[]>(fruitsFake);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          { title: AlimentsType.FRUIT, data: fruitList },
          { title: AlimentsType.VEGETABLE, data: vegetablesFake }
        ]}
        renderItem={({ item }) => (
          <Text
            style={styles.aliments}
            onPress={() =>
              setFruitList(fruitList.filter(fruit => fruit.name !== item.name))
            }
          >
            {item.name}
          </Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => item.name + Math.random()}
      />
      <View style={styles.button}>
        <Button
          title={"Add aliment"}
          onPress={() => (
            <FoodListAddAlimentModal
              foodList={fruitList}
              isVisibleParent={!showModal}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F235B0"
  },
  sectionHeader: {
    textAlign: "center",
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 32,
    fontWeight: "bold",
    backgroundColor: "#D99E89",
    alignContent: "center"
  },
  aliments: {
    textAlign: "center",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#91E0F2",
    borderRadius: 5
  },
  button: {
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 5
  }
});
