import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Dimensions, 
         TextInput,
         Button,
         } from 'react-native';
import NewContributionForm from "./app/components/newContributionForm";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NewContributionForm/>
      </View>
    );
  }
}

const Window = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
