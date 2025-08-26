import { AntDesign, Entypo, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  const router = useRouter();
  return (
    <SafeAreaView className= "flex-1">
        <ScrollView  contentContainerStyle={{ flexGrow: 1 , justifyContent: 'center' }}>
        <View className="mx-7 gap-5 ">
          <View style={styles.topContent} className=" flex-row justify-around">
            <Image
              source={require("../../assets/images/User.jpg")}
              style={styles.logo}
            />
            <View className="">
              <Text style={styles.username}>Sunie Pham</Text>
              <Text className="text-xl">suniuex@gmail.com</Text>
            </View>
            <TouchableOpacity
              onPress={() => (router.push("EditProfile"))}
            >
              <AntDesign name="setting" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View className="rounded-2xl border border-gray-300  px-4">
            <TouchableOpacity onPress={() => (router.replace("/(Authentication)"))}>
              <View className="flex-row mt-10 items-center justify-between border-b border-gray-300 pb-3 ">
                <View className="flex-row gap-3 items-center">
                  <Entypo name="location-pin" size={24} color="black" />
                  <Text className="text-2xl">Address</Text>
                </View>
                <View>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => (router.replace("/(Authentication)"))}>
              <View className="flex-row  mt-10 items-center justify-between border-b border-gray-300 pb-3">
                <View className="flex-row gap-3 items-center">
                  <Ionicons name="wallet" size={24} color="black" />

                  <Text className="text-2xl">Payment method</Text>

                </View>
                <View>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => (router.replace("/(Authentication)"))}>
              <View className="flex-row  mt-10 items-center justify-between border-b border-gray-300 pb-3">
                <View className="flex-row gap-3 items-center">
                  <AntDesign name="gift" size={24} color="black" />

                  <Text className="text-2xl">Voucher</Text>

                </View>
                <View>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => (router.replace("/(Authentication)"))}>
              <View className="flex-row  mt-10 items-center justify-between border-b border-gray-300 pb-3">
                <View className="flex-row gap-3 items-center">
                  <Octicons name="heart-fill" size={24} color="black" />

                  <Text className="text-2xl">My Wishlist</Text>

                </View>
                <View>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => (router.replace("/(Authentication)"))}>
              <View className="flex-row  mt-10 items-center justify-between border-b border-gray-300 pb-3">
                <View className="flex-row gap-3 items-center">
                  <Octicons name="star-fill" size={24} color="black" />
                  <Text className="text-2xl">Rate this app</Text>
                </View>
                <View>
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => (router.replace("/(Authentication)"))}>
              <View className="flex-row  mt-10 items-center justify-between border-b border-gray-300 pb-3">
                <View className="flex-row gap-3 items-center">
                  <MaterialIcons name="logout" size={24} color="black" />
                  <Text className="text-2xl">Log out</Text>
                </View>

              </View>
            </TouchableOpacity>
          </View>
        </View>
    </ScrollView>
      </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  topContent: {
    marginTop: 40,
    marginBottom: 10,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 40,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Profile