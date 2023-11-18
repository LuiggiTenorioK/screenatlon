import { createStackNavigator } from '@react-navigation/stack';
import CompetitionScreen from '../screens/CompetitionScreen';
import HomeScreen from '../screens/HomeScreen';


const Stack = createStackNavigator()

export default function ChallengeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{
    }}>
      <Stack.Screen name="Challenges" component={HomeScreen} />
      <Stack.Screen name="Competition" component={CompetitionScreen} />
    </Stack.Navigator>
  )
}