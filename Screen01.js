import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Screen01() {
  const [data, setData] = useState([]);
  const [resData, setResData] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleButtonPress = (buttonId) => {
    setSelectedButton(buttonId);
    if (buttonId === 2) {
      const cloneData = [...resData];
      const newData = cloneData.filter((item) => item.name.includes("Pink"));
      setData(newData);
    } else if (buttonId === 3) {
      const cloneData = [...resData];
      const newData = cloneData.filter((item) =>
        item.name.includes("Floating")
      );
      setData(newData);
    } else setData(resData);
  };
  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl =
      "https://62c1218ceff7f7856f0990a7.mockapi.io/shopeelink/donutdb";

    // Make a GET request using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response
        setData(response.data);
        setResData(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{ alignSelf: "center" }}
        />
      ) : (
        <View style={{ width: "100%" }}>
          <Text style={{ fontSize: 16, marginBottom: 25 }}>Welcome, Jala!</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 40 }}>
            Choice you Best food
          </Text>
          <TouchableOpacity
            style={{
              padding: 10,
              borderWidth: 1,
              width: "70%",
              marginBottom: 40,
            }}
          >
            <TextInput placeholder="Search food"></TextInput>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={[
                styles.button,
                selectedButton === 1 ? styles.selectedButton : null,
              ]}
              onPress={() => handleButtonPress(1)}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>Donut</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                selectedButton === 2 ? styles.selectedButton : null,
              ]}
              onPress={() => handleButtonPress(2)}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                Pink Donut
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                selectedButton === 3 ? styles.selectedButton : null,
              ]}
              onPress={() => handleButtonPress(3)}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>Floating</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemContainer}>
            {data.map((item, index) => (
              <View style={styles.item}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 105, height: 105, borderRadius: 10 }}
                ></Image>
                <View
                  style={{
                    justifyContent: "flex-start",
                    gap: 5,
                    alignItems: "flex-start",
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "#ccc" }}
                  >
                    {item.desc}
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    {item.price}
                  </Text>
                </View>
                <TouchableOpacity style={styles.plus}>
                  <Text style={{ fontSize: 30, fontWeight: "bold" }}>+</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
    flexDirection: "column",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "30%",
  },
  selectedButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "30%",
    backgroundColor: "#F1B000",
  },
  itemContainer: {
    width: "100%",
    flexDirection: "column",
    gap: 10,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#F4DDDD",
    alignItems: "center",
    borderRadius: 15,
    padding: 5,
    gap: 10,
    marginTop: 30,
  },
  plus: {
    width: 40,
    height: 40,
    backgroundColor: "yellow",
    borderRadius: 15,
    borderTopLeftRadius: 90,
    position: "absolute",
    bottom: 5,
    right: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
