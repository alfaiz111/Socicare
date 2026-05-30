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
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";

import Navbar from "../../components/Navbar";
import NavbarBottom from "../../components/BottomNavbar";

export default function LaporPage() {
  const [modalVisible, setModalVisible] = useState(false);

  const [nama, setNama] = useState("");
  const [usia, setUsia] = useState("");
  const [asal, setAsal] = useState("");
  const [donasi, setDonasi] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const [bukti, setBukti] = useState("");
  const [ktp, setKtp] = useState("");

  // ✅ FIX (hapus TypeScript)
  const pickImage = async (setImage: { (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (arg0: string): void; }) => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Izin diperlukan", "Akses galeri dibutuhkan!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (
      !nama ||
      !usia ||
      !asal ||
      !donasi ||
      !lokasi ||
      !deskripsi ||
      !bukti ||
      !ktp
    ) {
      Alert.alert("Error", "Harap isi semua data dan upload semua foto!");
      return;
    }

    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      {/* ✅ NAVBAR (MODE TITLE) */}
      <View style={styles.navWrapper}>
        <Navbar title="Lapor" isTitle />
      </View>

      {/* 🔥 HERO */}
      <View style={styles.hero}>
        <Image
          source={require("../../assets/images/bg.jpeg")}
          style={styles.bgImage}
        />

        <LinearGradient
          colors={["rgba(128,0,0,0.85)", "rgba(128,0,0,0.95)"]}
          style={styles.overlay}
        />

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

      {/* 🔥 FORM */}
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.content}>
          {/* ✅ CARD HEADER */}
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Form Laporan</Text>
            <Text style={styles.cardSubtitle}>
              Silakan isi data dengan benar
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Data Diri</Text>

          <TextInput
            placeholder="Nama Lengkap"
            style={styles.input}
            value={nama}
            onChangeText={setNama}
          />

          <TextInput
            placeholder="Usia"
            style={styles.input}
            keyboardType="numeric"
            value={usia}
            onChangeText={setUsia}
          />

          <TextInput
            placeholder="Asal Daerah"
            style={styles.input}
            value={asal}
            onChangeText={setAsal}
          />

          <Text style={styles.sectionTitle}>Detail Laporan</Text>

          <TextInput
            placeholder="Nama Donasi"
            style={styles.input}
            value={donasi}
            onChangeText={setDonasi}
          />

          <TextInput
            placeholder="Lokasi"
            style={styles.input}
            value={lokasi}
            onChangeText={setLokasi}
          />

          <TextInput
            placeholder="Deskripsi"
            multiline
            style={[styles.input, { height: 100 }]}
            value={deskripsi}
            onChangeText={setDeskripsi}
          />

          {/* Upload Bukti */}
          <TouchableOpacity
            style={styles.uploadBox}
            onPress={() => pickImage(setBukti)}
          >
            {bukti ? (
              <Image source={{ uri: bukti }} style={styles.preview} />
            ) : (
              <Text style={styles.uploadText}>Upload Foto Bukti</Text>
            )}
          </TouchableOpacity>

          {/* Upload KTP */}
          <TouchableOpacity
            style={styles.uploadBox}
            onPress={() => pickImage(setKtp)}
          >
            {ktp ? (
              <Image source={{ uri: ktp }} style={styles.preview} />
            ) : (
              <Text style={styles.uploadText}>Upload KTP</Text>
            )}
          </TouchableOpacity>

          {/* BUTTON */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Laporkan</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>

      {/* ✅ BOTTOM NAVBAR */}
      <NavbarBottom />

      {/* MODAL */}
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

  navWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },

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

  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 60,
  },

  logo: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },

  content: {
    padding: 16,
    paddingBottom: 120,
  },

  cardHeader: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    marginTop: -10,
    marginBottom: 15,
  
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  cardSubtitle: {
    color: "#666",
    marginTop: 5,
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

  preview: {
    width: "100%",
    height: 120,
    borderRadius: 10,
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