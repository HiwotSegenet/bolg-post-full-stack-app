import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login/Login";
import Admin from "./screens/Admin/Admin";
// import Register from "./screens/Register/Register";
import Profile from "./screens/Profile/Profile";
import Edit from "./screens/Edit/Edit";
import Blog from "./screens/Blog/Blog";
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 



import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Platform } from "react-native";
import Home from "./screens/Home/Home"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



export default function App() {
  const [userData, setUserData] = useState({});
  const [blogData, setBlogData] = useState([]);
  

  useEffect(() => {
    let UrlString = "localhost";

    if (Platform.OS == "android") {
      UrlString = "10.0.2.2";
    }

    AsyncStorage.getItem("token")
      .then((tokenRes) => {
       
        axios.get(`http://${UrlString}:5054/user`, {
          headers: { "x-auth-token": tokenRes },
        });
      })
      .then((userResponse) => setUserData(userResponse.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" options={{
                    tabBarIcon: ({size, color}) => (<MaterialCommunityIcons name={"login-variant"} color={"#4CAB72"} size={24} />)
                }} >
          {(props) => (
            <Login
              userData={userData}
              setUserData={setUserData}
              {...props}
            ></Login>
          )}
        </Stack.Screen>

        <Stack.Screen name="Home" options={{
                    tabBarIcon: () => (<Ionicons name={"md-home-sharp"} color={"#4CAB72"} size={24} />)
                }}>
          {(props) => <Home {...props}></Home>}
        </Stack.Screen>
        <Stack.Screen name="Admin" options={{
                    tabBarIcon: () => (<FontAwesome5 name={"blog"} color={"#4CAB72"} size={24} />)
                }}>
          {(props) => (
            <Admin
              setUserData={setUserData}
              userData={userData}
              setBlogData={setBlogData}
              blogData={blogData}
              {...props}
            ></Admin>
          )}
        </Stack.Screen>
        <Stack.Screen name="Profile" options={{
                    tabBarIcon: () => (<FontAwesome5 name={"user-cog"} color={"#4CAB72"} size={24} />)
                }} >
          {(props) => (
            <Profile
              setUserData={setUserData}
              userData={userData}
              setBlogData={setBlogData}
              blogData={blogData}
              {...props}
            ></Profile>
          )}
        </Stack.Screen>
        <Stack.Screen name="Edit" options={{ headerShown: false}}>
          {(props) => (
            <Edit
              setUserData={setUserData}
              userData={userData}
              setBlogData={setBlogData}
              blogData={blogData}
              {...props}
            ></Edit>
          )}
        </Stack.Screen>
        <Stack.Screen name="Blog" options={{ headerShown: false }}>
          {(props) => (
            <Blog
              setUserData={setUserData}
              userData={userData}
              setBlogData={setBlogData}
              blogData={blogData}
              {...props}
            ></Blog>
          )}
        </Stack.Screen>
      
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
