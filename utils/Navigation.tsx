import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, SplashScreen} from '../screens';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            title: 'Splash Screen',
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'HomeScreen',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
