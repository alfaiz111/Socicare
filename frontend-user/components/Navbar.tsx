import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Navbar({ name = "User" }: { name?: string }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.smallText}>Hi, Selamat Datang</Text>
        <Text style={styles.nameText}>{name}</Text>
      </View>

      <TouchableOpacity style={styles.menuBtn}>
        <Feather name="menu" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 16,
  },

  smallText: {
    color: "#eee",
    fontSize: 12,
  },

  nameText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  menuBtn: {
    padding: 6,
  },
});