import { TouchableOpacity, Text, StyleSheet  } from "react-native";

export default function Boton ({
   title = "Boton", 
   onPress = () => {},
   loading = false,
   disabled = false,
   }){
   const isDisabled = disabled || loading;
   return (
      <TouchableOpacity style={[styles.btn, isDisabled && styles.btnDisabled]} onPress={onPress} 
      activeOpacity={0.7} disabled={isDisabled}>
         <Text style={styles.txt}>{loading ? "Cargando..." : title}</Text>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   btn: {
      backgroundColor: "#2563EB",
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      width: "50%",
      marginTop: 20,
   },
   btnDisabled: {
      opacity: 0.6,
   },
   txt: {
      color: "white",
      fontWeight: "600",
      fontSize: 16,
   },
});


