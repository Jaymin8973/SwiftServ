import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons, Octicons, SimpleLineIcons } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image } from 'expo-image';
import { Tabs } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import AboutUs from '../(slidebar)/AboutUs';
import Setting from '../(slidebar)/Setting';
import Support from '../(slidebar)/Support';
import Cart from "./Cart";
import Profile from "./Profile";
import Discover from "./Search";
const _layout = () => {
  const Drawer = createDrawerNavigator();

  function CustomDrawerContent(props) {

    return (

      <DrawerContentScrollView {...props}>
        <View style={styles.topContent} className=" flex-row ">
          <Image
            source={require("../../assets/images/User.jpg")}
            style={styles.logo}
          />
          <View className="ms-5">
            <Text style={styles.username}>Sunie Pham</Text>
            <Text className="text-xl">suniuex@gmail.com</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }

  function TabNavigator() {
    return (
      <Tabs screenOptions={{ headerShown: false ,  tabBarActiveBackgroundColor: 'trasperent',
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'lightgray',}}>
        <Tabs.Screen
          name="index"
          options={{
            title: '',
            tabBarIcon: ({ color, size }) => (
             <Octicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Search"
          options={{
            title: "",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="search" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Cart"
          options={{
            title: "",
            tabBarIcon: ({ color, size }) => (
              <SimpleLineIcons name="handbag" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: "",
            tabBarIcon: ({ color, size }) => (
              <Feather name="user" size={24} color={color} />
            ),
          }}
        />

      </Tabs>
    );
  }

  return (

    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          overflow: 'hidden',
        },
        drawerActiveBackgroundColor: 'trasperent',
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: 'gray',
      }}
    >
      <Drawer.Screen name="Homepage" component={TabNavigator}
        options={{
          headerShown: false,
          drawerLabel: ({ focused, color }) => (
            <Text style={{ fontSize: 20, color: color, fontWeight: 'bold' }}>
              Homepage
            </Text>
          ),
          drawerIcon: ({ color, size, focused }) => (
            <Octicons name="home" size={24} color={focused ? "black" : "gray"} />
          ),
        }} />

         <Drawer.Screen name="Discover" component={Discover}
        options={{
          headerShown: false,
          drawerLabel: ({ focused, color }) => (
            <Text style={{ fontSize: 20, color: color, fontWeight:'bold'  }}>
              Discover
            </Text>
          ),
          drawerIcon: ({ color, size, focused }) => (
            <SimpleLineIcons name="magnifier" size={24} color={focused ? "black" : "gray"} />
          ),
        }} />
          <Drawer.Screen name="Cart" component={Cart}
        options={{
          headerShown: false,
          drawerLabel: ({ focused, color }) => (
            <Text style={{ fontSize: 20, color: color, fontWeight:'bold'  }}>
              My Orders
            </Text>
          ),
          drawerIcon: ({ color, size, focused }) => (
            <SimpleLineIcons name="handbag" size={24} color={focused ? "black" : "gray"} />
          ),
        }} />

          <Drawer.Screen name="Profile" component={Profile}
        options={{
          headerShown: false,
          drawerLabel: ({ focused, color }) => (
            <Text style={{ fontSize: 20, color: color, fontWeight:'bold'  }}>
              My Profile
            </Text>
          ),
          drawerIcon: ({ color, size, focused }) => (
            <Feather name="user" size={24} color={focused ? "black" : "gray"} />
          ),
        }} />
         <Drawer.Screen name="Setting" component={Setting}
        options={{
          headerShown: false,
          drawerLabel: ({ focused, color }) => (
            <Text style={{ fontSize: 20, color: color, fontWeight:'bold'  }}>
              Setting
            </Text>
          ),
          drawerIcon: ({ color, size, focused }) => (
            <AntDesign name="setting" size={24} color={focused ? "black" : "gray"} />
          ),
        }} />
          <Drawer.Screen name="Support" component={Support}
        options={{
          headerShown: false,
          drawerLabel: ({ focused, color }) => (
            <Text style={{ fontSize: 20, color: color, fontWeight:'bold'  }}>
              Support
            </Text>
          ),
          drawerIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="email-outline" size={24} color={focused ? "black" : "gray"} />
          ),
        }} />
          <Drawer.Screen name="AboutUs" component={AboutUs}
        options={{
          headerShown: false,
          drawerLabel: ({ focused, color }) => (
            <Text style={{ fontSize: 20, color: color, fontWeight:'bold'  }}>
              About us
            </Text>
          ),
          drawerIcon: ({ color, size, focused }) => (
            <Feather name="alert-circle" size={24} color={focused ? "black" : "gray"} />
          ),
        }} />

    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  topContent: {
    padding: 25,
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

export default _layout;
