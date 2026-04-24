import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";

export default function Landing() {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        
        {/* Background */}
        <Image
          source={require("../../assets/images/bg.jpeg")}
          style={styles.bgImage}
        />

        {/* Overlay */}
        <LinearGradient
          colors={["rgba(128,0,0,0.8)", "rgba(128,0,0,0.9)"]}
          style={styles.overlay}
        />

        {/* Top Bar */}
        <View style={styles.topBar}>
          <View>
            <Text style={styles.smallText}>Hi, Selamat Datang</Text>
            <Text style={styles.nameText}>m. arif alfaiz</Text>
          </View>

          <Text style={styles.menuText}>ID ☰</Text>
        </View>

        {/* SLIDER */}
        <Swiper autoplay height={200} showsPagination>
          <View style={styles.slide}>
            <Image
              source={require("../../assets/images/SOSMAS.png")}
              style={styles.logo}
            />
          </View>

          <View style={styles.slide}>
            <Image
              source={require("../../assets/images/1.png")}
              style={styles.logo}
            />
          </View>

          <View style={styles.slide}>
            <Image
              source={require("../../assets/images/2.png")}
              style={styles.logo}
            />
          </View>
        </Swiper>
      </View>

      {/* CONTENT */}
      <ScrollView style={styles.content}>
        
        {/* Title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.title}>Daftar Bantuan</Text>
          <Text style={styles.subtitle}>4 Location</Text>
        </View>

        {/* CARD LIST */}
        <View style={styles.cardContainer}>
          {data.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />

              <View style={styles.cardOverlay}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardLocation}>📍 {item.location}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Text style={styles.activeNav}>🏠</Text>
          <Text style={styles.activeNavText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.navIcon}>🎁</Text>
          <Text style={styles.navText}>Donasi</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.navIcon}>🧾</Text>
          <Text style={styles.navText}>Riwayat</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const data = [
  {
    title: "Banjir",
    location: "Kalianda, Lampung",
    image: require("../../assets/images/banjir.jpg"),
  },
  {
    title: "Tanah Longsor",
    location: "Kalianda, Lampung",
    image: require("../../assets/images/longsor.jpeg"),
  },
  {
    title: "Tsunami",
    location: "Lampung Selatan",
    image: require("../../assets/images/tsunami.jpg"),
  },
  {
    title: "Palestina",
    location: "Indonesia",
    image: require("../../assets/images/palestina.jpg"),
  },
];


// ================= CSS =================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },

  header: {
    height: 280,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
  },

  bgImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  smallText: {
    color: "#fff",
    fontSize: 12,
  },

  nameText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },

  menuText: {
    color: "#fff",
  },

  slide: {
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 140,
    height: 140,
    resizeMode: "contain",
  },

  content: {
    paddingHorizontal: 16,
    marginTop: -40,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  subtitle: {
    color: "gray",
  },

  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    height: 140,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 12,
  },

  cardImage: {
    width: "100%",
    height: "100%",
  },

  cardOverlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 8,
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  cardTitle: {
    color: "#fff",
    fontWeight: "bold",
  },

  cardLocation: {
    color: "#fff",
    fontSize: 12,
  },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },

  activeNav: {
    fontSize: 18,
    textAlign: "center",
  },

  activeNavText: {
    color: "maroon",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },

  navIcon: {
    fontSize: 18,
    textAlign: "center",
  },

  navText: {
    fontSize: 12,
    textAlign: "center",
    color: "gray",
  },
});