import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
import { useRouter } from 'expo-router';
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import IpAddress from '../../Config.json';

const Address = () => {
    const [selected, setSelected] = useState(null);
    const router = useRouter();
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const API = axios.create({
        baseURL: `http://${IpAddress.IpAddress}:3000`,
    })

    const fetchData = async () => {
        try {
            const email = await SecureStore.getItemAsync('userEmail')
            const res = await API.post(`/address/get`, { email })
            setAddresses(res.data)

        }
        catch (error) {
            if (error.response) {
                alert(error.response.data.message || "Server error");
            } else if (error.request) {
                alert("Network error, please try again");
            } else {
                console.log(error.message);
                alert(error.message);
            }
        }

    }

    console.log(addresses)

    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="flex-grow  mx-5 my-10 " contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
                <View>
                    {addresses && addresses.map((address, index) => (
                        <View className="" key={index}>
                            <View className="border border-gray-300 rounded-2xl p-5 gap-4">
                                <View className="flex-row gap-5 " >
                                    <View className="justify-center">



                                        <Pressable
                                            key={address.value}
                                            className="mb-4"
                                            onPress={() => setSelected(address.value)}
                                        >
                                            <View
                                                className={`w-8 h-8 rounded-full border-2 ${selected === address.value ? 'border-black' : 'border-black'
                                                    } justify-center items-center`}
                                            >
                                                {selected === address.value && (
                                                    <View className="w-4 h-4 rounded-full bg-black" />
                                                )}
                                            </View>
                                        </Pressable>


                                    </View>
                                    <View>
                                        {address.addressType === "Work" ? (
                                            <FontAwesome5 name="building" size={40} color="black" />
                                        ) : address.addressType === "home" ? (
                                            <FontAwesome5 name="home" size={25} color="black" />
                                        ) : (
                                            <FontAwesome5 name="building" size={40} color="black" />
                                        )}
                                    </View>
                                    <View>
                                        <Text className="text-lg">SEND TO</Text>
                                        <Text className="text-lg">My {address.addressType}</Text>
                                    </View>
                                    <View className=" ms-auto">
                                        <Pressable onPress={() => router.push('AddressForm')}>
                                            <Text className="text-red-500 border-b border-red-500 text-lg">Edit</Text>
                                        </Pressable>
                                    </View>
                                </View>
                                <View >
                                    <Text className="text-center text-gray-500 text-lg">{address.street}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
                <View className="items-center mb-10">
                    <TouchableOpacity onPress={() => router.push('AddressForm')} className="bg-[#343434] py-5 px-10 rounded-full">
                        <Text className="text-white font-semibold">Add New Address</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Address