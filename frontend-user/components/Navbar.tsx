import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Navbar({ name = "User" }: { name?: string }) {
  return (
    <View style={styles.container}>
      
      {/* LEFT SECTION */}
      <View style={styles.leftSection}>
        
        {/* LOGO */}
        <Image
          source={require("../assets/images/SOSMAS.png")}
          style={styles.logo}
        />

        {/* TEXT */}
        <View>
          <Text style={styles.smallText}>Hi, Selamat Datang</Text>
          <Text style={styles.nameText}>{name}</Text>
        </View>

      </View>

      {/* MENU */}
      <TouchableOpacity style={styles.menuBtn}>
        <Feather name="menu" size={22} color="#000" />
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

  // 🔥 LEFT SIDE (logo + text)
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10, // jarak logo & teks
  },

  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },

  smallText: {
    color: "#000",
    fontSize: 12,
  },

  nameText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },

  menuBtn: {
    padding: 6,
  },
});