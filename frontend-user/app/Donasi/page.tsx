import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import Swiper from "react-native-swiper";

import Navbar from "../../components/Navbar";
import NavbarBottom from "../../components/BottomNavbar";

export default function DonasiPage() {
  const params = useLocalSearchParams();
  const router = useRouter();

  // 🔥 FIX PARAM (BIAR GAK ERROR)
  const imageParam = Array.isArray(params.image)
    ? params.image[0]
    : params.image;

  const data = {
    title: params.title as string,
    location: params.location as string,
    image: getImage(imageParam),
    description:
      "Banjir melanda sejumlah wilayah akibat curah hujan tinggi yang terjadi dalam beberapa hari terakhir. Air merendam permukiman warga, jalan raya, serta fasilitas umum, sehingga mengganggu aktivitas masyarakat.",
    kebutuhan: ["Makanan & Air Bersih", "Pakaian & Selimut", "Obat-obatan"],
  };

  return (
    <View style={styles.container}>
      {/* 🔥 STATUS BAR */}
      <StatusBar style="light" translucent backgroundColor="transparent" />

      {/* 🔥 HERO */}
      <View style={styles.hero}>
        <Image source={data.image} style={styles.bgImage} />

        <LinearGradient
          colors={["rgba(128,0,0,0.85)", "rgba(128,0,0,0.95)"]}
          style={styles.overlay}
        />

        <Navbar name="M. Arif Alfaiz" />

        {/* 🔥 SWIPER */}
        <Swiper autoplay height={260} showsPagination>
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

      {/* 🔥 CONTENT */}
      <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
        <ScrollView style={styles.content}>
          <Text style={styles.title}>{data.title}</Text>

          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={14} color="#555" />
            <Text style={styles.locationText}>{data.location}</Text>
          </View>

          <Text style={styles.section}>Donasi Diterima</Text>

          <View style={styles.badges}>
            {data.kebutuhan.map((item, i) => (
              <View key={i} style={styles.badge}>
                <Text style={styles.badgeText}>{item}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.section}>Deskripsi</Text>
          <Text style={styles.desc}>{data.description}</Text>

          <Text style={styles.section}>Keperluan</Text>
          {data.kebutuhan.map((item, i) => (
            <Text key={i} style={styles.listItem}>
              • {item}
            </Text>
          ))}

          {/* 🔥 BUTTON NAVIGASI (FIXED) */}
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              router.push({
                pathname: "../DonasiSekarang/page",
                params: {
                  title: data.title,
                  location: data.location,
                  image: imageParam,
                },
              })
            }
          >
            <Text style={styles.btnText}>Donasi Sekarang</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>

      <NavbarBottom active="donasi" />
    </View>
  );
}

// 🔥 IMAGE MAPPING
const getImage = (name?: string) => {
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

// 🎨 STYLE (TIDAK DIUBAH)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  hero: {
    height: 260,
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

  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 55,
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  content: {
    padding: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 10,
  },

  locationText: {
    color: "#555",
  },

  section: {
    marginTop: 10,
    fontWeight: "bold",
  },

  badges: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },

  badge: {
    backgroundColor: "#eee",
    padding: 6,
    borderRadius: 10,
  },

  badgeText: {
    fontSize: 12,
  },

  desc: {
    fontSize: 13,
    color: "#555",
  },

  listItem: {
    fontSize: 13,
    color: "#333",
  },

  button: {
    marginTop: 20,
    backgroundColor: "#1976D2",
    padding: 14,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});