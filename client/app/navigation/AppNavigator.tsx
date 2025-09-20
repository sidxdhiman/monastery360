import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

import ARScreen from '../screens/arScreen';
import EventsScreen from '../screens/EventScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import RumtekInfo from '../screens/RumtekInfo';
import SplashScreen from '../screens/SplashScreen';
import TourScreen from '../screens/TourScreen';
import TransportScreen from '../screens/TransportScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Tour" component={TourScreen} />
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="AR" component={ARScreen} />
      <Stack.Screen name="RumtekInfo" component={RumtekInfo} />
      <Stack.Screen name="Transport" component={TransportScreen} />
    </Stack.Navigator>
  );
}
