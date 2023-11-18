import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CompetitionScreen from '../screens/CompetitionScreen';
import Icon from 'react-native-vector-icons/FontAwesome6';
import CreateCompetitionScreen from '../screens/CreateCompetitionScreen';

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
      <Tab.Screen name="Home" component={HomeScreen} options={{
        title: "Challenges",
        tabBarIcon: ({color, size}) => {
          return <Icon name='trophy' color={color} size={size}/>
        }
      }}/>
      <Tab.Screen name="Leaderboards" component={CompetitionScreen} options={{
        title: "Leaderboards",
        tabBarIcon: ({color, size}) => {
          return <Icon name='award' color={color} size={size}/>
        }
      }}/>
      <Tab.Screen name="Profile" component={CreateCompetitionScreen} options={{
        title: "Profile",
        tabBarIcon: ({color, size}) => {
          return <Icon name='user' solid color={color} size={size}/>
        }
      }}/>
    </Tab.Navigator>
  );
}