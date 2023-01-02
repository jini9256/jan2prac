import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  //addTodo
  //input창에서 엔터를 누르면 todo가 추가된다.

  //  2.구조를 잡은 데이터에서 text와 category값을 만듬
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState(""); //js,react,ct

  // 1.데이터 구조를 잡는다.
  const newTodo = {
    text,
    isEdit: false,
    isDone: false,
    id: Date.now(),
    category,
  };

  // 3.기존 todo값에 접근을 해서 settodos 만들기
  const addTodo = () => {
    setTodos((prev) => [...prev, newTodo]);
    setText("");
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Js</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>React</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Coding Test</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            // 4.위에서 구조를 잡은 값들을 넣기
            value={text}
            onChangeText={setText}
            onSubmitEditing={addTodo}
            placeholder="Add your Todo"
            style={styles.input}
          ></TextInput>
        </View>

        <ScrollView>
          {/* 5.맵 만들어주기 */}
          {todos.map((todo) => (
            <View style={styles.task} key={todo.id}>
              <Text>{todo.text}</Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity>
                  <AntDesign name="checksquare" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Feather
                    style={{ marginLeft: 10 }}
                    name="edit"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <AntDesign
                    style={{ marginLeft: 10 }}
                    name="delete"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tab: {
    backgroundColor: "#0FBCF9",
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: "30%",
    alignItems: "center",
  },
  tabText: {
    fontWeight: "600",
  },
  inputWrapper: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  task: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
