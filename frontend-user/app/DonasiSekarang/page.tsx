import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Donasi() {
  const params = useLocalSearchParams();

  const [nama, setNama] = useState("");
  const [jumlah, setJumlah] = useState("");

  const nominalCepat = [100000, 200000, 500000, 1000000];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        {/* 🔥 INFO */}
        <Text style={styles.title}>Donasi</Text>
        <Text style={styles.sub}>{params.title}</Text>

        {/* 🔥 INPUT NAMA */}
        <Text style={styles.label}>Nama Donatur</Text>
        <TextInput
          placeholder="Masukkan nama anda"
          style={styles.input}
          value={nama}
          onChangeText={setNama}
        />

        {/* 🔥 INPUT JUMLAH */}
        <Text style={styles.label}>Jumlah Donasi</Text>
        <TextInput
          placeholder="Masukkan jumlah"
          style={styles.input}
          keyboardType="numeric"
          value={jumlah}
          onChangeText={setJumlah}
        />

        {/* 🔥 PILIHAN CEPAT */}
        <Text style={styles.label}>Pilih Nominal Cepat</Text>
        <View style={styles.nominalContainer}>
          {nominalCepat.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.nominalBtn}
              onPress={() => setJumlah(item.toString())}
            >
              <Text style={styles.nominalText}>
                Rp {item.toLocaleString("id-ID")}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 🔥 BUTTON */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Bayar Sekarang</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },

  sub: {
    color: "#777",
    marginBottom: 20,
  },

  label: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "600",
  },

  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  nominalContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 10,
  },

  nominalBtn: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25, // 🔥 OVAL
    borderWidth: 1,
    borderColor: "#1976D2",
  },

  nominalText: {
    color: "#1976D2",
    fontWeight: "600",
  },

  button: {
    marginTop: 30,
    backgroundColor: "#1976D2",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});