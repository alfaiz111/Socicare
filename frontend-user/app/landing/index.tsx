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
import { Ionicons, Feather } from "@expo/vector-icons";

export default function Landing() {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        
        <Image
          source={require("../../assets/images/bg.jpeg")}
          style={styles.bgImage}
        />

        <LinearGradient
          colors={["rgba(128,0,0,0.8)", "rgba(128,0,0,0.95)"]}
          style={styles.overlay}
        />

        {/* TOP NAVBAR */}
        <View style={styles.topBar}>
          <View>
            <Text style={styles.smallText}>Hi, Selamat Datang</Text>
            <Text style={styles.nameText}>M. Arif Alfaiz</Text>
          </View>

          <TouchableOpacity>
            <Feather name="menu" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* SLIDER */}
        <Swiper autoplay height={180} showsPagination>
          {[ 
            require("../../assets/images/SOSMAS.png"),
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
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        
        <View style={styles.sectionHeader}>
          <Text style={styles.title}>Daftar Bantuan</Text>
          <Text style={styles.subtitle}>4 Lokasi</Text>
        </View>

        <View style={styles.cardContainer}>
          {data.map((item, index) => (
            <TouchableOpacity key={index} style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />

              <View style={styles.cardOverlay}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View style={styles.locationRow}>
                  <Ionicons name="location-outline" size={12} color="#fff" />
                  <Text style={styles.cardLocation}>
                    {item.location}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* BOTTOM NAVBAR */}
      <View style={styles.navbar}>
        <NavItem icon="home" label="Home" active />
        <NavItem icon="gift" label="Donasi" />
        <NavItem icon="receipt" label="Riwayat" />
        <NavItem icon="user" label="Profile" />
      </View>

    </SafeAreaView>
  );
}

// 🔥 COMPONENT NAV ITEM
const NavItem = ({ icon, label, active = false }: any) => (
  <TouchableOpacity style={styles.navItem}>
    <Feather
      name={icon}
      size={20}
      color={active ? "#800000" : "#888"}
    />
    <Text style={[styles.navText, active && styles.activeText]}>
      {label}
    </Text>
  </TouchableOpacity>
);

// DATA
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


// ================= STYLE =================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  header: {
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

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 16,
    alignItems: "center",
  },

  smallText: {
    color: "#eee",
    fontSize: 12,
  },

  nameText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  slide: {
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },

  content: {
    paddingHorizontal: 16,
    marginTop: -30,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 62,
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

  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderTopWidth: 0.5,
    borderColor: "#ddd",
    elevation: 10,
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    fontSize: 11,
    color: "#888",
    marginTop: 2,
  },

  activeText: {
    color: "#800000",
    fontWeight: "600",
  },
});