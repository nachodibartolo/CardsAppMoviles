import Boton from "@/components/boton";
import React from "react";
import { Modal, StyleSheet, Text, TextInput, View } from "react-native";

export default function Perfil() {
  const [nombre, setNombre] = React.useState("Nombre Apellido");
  const [visible, setVisible] = React.useState(false);
  const [borrador, setBorrador] = React.useState(nombre);

  const abrirModal = () => {
    setBorrador(nombre);        // carga el nombre actual
    setVisible(true);
  };

  const guardar = () => {
    setNombre(borrador);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{nombre}</Text>
      <Boton title="Cambiar nombre" onPress={abrirModal} />

      <Modal visible={visible} transparent animationType="slide">
        <View style={styles.fondo}>
          <View style={styles.card}>
            <TextInput
               style={styles.input}
               value={borrador}
               onChangeText={setBorrador}
               placeholder="Nuevo nombre"
            />
            <Boton title="Guardar" onPress={guardar} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 16 },
  texto: { fontSize: 22, fontWeight: "600" },
  fondo: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  card: { backgroundColor: "white", padding: 20, borderRadius: 12, gap: 16, width: "80%" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10 },
});
