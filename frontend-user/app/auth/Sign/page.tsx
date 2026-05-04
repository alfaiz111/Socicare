import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function Sign() {
  const router = useRouter();

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LinearGradient
      colors={["#3b0000", "#000000"]}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Buat Akun</Text>
        <Text style={styles.subtitle}>
          Daftar untuk mulai menggunakan aplikasi
        </Text>

        <TextInput
          placeholder="Nama"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={nama}
          onChangeText={setNama}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#aaa"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 15 }}
          onPress={() => router.push("../Login/page")}
        >
          <Text style={{ color: "#aaa", textAlign: "center" }}>
            Sudah punya akun? Login
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.05)",
    padding: 20,
    borderRadius: 20,
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: "#aaa",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "rgba(255,255,255,0.08)",
    padding: 12,
    borderRadius: 10,
    color: "#fff",
    marginTop: 10,
  },

  button: {
    backgroundColor: "#b30000",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});