import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const EditProfile = () => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        const email = SecureStore.getItemAsync('userEmail');
        axios.post('http://192.168.1.4:3000/users/user', {
            email
        })
            .then(response => {
                const userData = response.data;
                setImage(userData.image);
            })
            .catch(error => {
                console.error('Error fetching user profile:', error);
            });
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 100}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View>
                        <View className=" justify-center items-center ">
                            <Image
                                source={image ? { uri: image } : require("../../assets/images/User.jpg")}
                                style={{ height: 150, width: 150, borderRadius: 100 }}
                            />
                            <TouchableOpacity className="absolute top-32 right-36 bg-[#353945] p-5 rounded-full" onPress={pickImage}>
                                <Feather name="camera" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View className="gap-10 mx-5 mt-20">
                            <View className="flex-row gap-5">
                                <View className="w-1/2">
                                    <Text className="text-xl mb-2 text-gray-500">
                                        FirstName
                                    </Text>
                                    <TextInput className="border-b border-gray-300 text-2xl" />
                                </View>

                                <View className="w-44">
                                    <Text className="text-xl mb-2 text-gray-500">
                                        Last Name
                                    </Text>
                                    <TextInput className="border-b border-gray-300 text-2xl" />
                                </View>
                            </View>
                            <View>
                                <Text className="text-xl mb-2 text-gray-500">
                                    Email
                                </Text>
                                <TextInput className="border-b border-gray-300 text-2xl" />
                            </View>

                            <View className="flex-row gap-5">

                                <View className="w-44">
                                    <Text className="text-xl mb-2 text-gray-500">
                                        Gender
                                    </Text>
                                    <TextInput className="border-b border-gray-300 text-2xl" />
                                </View>
                                <View className="w-1/2">
                                    <Text className="text-xl mb-2 text-gray-500">
                                        Phone
                                    </Text>
                                    <TextInput className="border-gray-300 border-b text-2xl" />
                                </View>
                            </View>
                        </View>
                        <View className="mt-20 items-center">
                            <TouchableOpacity className="bg-[#343434] px-20 py-5 rounded-full">
                                <Text className="text-white text-xl">Save Changes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 8,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});
export default EditProfile