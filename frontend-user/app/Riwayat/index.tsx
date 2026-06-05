import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";

import Navbar from "../../components/Navbar";
import NavbarBottom from "../../components/BottomNavbar";

export default function RiwayatPage() {
  const [data, setData] = useState([
    {
      id: 1,
      nama: "Donasi Bencana Alam",
      lokasi: "Bandung",
      status: "Diproses",
      tanggal: "10 Juni 2026",
      donasi: "Rp 200.000",
      barang: "Pakaian layak & Obat-obatan",
    },
    {
      id: 2,
      nama: "Donasi Panti Asuhan",
      lokasi: "Jakarta",
      status: "Selesai",
      tanggal: "5 Juni 2026",
      donasi: "Rp 500.000",
      barang: "Makanan & Buku",
    },
  ]);

  const [selected, setSelected] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openDetail = (item: any) => {
    setSelected(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const clearHistory = () => {
    setData([]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      {/* HERO */}
      <View style={styles.hero}>
        <Image
          source={require("../../assets/images/bg.jpeg")}
          style={styles.bgImage}
        />

        <LinearGradient
          colors={["rgba(128,0,0,0.85)", "rgba(128,0,0,0.95)"]}
          style={styles.overlay}
        />

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

      {/* CONTENT */}
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Riwayat Donasi</Text>

          {data.length === 0 ? (
            <Text style={styles.empty}>
              Belum ada aktivitas donasi
            </Text>
          ) : (
            <>
              {data.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.card}
                  onPress={() => openDetail(item)}
                >
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
                </TouchableOpacity>
              ))}

              {/* BUTTON CLEAR */}
              <TouchableOpacity
                style={styles.clearBtn}
                onPress={clearHistory}
              >
                <Text style={styles.clearText}>Bersihkan Riwayat</Text>
              </TouchableOpacity>
            </>
          )}
        </ScrollView>
      </SafeAreaView>

      {/* 🔥 MODAL TIKET */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.ticket}>

            {/* HEADER */}
            <View style={styles.ticketHeader}>
              <Text style={styles.ticketTitle}>
                {selected?.nama}
              </Text>
            </View>

            {/* SOBEKAN */}
            <View style={styles.leftCircle} />
            <View style={styles.rightCircle} />

            {/* CONTENT */}
            {selected && (
              <View style={styles.ticketBody}>
                <Text style={styles.label}>Tanggal</Text>
                <Text style={styles.value}>📅 {selected.tanggal}</Text>

                <Text style={styles.label}>Lokasi</Text>
                <Text style={styles.value}>📍 {selected.lokasi}</Text>

                <Text style={styles.label}>Donasi</Text>
                <Text style={styles.value}>💰 {selected.donasi}</Text>

                <Text style={styles.label}>Barang</Text>
                <Text style={styles.value}>📦 {selected.barang}</Text>

                <TouchableOpacity
                  style={styles.closeBtn}
                  onPress={closeModal}
                >
                  <Text style={styles.closeText}>Tutup</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>

      <NavbarBottom active="riwayat" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },

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
    marginBottom: 10,
  },

  empty: {
    textAlign: "center",
    marginTop: 50,
    color: "#888",
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

  process: { color: "#FFA500" },
  done: { color: "green" },

  clearBtn: {
    marginTop: 10,
    backgroundColor: "#800000",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  clearText: {
    color: "#fff",
    fontWeight: "bold",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  /* 🔥 TICKET STYLE */
  ticket: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
  },

  ticketHeader: {
    backgroundColor: "#800000",
    padding: 15,
    alignItems: "center",
  },

  ticketTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  ticketBody: {
    padding: 20,
  },

  label: {
    fontSize: 12,
    color: "#888",
    marginTop: 10,
  },

  value: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 2,
  },

  leftCircle: {
    position: "absolute",
    left: -10,
    top: "45%",
    width: 20,
    height: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },

  rightCircle: {
    position: "absolute",
    right: -10,
    top: "45%",
    width: 20,
    height: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },

  closeBtn: {
    marginTop: 20,
    backgroundColor: "#800000",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  closeText: {
    color: "#fff",
    fontWeight: "bold",
  },
});