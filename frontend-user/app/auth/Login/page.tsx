import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = () => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    // DEBUG (lihat di console)
    console.log("Email:", cleanEmail);
    console.log("Password:", cleanPassword);

    if (!cleanEmail || !cleanPassword) {
      Alert.alert("Error", "Email dan Password wajib diisi!");
      return;
    }

    // DUMMY USER
    if (cleanEmail === "admin@gmail.com" && cleanPassword === "123456") {
      Alert.alert("Sukses", "Login berhasil!");
      router.replace("/landing"); // pastikan folder ada
    } else {
      Alert.alert("Login Gagal", "Email atau password salah!");
    }
  };

  return (
    <LinearGradient colors={["#3b0000", "#000000"]} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Selamat Datang</Text>
        <Text style={styles.subtitle}>
          Masuk untuk melanjutkan ke dashboard
        </Text>

        {/* GOOGLE BUTTON */}
        <TouchableOpacity style={styles.googleBtn}>
          <Text style={{ color: "#000" }}>Continue with Google</Text>
        </TouchableOpacity>

        <Text style={styles.or}>OR</Text>

        {/* EMAIL */}
        <TextInput
          placeholder="Email"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        {/* PASSWORD */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="#aaa"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* BUTTON LOGIN */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={{ color: "#aaa" }}>Forgot password</Text>

          <TouchableOpacity onPress={() => router.push("/auth/Sign/page")}>
            <Text style={{ color: "#fff" }}>Sign up</Text>
          </TouchableOpacity>
        </View>
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

  googleBtn: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  or: {
    color: "#aaa",
    textAlign: "center",
    marginVertical: 10,
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

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
});