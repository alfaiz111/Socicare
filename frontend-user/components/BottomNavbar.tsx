import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type Props = {
  active?: string;
};

export default function NavbarBottom({ active = "home" }: Props) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <NavItem
        icon="home"
        label="Home"
        active={active === "home"}
        onPress={() => router.replace("/landing")}
      />

      <NavItem
        icon="alert-circle"
        label="Lapor"
        active={active === "lapor"}
        onPress={() => router.replace("../lapor")} // ✅ FIX DI SINI
      />

      <NavItem
        icon="file-text"
        label="Riwayat"
        active={active === "riwayat"}
        onPress={() => router.replace("../riwayat")}
      />

      <NavItem
        icon="user"
        label="Profile"
        active={active === "profile"}
        onPress={() => router.replace("../profile")}
      />

    </View>
  );
}

const NavItem = ({ icon, label, active, onPress }: any) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Feather
      name={icon}
      size={22}
      color={active ? "#800000" : "#999"}
    />
    <Text style={[styles.text, active && styles.activeText]}>
      {label}
    </Text>

    {active && <View style={styles.dot} />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderTopWidth: 0.5,
    borderColor: "#ddd",
    elevation: 10,
  },

  item: {
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 11,
    color: "#999",
    marginTop: 2,
  },

  activeText: {
    color: "#800000",
    fontWeight: "600",
  },

  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#800000",
    marginTop: 4,
  },
});