import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";

import Navbar from "../../components/Navbar";

export default function Donasi() {
  const params = useLocalSearchParams();

  const [nama, setNama] = useState("");
  const [jumlah, setJumlah] = useState("");

  const nominalCepat = [100000, 200000, 500000, 1000000];

  const data = {
    title: params.title,
    location: params.location,
    image: getImage(params.image),
  };

  return (
    <View style={styles.container}>
      
      {/* 🔥 HERO HEADER (TIDAK DIHILANGKAN) */}
      <View style={styles.hero}>
        <Image source={data.image} style={styles.bgImage} />

        <LinearGradient
          colors={["rgba(128,0,0,0.85)", "rgba(128,0,0,0.95)"]}
          style={styles.overlay}
        />

        <Navbar name="M. Arif Alfaiz" />

        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>{data.title}</Text>
          <Text style={styles.heroSub}>{data.location}</Text>
        </View>
      </View>

      {/* 🔥 FORM */}
      <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
        <ScrollView style={styles.content}>

          <Text style={styles.section}>Nama Donatur</Text>
          <TextInput
            placeholder="Masukkan nama anda"
            style={styles.input}
            value={nama}
            onChangeText={setNama}
          />

          <Text style={styles.section}>Jumlah Donasi</Text>
          <TextInput
            placeholder="Masukkan jumlah donasi"
            style={styles.input}
            keyboardType="numeric"
            value={jumlah}
            onChangeText={setJumlah}
          />

          <Text style={styles.section}>Pilih Nominal Cepat</Text>

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

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Bayar Sekarang</Text>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

// 🔥 MAPPING GAMBAR (BIAR SAMA)
const getImage = (name: any) => {
  switch (name) {
    case "Banjir":
      return require("../../assets/images/banjir.jpg");
    case "Tanah Longsor":
      return require("../../assets/images/longsor.jpeg");
    case "Tsunami":
      return require("../../assets/images/tsunami.jpg");
    case "Palestina":
      return require("../../assets/images/palestina.jpg");
    default:
      return require("../../assets/images/bg.jpeg");
  }
};

// 🎨 STYLE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  // 🔥 HERO
  hero: {
    height: 220,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: "hidden",
  },

  bgImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  heroContent: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },

  heroTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  heroSub: {
    color: "#ddd",
    fontSize: 12,
  },

  // 🔥 FORM
  content: {
    padding: 16,
  },

  section: {
    marginTop: 10,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginTop: 5,
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
    borderRadius: 25,
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