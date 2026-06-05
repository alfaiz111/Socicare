import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";

import Navbar from "../../components/Navbar";
import NavbarBottom from "../../components/BottomNavbar";

export default function RiwayatPage() {

  // 🔥 DATA DUMMY RIWAYAT
  const data = [
    {
      id: 1,
      nama: "Donasi Bencana Alam",
      lokasi: "Bandung",
      status: "Diproses",
    },
    {
      id: 2,
      nama: "Donasi Panti Asuhan",
      lokasi: "Jakarta",
      status: "Selesai",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      {/* 🔥 HERO + NAVBAR */}
      <View style={styles.hero}>
        <Image
          source={require("../../assets/images/bg.jpeg")}
          style={styles.bgImage}
        />

        <LinearGradient
          colors={["rgba(128,0,0,0.85)", "rgba(128,0,0,0.95)"]}
          style={styles.overlay}
        />

        {/* ✅ NAVBAR SAMA SEPERTI LAPOR */}
        <Navbar name="M. Arif Alfaiz" />

        <Swiper autoplay showsPagination dotColor="#ccc" activeDotColor="#fff">
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
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.content}>

          <Text style={styles.title}>Riwayat Laporan</Text>
          <Text style={styles.subtitle}>
            Daftar laporan yang telah kamu kirim
          </Text>

          {/* LIST RIWAYAT */}
          {data.map((item) => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.cardTitle}>{item.nama}</Text>
              <Text style={styles.cardText}>📍 {item.lokasi}</Text>
              <Text
                style={[
                  styles.status,
                  item.status === "Selesai"
                    ? styles.done
                    : styles.process,
                ]}
              >
                {item.status}
              </Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>

      {/* 🔥 BOTTOM NAVBAR */}
      <NavbarBottom active="riwayat" />
    </View>
  );
}

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
    paddingTop: 40,
  },

  logo: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },

  content: {
    padding: 16,
    paddingBottom: 80,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },

  subtitle: {
    color: "#666",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },

  cardText: {
    color: "#555",
    marginTop: 5,
  },

  status: {
    marginTop: 8,
    fontWeight: "bold",
  },

  process: {
    color: "#FFA500",
  },

  done: {
    color: "green",
  },
});