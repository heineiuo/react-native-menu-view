import { View } from "react-native";
import { MenuView } from "./src";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MenuView actions={[]} />
    </View>
  );
}
