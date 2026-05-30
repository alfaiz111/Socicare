import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

import Navbar from "../../components/Navbar";

export default function LaporPage() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      {/* 🔥 HERO (SAMA SEPERTI LANDING) */}
      <View style={styles.hero}>
        <Image
          source={require("../../assets/images/bg.jpeg")}
          style={styles.bgImage}
        />

        <LinearGradient
          colors={["rgba(128,0,0,0.85)", "rgba(128,0,0,0.95)"]}
          style={styles.overlay}
        />

        <View style={styles.navWrapper}>
          <Navbar name="Lapor" />
        </View>

        <View style={styles.heroTextWrapper}>
          <Text style={styles.heroTitle}>Form Laporan</Text>
        </View>
      </View>

      {/* 🔥 FORM */}
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.content}>
          
          {/* DATA DIRI */}
          <Text style={styles.sectionTitle}>Data Diri</Text>

          <TextInput placeholder="Nama Lengkap" style={styles.input} />
          <TextInput placeholder="Usia" style={styles.input} />
          <TextInput placeholder="Asal Daerah" style={styles.input} />

          {/* DETAIL LAPORAN */}
          <Text style={styles.sectionTitle}>Detail Laporan</Text>

          <TextInput placeholder="Nama Donasi" style={styles.input} />
          <TextInput placeholder="Lokasi" style={styles.input} />
          
          <TextInput
            placeholder="Deskripsi"
            multiline
            numberOfLines={4}
            style={[styles.input, { height: 100 }]}
          />

          {/* UPLOAD */}
          <TouchableOpacity style={styles.uploadBox}>
            <Text style={styles.uploadText}>Upload Foto Bukti</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.uploadBox}>
            <Text style={styles.uploadText}>Upload KTP</Text>
          </TouchableOpacity>

          {/* BUTTON */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.buttonText}>Laporkan</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>

      {/* 🔥 MODAL POPUP */}
      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>
              Laporan anda sedang diperiksa
            </Text>

            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: "#fff" }}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  hero: {
    height: 200,
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
    top: 0,
    left: 0,
    right: 0,
  },

  heroTextWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  heroTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  content: {
    padding: 16,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },

  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  uploadBox: {
    backgroundColor: "#ddd",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },

  uploadText: {
    color: "#555",
  },

  button: {
    backgroundColor: "#800000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    width: "80%",
    alignItems: "center",
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  closeBtn: {
    backgroundColor: "#800000",
    padding: 10,
    borderRadius: 8,
  },
});