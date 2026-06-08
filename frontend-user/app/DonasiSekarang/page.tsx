import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import Swiper from "react-native-swiper";

import Navbar from "../../components/Navbar";
import NavbarBottom from "../../components/BottomNavbar";

export default function DonasiSekarang() {
  const params = useLocalSearchParams();

  const imageParam = Array.isArray(params.image)
    ? params.image[0]
    : params.image;

  const title = Array.isArray(params.title)
    ? params.title[0]
    : params.title || "";

  const location = Array.isArray(params.location)
    ? params.location[0]
    : params.location || "";

  const [nama, setNama] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [selectedNominal, setSelectedNominal] = useState<number | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const pilihanBarang = [
    "Pakaian Layak Pakai",
    "Obat-obatan",
    "Sembako",
    "Hygiene Kit",
  ];

  const toggleItem = (item: string) => {
    setSelectedItems((prevItems) =>
      prevItems.includes(item)
        ? prevItems.filter((i) => i !== item)
        : [...prevItems, item]
    );
  };

  // 🔥 FORMAT RUPIAH
  const formatRupiah = (value: string) => {
    const number = value.replace(/[^0-9]/g, "");
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const data = {
    title,
    location,
    image: getImage(imageParam),
  };

  const quickAmounts = [
    10000,
    25000,
    50000,
    100000,
    500000,
    1000000,
  ];

  return (
    <View style={styles.container}>
      {/* HERO */}
      <View style={styles.hero}>
        <Image source={data.image} style={styles.bgImage} />

        <LinearGradient
          colors={["rgba(128,0,0,0.85)", "rgba(128,0,0,0.95)"]}
          style={styles.overlay}
        />

        <Navbar name="M. Arif Alfaiz" />

        <Swiper autoplay height={220} showsPagination>
          {[
            require("../../assets/images/sosmas.png"),
            require("../../assets/images/1.png"),
            require("../../assets/images/2.png"),
          ].map((img, index) => (
            <View key={index} style={styles.slide}>
              <Image source={img} style={styles.logo} />
            </View>
          ))}
        </Swiper>
      </View>

      {/* CONTENT */}
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={styles.content}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.location}>{data.location}</Text>

          {/* FORM */}
          <Text style={styles.label}>Nama Donatur</Text>
          <TextInput
            placeholder="Masukkan nama anda"
            style={styles.input}
            value={nama}
            onChangeText={setNama}
          />

          {/* INPUT JUMLAH DENGAN FORMAT RP */}
          <Text style={styles.label}>Jumlah Donasi</Text>
          <TextInput
            placeholder="Rp 0"
            style={styles.input}
            keyboardType="numeric"
            value={jumlah ? `Rp ${formatRupiah(jumlah)}` : ""}
            onChangeText={(text) => {
              const clean = text.replace(/[^0-9]/g, "");
              setJumlah(clean);
              setSelectedNominal(null);
            }}
          />

          {/* NOMINAL */}
          <Text style={styles.label}>Pilih Nominal Cepat</Text>
          <View style={styles.quickContainer}>
            {quickAmounts.map((item, index) => {
              const active = selectedNominal === item;

              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.quickButton,
                    active && styles.quickButtonActive,
                  ]}
                  onPress={() => {
                    setJumlah(item.toString());
                    setSelectedNominal(item);
                  }}
                >
                  <Text
                    style={[
                      styles.quickText,
                      active && styles.quickTextActive,
                    ]}
                  >
                    Rp {item.toLocaleString("id-ID")}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* BARANG */}
          <Text style={styles.label}>Pilih Barang Donasi</Text>
          <View style={styles.formDonasi}>
            {pilihanBarang.map((item, index) => {
              const selected = selectedItems.includes(item);

              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionItem,
                    selected && styles.optionItemActive,
                  ]}
                  onPress={() => toggleItem(item)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selected && styles.optionTextActive,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* RINGKASAN */}
          <View style={styles.summaryBox}>
            <Text style={styles.summaryTitle}>Ringkasan Donasi</Text>
            <Text>Program: {data.title}</Text>
            <Text>Lokasi: {data.location}</Text>
            <Text>Nama: {nama || "-"}</Text>
            <Text>
              Jumlah: Rp{" "}
              {jumlah ? Number(jumlah).toLocaleString("id-ID") : "0"}
            </Text>
            <Text>
              Barang:{" "}
              {selectedItems.length > 0
                ? selectedItems.join(", ")
                : "Belum dipilih"}
            </Text>
          </View>

          {/* BUTTON */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (!nama || !jumlah || selectedItems.length === 0) {
                Alert.alert("Error", "Lengkapi semua data ya!");
                return;
              }

              Alert.alert("Berhasil 🎉", "Donasi berhasil diproses!");
            }}
          >
            <Text style={styles.buttonText}>Bayar Sekarang</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>

      <NavbarBottom active="donasi" />
    </View>
  );
}

// IMAGE
const getImage = (name: string) => {
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

// STYLE
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },

  hero: {
    height: 260,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: "hidden",
  },

  bgImage: { position: "absolute", width: "100%", height: "100%" },
  overlay: { position: "absolute", width: "100%", height: "100%" },

  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    
  },

  logo: { width: 180, height: 180, resizeMode: "contain" },

  content: { padding: 16, marginTop: -20 },

  title: { fontSize: 20, fontWeight: "bold" },
  location: { color: "#555", marginBottom: 10 },

  label: { marginTop: 15, fontWeight: "bold" },

  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    marginTop: 5,
  },

  quickContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },

  quickButton: {
    width: "48%",
    paddingVertical: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    marginBottom: 12,
    alignItems: "center",
    elevation: 2,
  },

  quickButtonActive: {
    backgroundColor: "#1976D2",
    borderColor: "#1976D2",
  },

  quickText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },

  quickTextActive: {
    color: "#fff",
  },

  formDonasi: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 12,
  },

  optionItem: {
    width: "45%",
    paddingVertical: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 6,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  optionItemActive: {
    backgroundColor: "#1976D2",
    borderColor: "#1976D2",
  },

  optionText: {
    fontSize: 13,
    color: "#333",
    textAlign: "center",
  },

  optionTextActive: {
    color: "#fff",
    fontWeight: "600",
  },

  summaryBox: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    elevation: 2,
  },

  summaryTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },

  button: {
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: "#1976D2",
    padding: 16,
    borderRadius: 25,
    alignItems: "center",
  },

  buttonText: {
    color: "#ffff",
    fontWeight: "bold",
  },
});