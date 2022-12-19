import { StatusBar } from "expo-status-bar";
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "./src/assets/logo.png";
import emptyImg from "./src/assets/clipboard.png";
import { COLORS } from "./src/theme/colors";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import Item from "./src/components/Item";

export default function App() {
  const [list, setList] = useState<string[]>([]);
  const [task, setTask] = useState("");

  function handleTaskAdd() {
    setList(prevState => [...prevState, task]);
    setTask("");
  }

  function handleDeleteTask(item: string) {
    Alert.alert("Remover Tarefa", "Deseja realmente remover a tarefa?", [
      {
        text: "Sim",
        onPress: () =>
          setList(prevState => prevState.filter(tasks => tasks !== item)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" backgroundColor={COLORS.gray700} />

        <Image source={logo} style={styles.logo} />

        <View style={styles.main}>
          <View style={styles.add}>
            <TextInput
              style={styles.input}
              placeholder="Adicione uma nova tarefa"
              placeholderTextColor={COLORS.gray300}
              value={task}
              onChangeText={text => setTask(text)}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleTaskAdd}>
              <Feather name="plus-circle" size={20} color={COLORS.gray100} />
            </TouchableOpacity>
          </View>

          <View style={styles.progress}>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.badgeText, { color: COLORS.blue }]}>
                Criadas
              </Text>
              <View style={styles.badge}>
                <Text style={styles.badgeQtd}>{list.length}</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.badgeText, { color: COLORS.purple }]}>
                Concluídas
              </Text>
              <View style={styles.badge}>
                <Text style={styles.badgeQtd}>0</Text>
              </View>
            </View>
          </View>

          <FlatList
            data={list}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Item data={item} deleteTask={handleDeleteTask} />
            )}
            ListEmptyComponent={() => renderEmpty()}
            style={{ width: "100%" }}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
  progress: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  badgeText: {
    fontWeight: "bold",
    marginRight: 8,
  },
  badge: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.gray400,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 99,
  },
  badgeQtd: {
    color: COLORS.gray100,
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 15,
  },
  emptyView: {
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
