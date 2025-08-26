import axios from 'axios';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { useFormik } from 'formik';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';

const Login = () => {
  const router = useRouter();


  function decodeJwt(token) {
    try {
      const payload = token.split('.')[1]; // बीच वाला पार्ट (Payload)
      const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
      const decodedPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
      return JSON.parse(decodedPayload);
    } catch (e) {
      console.error('Invalid token', e);
      return null;
    }
  }

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password too short').required('Password is required'),
  });
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: ValidationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://192.168.1.4:3000/users/login', values);
        const token = response.data.token;
        console.log(token);
        await SecureStore.setItemAsync('userToken', token);
        await SecureStore.setItemAsync('userEmail', values.email);
        Toast.show({
          type: 'success',
          text1: 'Login Successful',
          text2: 'Welcome back!'
        });
        router.replace('(tabs)');
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message || "Server error");
        } else if (error.request) {
          alert("Network error, please try again");
        } else {
          console.log(error.message);
          alert(error.message);
        }
      }
    },
  });
  if (Platform.OS === 'ios') {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 1 : 0}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} keyboardShouldPersistTaps="handled" className="px-8">
            <View className="flex-1 mt-5 gap-10 justify-center">
              <View className="gap-2">
                <Text className="text-3xl font-bold">Log into</Text>
                <Text className="text-3xl font-bold">your account</Text>
              </View>
              <View className=" mt-5 gap-8">
                <View>
                  <TextInput
                    placeholder='Email address'
                    placeholderTextColor={"black"}
                    className="h-14 text-xl border-b border-gray-300"
                    onChangeText={formik.handleChange('email')}
                    value={formik.values.email}
                    onBlur={formik.handleBlur('email')}
                    keyboardType='email-address'
                  />
                  {formik.touched.email && formik.errors.email && <Text className="text-red-500 mt-1">{formik.errors.email}</Text>}
                </View>
                <View>
                  <TextInput
                    placeholder='Password'
                    placeholderTextColor={"black"}
                    className="h-14 text-xl border-b border-gray-300"
                    onChangeText={formik.handleChange('password')}
                    value={formik.values.password}
                    onBlur={formik.handleBlur('password')}
                    secureTextEntry
                  />
                  {formik.touched.password && formik.errors.password && <Text className="text-red-500 mt-1">{formik.errors.password}</Text>}
                </View>
                <TouchableOpacity className="items-end" onPress={() => router.push("ForgotPassword")}>
                  <Text className='text-gray-500' >Forgot Password? </Text>
                </TouchableOpacity>
              </View>
              <View className="items-center gap-10">
                <TouchableOpacity className="border w-40 rounded-full bg-[#2D201C] justify-center items-center" onPress={formik.handleSubmit}>
                  <Text className="text-white p-5 ">LOG IN</Text>
                </TouchableOpacity>
                <Text>
                  Or log in with
                </Text>
                <View className="  flex-row gap-3 justify-center items-center" style={{ height: 65 }}>
                  <Pressable className="border p-4 rounded-full  justify-center items-center">
                    <Image source={require("../../assets/images/apple-logo.png")} style={{ height: 30, width: 30 }} />
                  </Pressable>
                  <Pressable className="border rounded-full p-4 justify-center items-center">
                    <Image source={require("../../assets/images/google.png")} style={{ height: 30, width: 30 }} />
                  </Pressable>
                  <Pressable className="border rounded-full p-4 justify-center items-center">
                    <Image source={require("../../assets/images/facebook.png")} style={{ height: 30, width: 30 }} />
                  </Pressable>
                </View>
              </View>
              <View className="justify-center items-center mt-10">
                <View className="flex-row justify-center items-center"><Text>Don't have an account?</Text><TouchableOpacity className="ms-2 border-b" onPress={() => (router.push("Signup"))}><Text>Sign Up </Text></TouchableOpacity></View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
  else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          extraScrollHeight={20}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} keyboardShouldPersistTaps="handled" className="px-8">
            <View className="flex-1 mt-5 gap-10 justify-center">
              <View className="gap-2">
                <Text className="text-3xl font-bold">Log into</Text>
                <Text className="text-3xl font-bold">your account</Text>
              </View>
              <View className=" mt-5 gap-8">
                <View>
                  <TextInput
                    placeholder='Email address'
                    placeholderTextColor={"black"}
                    className="h-14 text-xl border-b border-gray-300"
                    onChangeText={formik.handleChange('email')}
                    value={formik.values.email}
                    onBlur={formik.handleBlur('email')}
                    keyboardType='email-address'
                  />
                  {formik.touched.email && formik.errors.email && <Text className="text-red-500 mt-1">{formik.errors.email}</Text>}
                </View>
                <View>
                  <TextInput
                    placeholder='Password'
                    placeholderTextColor={"black"}
                    className="h-14 text-xl border-b border-gray-300"
                    onChangeText={formik.handleChange('password')}
                    value={formik.values.password}
                    onBlur={formik.handleBlur('password')}
                    secureTextEntry
                  />
                  {formik.touched.password && formik.errors.password && <Text className="text-red-500 mt-1">{formik.errors.password}</Text>}
                </View>
                <TouchableOpacity className="items-end" onPress={() => router.push("ForgotPassword")}>
                  <Text className='text-gray-500' >Forgot Password? </Text>
                </TouchableOpacity>
              </View>
              <View className="items-center gap-10">
                <TouchableOpacity className="border w-40 rounded-full bg-[#2D201C] justify-center items-center" onPress={formik.handleSubmit}>
                  <Text className="text-white p-5 ">LOG IN</Text>
                </TouchableOpacity>
                <Text>
                  Or log in with
                </Text>
                <View className="  flex-row gap-3 justify-center items-center" style={{ height: 65 }}>
                  <Pressable className="border p-4 rounded-full  justify-center items-center">
                    <Image source={require("../../assets/images/apple-logo.png")} style={{ height: 30, width: 30 }} />
                  </Pressable>
                  <Pressable className="border rounded-full p-4 justify-center items-center">
                    <Image source={require("../../assets/images/google.png")} style={{ height: 30, width: 30 }} />
                  </Pressable>
                  <Pressable className="border rounded-full p-4 justify-center items-center">
                    <Image source={require("../../assets/images/facebook.png")} style={{ height: 30, width: 30 }} />
                  </Pressable>
                </View>
              </View>
              <View className="justify-center items-center mt-10">
                <View className="flex-row justify-center items-center"><Text>Don't have an account?</Text><TouchableOpacity className="ms-2 border-b" onPress={() => (router.push("Signup"))}><Text>Sign Up </Text></TouchableOpacity></View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    )
  }
}

export default Login