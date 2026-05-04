import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Navbar({ name = "User" }: { name?: string }) {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + 15,
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

      {/* RIGHT MENU */}
      <View>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => setOpen(!open)}
        >
          <Feather name="menu" size={22} color="#fff" />
        </TouchableOpacity>

        {/* 🔥 DROPDOWN */}
        {open && (
          <View style={styles.dropdown}>
            <TouchableOpacity
              onPress={() => {
                setOpen(false);
                router.replace("/auth/Login/page"); // 🔥 arahkan ke login
              }}
            >
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
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

  // 🔥 DROPDOWN STYLE
  dropdown: {
    position: "absolute",
    top: 40,
    right: 0,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 5,
  },

  logoutText: {
    color: "red",
    fontWeight: "bold",
  },
});