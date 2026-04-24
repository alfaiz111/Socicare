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
import { StatusBar } from "expo-status-bar"; // 🔥 TAMBAHAN
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import Navbar from "../../components/Navbar";
import NavbarBottom from "../../components/BottomNavbar";

export default function Landing() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 🔥 STATUS BAR TRANSPARAN */}
      <StatusBar style="light" translucent backgroundColor="transparent" />

      {/* 🔥 HERO FULL SAMPAI ATAS */}
      <View style={styles.hero}>
        <Image
          source={require("../../assets/images/bg.jpeg")}
          style={styles.bgImage}
        />

        <LinearGradient
          colors={["rgba(128,0,0,0.85)", "rgba(128,0,0,0.95)"]}
          style={styles.overlay}
        />

        {/* 🔥 NAVBAR DI ATAS HERO */}
        <View style={styles.navWrapper}>
          <Navbar name="M. Arif Alfaiz" />
        </View>

        {/* 🔥 SLIDER LOGO */}
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

      {/* 🔥 CONTENT AMAN (PAKAI SAFE AREA) */}
      <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
        <ScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.sectionHeader}>
            <Text style={styles.title}>Daftar Bantuan</Text>
            <Text style={styles.subtitle}>4 Lokasi</Text>
          </View>

          <View style={styles.cardContainer}>
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.card}
                onPress={() =>
                  router.push({
                    pathname: "../Donasi/page",
                    params: {
                      title: item.title,
                      location: item.location,
                      image: item.title,
                    },
                  })
                }
              >
                <Image source={item.image} style={styles.cardImage} />

                <View style={styles.cardOverlay}>
                  <Text style={styles.cardTitle}>{item.title}</Text>

                  <View style={styles.locationRow}>
                    <Ionicons
                      name="location-outline"
                      size={12}
                      color="#fff"
                    />
                    <Text style={styles.cardLocation}>
                      {item.location}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* 🔥 BOTTOM NAVBAR */}
      <NavbarBottom active="home" />
    </View>
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
    location: "Global",
    image: require("../../assets/images/palestina.jpg"),
  },
];

// 🎨 STYLE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  hero: {
    height: 260, // 🔥 FULL HEIGHT KE ATAS
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

  navWrapper: {
    position: "absolute",
    top: 0, // 🔥 biar turun dari status bar
    left: 0,
    right: 0,
    zIndex: 10,
  },

  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 55, // 🔥 kasih jarak ke bawah biar logo gak nempel
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  content: {
    paddingHorizontal: 16,
    marginTop: 10,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#888",
  },

  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    height: 150,
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 12,
    backgroundColor: "#fff",
  },

  cardImage: {
    width: "100%",
    height: "100%",
  },

  cardOverlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  cardTitle: {
    color: "#fff",
    fontWeight: "bold",
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  cardLocation: {
    color: "#fff",
    fontSize: 11,
  },
});