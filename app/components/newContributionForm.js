import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Dimensions, 
         TextInput,
         ScrollView,
         Button,
         } from 'react-native';

export default class newContributionForm extends React.Component {
    render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Contribution List</Text> 
        </View>
        <TextInput
          style={styles.textInputs}
          placeholder={"First Name"}
        />
        <TextInput
          style={styles.textInputs}
          placeholder={"Last Name"}
        />
        <TextInput
          style={styles.textInputs}
          placeholder={"Street Address"}
        />
        <TextInput
          style={styles.textInputs}
          placeholder={"City / Town"}
        />
        <View style={styles.rowDiv}>
          <TextInput
            style={styles.stateZipText}
            placeholder={"ST"}
          />
          <TextInput
            style={styles.stateZipText}
            placeholder={"Zip Code"}
          />
        </View>
        <TextInput
          style={styles.textInputs}
          placeholder={"Email"}
        />
        <TextInput
          style={styles.textInputs}
          placeholder={"Phone Number"}
        />
        <View style={styles.rowDiv}>
          <TextInput
            style={styles.stateZipText}
            placeholder={"Amount"}
          />
          <TextInput
            style={styles.stateZipText}
            placeholder={"Type"}
          />
        </View>
        <TextInput
          style={styles.textInputs}
          placeholder={"Event"}
        />
        <Button
          style={styles.button}
          title="Learn More"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const Window = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#fc2092",
    alignItems: 'center',
    justifyContent: "center",
    width: Window.width,
    height: 70,
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 30,
  },
  textInputs: {
    flexDirection: "row",
    height: 55,
    width: Window.width,
    borderTopColor: "transparent",
    borderColor: 'gray', 
    borderWidth: 1,
    paddingLeft: 10,
  },
  rowDiv: {
    flexDirection: "row",
    width: Window.width,
  },
  stateZipText: {
    flex: 2,
    borderLeftColor: "transparent",
    borderTopColor: "transparent",
    borderColor: 'gray', 
    borderWidth: 1,
    height: 55,
    paddingLeft: 10,
  },
  button: {
    elevation: 4,
    // Material design blue from https://material.google.com/style/color.html#color-color-palette
    backgroundColor: '#2196F3',
    borderRadius: 2,
    color: "#2196F3",
  }
});
