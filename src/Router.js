import React, {useState, useEffect} from 'react';
import {Pressable, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import FlashMessage from 'react-native-flash-message';

import Register from './pages/auth/Register';
import Boarding from './pages/auth/Boarding';
import Login from './pages/auth/Login';
import ViewAll from './pages/ViewAll';
import Home from './pages/Home/Home';
import Profile from './pages/Profile';
import Feed from './pages/Feed';
import MyBooks from './pages/MyBooks';
import colors from './styles/colors';
import BookDetail from './pages/BookDetail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Boarding" component={Boarding} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    );
  };

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ViewAll" component={ViewAll} />
        <Stack.Screen name="BookDetail" component={BookDetail} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {user ? (
        <>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Tab.Screen
              options={{
                tabBarIcon: ({color}) => (
                  <Icon name="home" size={25} color={color} />
                ),
              }}
              name="Home"
              component={HomeStack}
            />
            <Tab.Screen
              options={{
                tabBarIcon: ({color}) => (
                  <Icon name="book" size={25} color={color} />
                ),
              }}
              name="My Books"
              component={MyBooks}
            />
            <Tab.Screen
              options={{
                tabBarIcon: ({color}) => (
                  <Icon name="hashtag" size={25} color={color} />
                ),
              }}
              name="Feed"
              component={Feed}
            />
            <Tab.Screen
              options={{
                tabBarIcon: ({color}) => (
                  <Icon name="user" size={25} color={color} />
                ),
              }}
              name="Profile"
              component={Profile}
            />
          </Tab.Navigator>
        </>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default App;
