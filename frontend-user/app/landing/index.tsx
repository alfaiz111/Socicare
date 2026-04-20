import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";
import CardBencana from "../../components/CardBencana";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">

      {/* HEADER */}
      <View className="h-72 relative">
        
        {/* Background */}
        <Image
          source={require("./assets/sosial.png")}
          className="w-full h-full absolute"
          resizeMode="cover"
        />

        {/* Overlay Maroon */}
        <LinearGradient
          colors={["rgba(128,0,0,0.8)", "rgba(128,0,0,0.9)"]}
          className="absolute w-full h-full"
        />

        {/* Top Text */}
        <View className="flex-row justify-between items-center px-4 pt-4">
          <View>
            <Text className="text-white text-xs">Hi, Selamat Datang</Text>
            <Text className="text-white font-bold">m. arif alfa'iz</Text>
          </View>

          <Text className="text-white">ID ☰</Text>
        </View>

        {/* SLIDER LOGO */}
        <Swiper autoplay showsPagination={true} height={200}>
          <View className="justify-center items-center">
            <Image
              source={require("./assets/SOSMAS.png")}
              className="w-32 h-32"
              resizeMode="contain"
            />
          </View>

          <View className="justify-center items-center">
            <Image
              source={require("./assets/SOSMAS.png")}
              className="w-32 h-32"
              resizeMode="contain"
            />
          </View>

          <View className="justify-center items-center">
            <Image
              source={require("./assets/SOSMAS.png")}
              className="w-32 h-32"
              resizeMode="contain"
            />
          </View>
        </Swiper>
      </View>

      {/* CONTENT */}
      <ScrollView className="px-4 -mt-10">

        {/* Section Title */}
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-lg font-bold">Daftar Bantuan</Text>
          <Text className="text-gray-400">4 Location</Text>
        </View>

        {/* Cards */}
        <View className="flex-row flex-wrap justify-between">
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
      <View className="flex-row justify-around py-3 bg-white border-t">
        <TouchableOpacity>
          <Text className="text-red-800 font-bold">Home</Text>
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