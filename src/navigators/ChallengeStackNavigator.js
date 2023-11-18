import { createStackNavigator } from '@react-navigation/stack';
import CompetitionScreen from '../screens/CompetitionScreen';
import HomeScreen from '../screens/HomeScreen';
import CreateCompetitionScreen from '../screens/CreateCompetitionScreen';
import CreateCompetitionAddParticipants from '../screens/CreateCompetitionAddParticipants';


const Stack = createStackNavigator()

export default function ChallengeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{
    }}>
      <Stack.Screen name="Challenges" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Competition" component={CompetitionScreen} />
      <Stack.Screen name="Create Challenge" component={CreateCompetitionScreen} />
      <Stack.Screen name ="Add participants" component={CreateCompetitionAddParticipants}/>
    </Stack.Navigator>
  )
}