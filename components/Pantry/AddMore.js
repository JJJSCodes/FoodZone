import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";


export default function AddMore({navigation, route}) {
  const [text, onChangeText] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="Type New Item"
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

