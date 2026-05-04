import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Navbar({ name = "User" }: { name?: string }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + 15, // 🔥 INI KUNCI (samakan dengan home)
        },
      ]}
    >
      {/* LEFT */}
      <View style={styles.leftSection}>
        <Image
          source={require("../assets/images/sosmas.png")}
          style={styles.logo}
        />

        <View>
          <Text style={styles.smallText}>Hi, Selamat Datang</Text>
          <Text style={styles.nameText}>{name}</Text>
        </View>
      </View>

      {/* MENU */}
      <TouchableOpacity style={styles.menuBtn}>
        <Feather name="menu" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,
    paddingBottom: 12,

    backgroundColor: "transparent",
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },

  smallText: {
    color: "#fff",
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