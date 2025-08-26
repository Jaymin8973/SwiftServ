import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import data from '../../data.json';
const Home = () => {
  const categories = ["Women", "Men", "Accesories", "Beauty"]
  const icons = ["symbol-female", "symbol-male", "eyeglass", "wallet"]
  const Navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>
        <View>
          <View className="flex-row justify-around ">
            {categories.map((category, index) => (
              <View key={index} className="flex justify-center items-center">
                <View className="flex justify-center items-center rounded-full h-20 w-20 border border-[#3A2C27]">
                  <View className="bg-[#3A2C27] rounded-full justify-center items-center" style={{ height: 60, width: 60 }}>
                    <SimpleLineIcons name={icons[index].trim()} size={24} color="white" />
                  </View>
                </View>
                <Text className="text-center mt-2">{category}</Text>
              </View>
            ))}
          </View>
          <View className=" m-4 rounded-2xl" style={{ height: 220 }}>
            <Image
              source={require('../../assets/images/img_01.jpg')}
              style={{ height: 220, borderRadius: 15 }}
            />
          </View>

          <View className="flex-row  items-center px-5 mt-3 justify-between">
            <Text className="text-3xl font-bold">Feature Products</Text>
            <Pressable >
              <Text className="text-xl text-gray-500">Show all</Text>
            </Pressable>
          </View>
          <View className="mt-5 px-5 ">
            <FlatList
              data={data.feature_products}
              horizontal
              showsHorizontalScrollIndicator={false}
              className="overflow-visible"
              renderItem={({ item }) => (
                <View style={styles.productCard} className="m-4">
                  <Image source={{ uri: item.image }} style={styles.productImage} />
                  <Text>{item.name}</Text>
                  <Text>{item.price}</Text>
                </View>
              )}
            />
          </View>

        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  productCard: {

  },
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end', 
  },
  productImage: {
    width: 150,
    height: 220,
    borderRadius: 10,
  },
});