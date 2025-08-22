import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Notification = () => {
      const navigation = useNavigation();
  return (
    <ScrollView>
        <SafeAreaView>
            <View className="flex-row  mx-12 items-center mt-5">
             <Pressable className=" rounded-full p-2 " onPress={()=>navigation.goBack()}>
                <AntDesign name="left" size={30} color="black" />
             </Pressable>
            <Text className="text-2xl  font-bold">Notification</Text>
          <Text/>
            </View>
        </SafeAreaView>
    </ScrollView>
  )
}

export default Notification