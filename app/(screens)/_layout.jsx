import { AntDesign } from '@expo/vector-icons'
import { Stack } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

const _layout = () => {
  return (
   <Stack>
    <Stack.Screen name="Notification" options={({navigation})=>({
      headerLeft:()=>(
           <Pressable className=" rounded-full p-2 " onPress={()=>navigation.goBack()}>
                <AntDesign name="left" size={20} color="black" />
             </Pressable>
      ),
      headerTitle:()=>(
  <Text className="text-2xl  font-bold">Notification</Text>
      ),
       headerBackground: () => (
    <View style={{ flex: 1, backgroundColor: 'transparent' }} />
  ),
    })} />

     <Stack.Screen name='EditProfile'  options={({navigation})=>({
      headerLeft:()=>(
           <Pressable className=" rounded-full p-2 " onPress={()=>navigation.goBack()}>
                <AntDesign name="left" size={20} color="black" />
             </Pressable>
      ),
      headerTitle:()=>(
      <Text className="text-2xl font-bold">Profile Setting</Text>
      ),
       headerBackground: () => (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}  />
  ),
    })} />

     <Stack.Screen name='NotificationSetting'  options={({navigation})=>({
      headerLeft:()=>(
           <Pressable className=" rounded-full p-2 " onPress={()=>navigation.goBack()}>
                <AntDesign name="left" size={20} color="black" />
             </Pressable>
      ),
      headerTitle:()=>(
      <Text className="text-2xl font-bold">Notification</Text>
      ),
       headerBackground: () => (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}  />
  ),
    })} />

    <Stack.Screen name='Voucher'  options={({navigation})=>({
      headerLeft:()=>(
           <Pressable className=" rounded-full p-2 " onPress={()=>navigation.goBack()}>
                <AntDesign name="left" size={20} color="black" />
             </Pressable>
      ),
      headerTitle:()=>(
      <Text className="text-2xl font-bold">Voucher</Text>
      ),
       headerBackground: () => (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}  />
  ),
    })} />
  </Stack> 
  )
}

export default _layout