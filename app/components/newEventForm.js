import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Dimensions, 
         TextInput,
         ScrollView,
         Button,
         TouchableOpacity,
         } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class newContributionForm extends React.Component {
    static navigationOptions = {
        tabBarLabel: "New Event",
        drawerIcon: () => {
          return (
            <MaterialIcons
            name="add-circle"
            size={24}
            color="black"
            >
            </MaterialIcons>
          );
        }
      }
    render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Button title="=" onPress={() => this.props.navigation.navigate('DrawerOpen')}/>
            <Text style={styles.headerText}>New Event!</Text> 
        </View>
        <TextInput
          style={styles.textInputs}
          placeholder={"Event Name"}
        />
        <TextInput
          style={styles.textInputs}
          placeholder={"Venue"}
        />
        <View style={styles.rowDiv}>
          <TextInput
            style={styles.stateZipText}
            placeholder={"City / Town"}
           />
          <TextInput
            style={styles.stateZipText}
            placeholder={"ST"}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add Event</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "#00c191",
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
  buttonContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#adffed"
  },
  button: {
    elevation: 4,
    height: 50,
    backgroundColor:'#fff',
    borderWidth: 3,
    borderColor: "#00c191",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#005643',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 1.0
  },
  buttonText: {
    color: "#00c191",
    fontWeight: "bold",
    fontSize: 30,
  },
});