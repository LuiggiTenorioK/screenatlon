import { createStackNavigator } from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';

const Stack = createStackNavigator()

export default function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Main" component={MainTabNavigator} />
    </Stack.Navigator>
  )
}