import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";
import CardBencana from "./components/CardBencana";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        
        {/* Background */}
        <Image
          source={require("./assets/sosial.png")}
          style={styles.backgroundImage}
        />

        {/* Overlay Maroon */}
        <LinearGradient
          colors={["rgba(128,0,0,0.8)", "rgba(128,0,0,0.9)"]}
          style={styles.overlay}
        />

        {/* Top Text */}
        <View style={styles.topBar}>
          <View>
            <Text style={styles.smallText}>Hi, Selamat Datang</Text>
            <Text style={styles.nameText}>m. arif alfa'iz</Text>
          </View>

          <Text style={styles.menuText}>ID ☰</Text>
        </View>

        {/* SLIDER */}
        <Swiper autoplay height={200}>
          <View style={styles.slide}>
            <Image source={require("./assets/SOSMAS.png")} style={styles.logo} />
          </View>

          <View style={styles.slide}>
            <Image source={require("./assets/SOSMAS.png")} style={styles.logo} />
          </View>

          <View style={styles.slide}>
            <Image source={require("./assets/SOSMAS.png")} style={styles.logo} />
          </View>
        </Swiper>
      </View>

      {/* CONTENT */}
      <ScrollView style={styles.content}>

        <View style={styles.sectionHeader}>
          <Text style={styles.title}>Daftar Bantuan</Text>
          <Text style={styles.subtitle}>4 Location</Text>
        </View>

        <View style={styles.cardContainer}>
          <CardBencana
            title="Banjir"
            location="Kalianda, Lampung"
            image={require("./assets/sosial.png")}
          />
          <CardBencana
            title="Tanah Longsor"
            location="Kalianda, Lampung"
            image={require("./assets/sosial.png")}
          />
          <CardBencana
            title="Kekeringan"
            location="Lampung Selatan"
            image={require("./assets/sosial.png")}
          />
          <CardBencana
            title="Konflik"
            location="Indonesia"
            image={require("./assets/sosial.png")}
          />
        </View>
      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.activeNav}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Donasi</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Riwayat</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },

  header: {
    height: 280,
    position: "relative",
  },

  backgroundImage: {
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
    color: "white",
    fontSize: 12,
  },

  nameText: {
    color: "white",
    fontWeight: "bold",
  },

  menuText: {
    color: "white",
  },

  slide: {
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 130,
    height: 130,
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

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },

  activeNav: {
    color: "maroon",
    fontWeight: "bold",
  },
});