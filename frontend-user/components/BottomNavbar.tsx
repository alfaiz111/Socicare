import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
  active?: string;
};

export default function NavbarBottom({ active = "home" }: Props) {
  return (
    <View style={styles.container}>
      <NavItem icon="home" label="Home" active={active === "home"} />
      <NavItem icon="alert-circle" label="Lapor" active={active === "lapor"} />
      <NavItem icon="file-text" label="Riwayat" active={active === "riwayat"} />
      <NavItem icon="user" label="Profile" active={active === "profile"} />
    </View>
  );
}

const NavItem = ({ icon, label, active }: any) => (
  <TouchableOpacity style={styles.item}>
    <Feather
      name={icon}
      size={20}
      color={active ? "#800000" : "#999"}
    />
    <Text style={[styles.text, active && styles.activeText]}>
      {label}
    </Text>
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
});