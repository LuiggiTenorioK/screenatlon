import { createStackNavigator } from '@react-navigation/stack';
import CompetitionScreen from '../screens/CompetitionScreen';
import HomeScreen from '../screens/HomeScreen';
import RewardsScreen from '../screens/RewardsScreen';
import AICoachScreen from '../screens/AICoachScreen';
import { Image } from 'native-base';


const Stack = createStackNavigator()

export default function AICoachStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerShadowVisible: false
    }}>
      <Stack.Screen name="RewardsHome" component={AICoachScreen} options={{
        title: "AI Coach",
        headerTitleAlign: "center",
        headerRight: () => <Image rounded={"full"} source={require("../imgs/people/Luchito.jpg")} height={10} width={10} mr={5}></Image>
      }}/>
    </Stack.Navigator>
  )
}