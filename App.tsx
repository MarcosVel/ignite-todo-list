import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "./src/assets/logo.png";
import emptyImg from "./src/assets/clipboard.png";
import { COLORS } from "./src/theme/colors";
import { Feather } from "@expo/vector-icons";

export default function App() {
  function renderEmpty() {
    return (
      <View style={styles.emptyView}>
        <Image source={emptyImg} style={styles.emptyImg} />

        <Text style={[styles.empty, { fontWeight: "bold" }]}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.empty}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor={COLORS.gray700} />
      <Image source={logo} style={styles.logo} />

      <View style={styles.main}>
        <View style={styles.add}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={COLORS.gray300}
          />
          <TouchableOpacity style={styles.addButton}>
            <Feather name="plus-circle" size={20} color={COLORS.gray100} />
          </TouchableOpacity>
        </View>

        {renderEmpty()}
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
    paddingHorizontal: 24,
    backgroundColor: COLORS.gray600,
    alignItems: "center",
  },
  add: {
    flexDirection: "row",
    marginTop: -28,
    marginBottom: 32,
  },
  input: {
    flex: 1,
    backgroundColor: COLORS.gray500,
    padding: 16,
    fontSize: 16,
    color: COLORS.gray100,
    borderRadius: 6,
    maxHeight: 55,
    marginRight: 4,
  },
  addButton: {
    width: 54,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.blueDark,
    borderRadius: 6,
  },
  emptyView: {
    marginTop: 20,
    paddingTop: 48,
    width: "100%",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: COLORS.gray400,
  },
  emptyImg: {
    marginBottom: 16,
  },
  empty: {
    color: COLORS.gray300,
  },
});
