import { Text, View, StyleSheet, Alert } from "react-native";
import React from "react";
import Boton from "@/components/boton";

export default function Contador() {
   const [count, setCount] = React.useState(0)
  return (
    <View style={css.container}>
      <Boton title={`${count}`} onPress={() => setCount((prev) => prev + 1 )} />
    </View>
  );
};

const css = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})