import React, { useState } from "react";
import { AlimentsModel, AlimentsType } from "../models/aliments-model";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import Realm from "realm";

interface props {
  foodList: AlimentsModel[];
  isVisibleParent: boolean;
}

export default function FoodListAddAlimentModal({
  foodList,
  isVisibleParent
}: props) {
  const [modalForm, setModalForm] = useState<AlimentsModel>({
    type: AlimentsType.FRUIT,
    name: ""
  });
  const [isVisible, setIsVisible] = useState(isVisibleParent);

  Realm.open({ schema: [] }).then(realm => {
    realm.write(() => {});
  });

  return (
    <Modal animationType="slide" visible={isVisible} transparent={true}>
      <View style={styles.modal}>
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
          onChangeText={e => setModalForm({ name: e, type: modalForm.type })}
        />
        <Button
          title={"Validate"}
          onPress={() => {
            foodList.push(modalForm);
            setIsVisible(false);
          }}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000080"
  },
  textInput: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 1
  }
});
