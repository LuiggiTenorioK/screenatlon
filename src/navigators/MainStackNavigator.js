import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CompetitionScreen from '../screens/CompetitionScreen';

const Stack = createStackNavigator()

export default function MainStackNavigator() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Hola Luis!" component={HomeScreen} />
          <Stack.Screen name="Settings" component={CompetitionScreen} />
        </Stack.Navigator>
    )
}