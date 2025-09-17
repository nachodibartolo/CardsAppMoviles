import { Text, View, StyleSheet, Alert } from "react-native";
import React from "react";
import Boton from "@/components/boton";

export default function Tarjetas() {
  const [loading, setLoading] = React.useState(false);
  const handlePress = () => {
  setLoading(true);
  setTimeout(() => {
  setLoading(false);
    Alert.alert("Listo", "Terminó la acción");
  }, 2000);
};
  return (
    <View style={css.index}>
      <Boton title="Hola!" onPress={() => Alert.alert("Hola", "¡Funciona!")} />
      <Boton onPress={() => console.log("click")} />
      <Boton title="Boton de Carga" loading={loading} onPress={handlePress} />
      <Boton title="Otro" onPress={() => console.log("click")} disabled={loading} />
    </View >
  );
}

const css = StyleSheet.create({
  index:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})