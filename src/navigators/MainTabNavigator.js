import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CompetitionScreen from '../screens/CompetitionScreen';
import Icon from 'react-native-vector-icons/FontAwesome6';
import ChallengeStackNavigator from './ChallengeStackNavigator';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#394AAB"
      },
      tabBarItemStyle: {
      },
      tabBarActiveTintColor: "#FFFFFF"
    }}>
      <Tab.Screen name="Home" component={ChallengeStackNavigator} options={{
        title: "Home",
        tabBarIcon: ({color, size}) => {
          return <Icon name='trophy' color={color} size={size}/>
        }
      }}/>
      <Tab.Screen name="PersonalGoals" component={CompetitionScreen} options={{
        title: "Personal Goals",
        tabBarIcon: ({color, size}) => {
          return <Icon name='award' color={color} size={size}/>
        }
      }}/>
      <Tab.Screen name="AICoach" component={CompetitionScreen} options={{
        title: "AI Coach",
        tabBarIcon: ({color, size}) => {
          return <Icon name='brain' solid color={color} size={size}/>
        }
      }}/>
    </Tab.Navigator>
  );
}