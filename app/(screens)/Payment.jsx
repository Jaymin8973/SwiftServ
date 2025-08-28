import axios from 'axios';
import { Image, ImageBackground } from 'expo-image';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Payment = () => {
     const [cardNumber, setCardNumber] = useState('');
     const [cardData, setCardData] = useState({});
    const router = useRouter();
    const cardLogos = {
        Visa: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
        MasterCard: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
        'American Express': 'https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg',
        Rupay: 'https://www.pngkey.com/png/full/129-1290304_file-rupay-logo-rupay-card.png',
    };

    useEffect(() => {
        

        fetchCards();
    }, []);
    const fetchCards = async () => {
            try {
                const Email = await SecureStore.getItemAsync('userEmail');
                const response = await axios.post('http://192.168.1.4:3000/payment-cards/getCard', { email: Email });
                console.log(response.data);
                setCardData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        console.log(cardData.cardHolderName)
    return (
        <SafeAreaView className="flex-1">
            <ScrollView contentContainerStyle={{ flexGrow: 1, marginHorizontal: 20 }}>
                <View>
                    <View className="flex-row justify-between items-center">
                        <Text className="text-2xl font-bold">Card Management</Text>
                        <Pressable className="" onPress={() => router.push('/Addnewcard')}>
                            <Text className="text-xl font-semibold text-red-600">Add New +</Text>
                        </Pressable>
                    </View>
                    <View className="">
                        <ImageBackground
                            source={require('../../assets/images/CardBackground.png')}
                            className="rounded-2xl "
                        >
                            <Image
                                source={{ uri: cardLogos['Visa'] }}
                                style={{ width: 80, height: 50, resizeMode: 'contain', position: 'absolute', top: 10, right: 10 }}
                            />
                            {cardData && (
                                
                            
                            <View className="h-60 justify-center rounded-2xl bg-[#09A3C5] -z-10 ">
                                <View className="flex-grow  items-center justify-end h-1/4">
                                    <Text className="text-white text-2xl" style={{ letterSpacing: 5 }}>
                                        {cardData.cardNumber ? cardData.cardNumber : '**** **** **** ****'}
                                    </Text>
                                </View>

                                <View className="p-5 flex-1 justify-end">
                                    <View className="flex-row justify-between items-center">
                                        <View>
                                            <Text className="text-white text-md font-bold">CARD HOLDER NAME</Text>
                                            <Text className="text-white text-lg">{cardData.cardHolderName ? cardData.cardHolderName : 'Name'}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            )}
                        </ImageBackground>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Payment