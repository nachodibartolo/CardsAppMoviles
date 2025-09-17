import { Tabs } from "expo-router";

export default function TabsLayout() {
return (
   <Tabs initialRouteName="tarjetas">
      <Tabs.Screen name="contador" options={{ title: "Contador" }} />
      <Tabs.Screen name="tarjetas" options={{ title: "Tarjetas" }} />
      <Tabs.Screen name="perfil" options={{ title: "Perfil" }} />
   </Tabs>
);
}