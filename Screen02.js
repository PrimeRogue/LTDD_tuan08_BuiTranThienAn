import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";

export default function Screen02() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/donut.png")}
        style={{ width: 272, height: 272, borderRadius: 10 }}
      ></Image>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 20,
          fontWeight: 700,
          alignSelf: "flex-start",
        }}
      >
        Pink Donut
      </Text>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
          marginBottom: 30,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#747474" }}>
          Spicy tasty donut family
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>$20.00</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
          // marginBottom: 30,
        }}
      >
        <Image
          source={require("./assets/delivery.png")}
          style={{ width: 21, height: 21, marginRight: 15 }}
        ></Image>
        <View>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "#747474" }}>
            Delivery in
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>30 min</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            gap: 20,
            position: "absolute",
            right: 0,
          }}
        >
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#F1B000",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "#fff",
                margin: 0,
                padding: 0,
              }}
            >
              -
            </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>1</Text>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#F1B000",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "#fff",
                margin: 0,
                padding: 0,
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 10,
          alignSelf: "flex-start",
          marginBottom: 10,
        }}
      >
        Restaurants info
      </Text>
      <Text style={{ fontSize: 15, fontWeight: "bold", color: "#747474" }}>
        Order a Large Pizza but the size is the equivalent of a medium/small
        from other places at the same price range.
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#F1B000",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          padding: 15,
          borderWidth: 1,
          borderColor: "#ccc",
          marginTop: 25,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
          Add to cart
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
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
