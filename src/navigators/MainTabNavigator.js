import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CompetitionScreen from '../screens/CompetitionScreen';
import Icon from 'react-native-vector-icons/FontAwesome6';
import ChallengeStackNavigator from './ChallengeStackNavigator';
import RewardsStackNavigator from './RewardsStackNavigator';
import AICoachScreen from '../screens/AICoachScreen';
import AICoachStackNavigator from './AICoachStackNavigator';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#409FAA"
      },
      tabBarItemStyle: {
      },
      tabBarActiveTintColor: "#FFFFFF",
      tabBarInactiveTintColor: "#a7d6db"
    }}>
      <Tab.Screen name="Home" component={ChallengeStackNavigator} options={{
        title: "Home",
        tabBarIcon: ({color, size}) => {
          return <Icon name='trophy' color={color} size={size}/>
        }
      }}/>
      <Tab.Screen name="Rewards" component={RewardsStackNavigator} options={{
        title: "Rewards",
        tabBarIcon: ({color, size}) => {
          return <Icon name='gift' solid color={color} size={size}/>
        }
      }}/>
      <Tab.Screen name="AICoach" component={AICoachStackNavigator} options={{
        title: "AI Coach",
        tabBarIcon: ({color, size}) => {
          return <Icon name='brain' solid color={color} size={size}/>
        }
      }}/>
    </Tab.Navigator>
  );
}