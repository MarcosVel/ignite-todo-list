import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Image } from "react-native";
import { COLORS } from "./src/theme/colors";
import logo from "./src/assets/logo.png";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor={COLORS.gray700} />
      <Image source={logo} style={styles.logo} />

      <View style={styles.main}>
        <Text style={[styles.empty, { fontWeight: "bold" }]}>
          Open up App.tsx to teste working on your app!
        </Text>
        <Text style={styles.empty}>
          Open up App.tsx to teste working on your app!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray700,
  },
  logo: {
    marginTop: 24,
    marginBottom: 72,
    alignSelf: "center",
  },
  main: {
    flex: 1,
    backgroundColor: COLORS.gray600,
    alignItems: "center",
  },
  empty: {
    color: COLORS.gray300,
  },
});
