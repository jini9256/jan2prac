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

export default function App() {
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
            placeholder="Add your Todo"
            style={styles.input}
          ></TextInput>
        </View>

        <ScrollView>
          <View style={styles.task}>
            <Text>텍스트렌더링부분</Text>
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
