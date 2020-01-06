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

export default function FoodList() {
  const [fruitList, setFruitList] = useState<AlimentsModel[]>(fruitsFake);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalForm, setModalForm] = useState<AlimentsModel>({
    type: AlimentsType.FRUIT,
    name: ""
  });

  return (
    <>
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
                setFruitList(
                  fruitList.filter(fruit => fruit.name !== item.name)
                )
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
            onPress={() => {
              setShowModal(true);
            }}
          />
        </View>
      </View>
      <View style={styles.modal}>
        <Modal animationType="slide" visible={showModal} transparent={false}>
          <View>
            <Text>Aliment type</Text>
            <TextInput
              style={styles.textInput}
              defaultValue={modalForm.type}
              autoFocus={true}
            />
            <Text>Aliment name</Text>
            <TextInput
              style={styles.textInput}
              defaultValue={modalForm.name}
              onChangeText={e =>
                setModalForm({ name: e, type: modalForm.type })
              }
            />
            <Button
              title={"Validate"}
              onPress={() => {
                fruitList.push(modalForm);
                setShowModal(false);
              }}
            />
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 50,
    alignItems: "center"
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
    backgroundColor: "rgba(247,247,247,1.0)",
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
    backgroundColor: "#99D0F2",
    borderRadius: 5
  },
  button: {
    marginBottom: 10
  },
  modal: {},
  textInput: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 1
  }
});
