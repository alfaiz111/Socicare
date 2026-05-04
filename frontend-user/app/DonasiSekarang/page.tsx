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