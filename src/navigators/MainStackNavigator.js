import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CompetitionScreen from '../screens/CompetitionScreen';
import MainTabNavigator from './MainTabNavigator';

const Stack = createStackNavigator()

export default function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="MainTab" component={MainTabNavigator} />
    </Stack.Navigator>
  )
}