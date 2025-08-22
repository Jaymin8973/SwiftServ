import { AntDesign, Entypo, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <ScrollView>
    <SafeAreaView>
      <View className="mx-7 gap-5">
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
            onPress={() => Navigation.getParent()?.openDrawer()}
          >
            <AntDesign name="setting" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="rounded-2xl border border-gray-300  px-4">
          <View className="flex-row mt-10 items-center justify-between border-b border-gray-300 pb-3 ">
            <View className="flex-row gap-3 items-center">
              <Entypo name="location-pin" size={24} color="black" />
              <Link href={""}>
                <Text className="text-2xl">Address</Text>
              </Link>
            </View>
            <View>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
          <View className="flex-row  mt-10 items-center justify-between border-b border-gray-300 pb-3">
            <View className="flex-row gap-3 items-center">
              <Ionicons name="wallet" size={24} color="black" />
              <Link href={""}>
                <Text className="text-2xl">Payment method</Text>
              </Link>
            </View>
            <View>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
          <View className="flex-row  mt-10 items-center justify-between border-b border-gray-300 pb-3">
            <View className="flex-row gap-3 items-center">
              <AntDesign name="gift" size={24} color="black" />
              <Link href={""}>
                <Text className="text-2xl">Voucher</Text>
              </Link>
            </View>
            <View>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
          <View className="flex-row  mt-10 items-center justify-between border-b border-gray-300 pb-3">
            <View className="flex-row gap-3 items-center">
              <Octicons name="heart-fill" size={24} color="black" />
              <Link href={""}>
                <Text className="text-2xl">My Wishlist</Text>
              </Link>
            </View>
            <View>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
          <View className="flex-row  mt-10 items-center justify-between border-b border-gray-300 pb-3">
            <View className="flex-row gap-3 items-center">
              <Octicons name="star-fill" size={24} color="black" />
              <Link href={""}>
                <Text className="text-2xl">Rate this app</Text>
              </Link>
            </View>
            <View>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
          <View className="flex-row  mt-10 items-center justify-between border-b border-gray-300 pb-3">
            <View className="flex-row gap-3 items-center">
              <MaterialIcons name="logout" size={24} color="black" />
              <Link href={""}>
                <Text className="text-2xl">Log out</Text>
              </Link>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
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