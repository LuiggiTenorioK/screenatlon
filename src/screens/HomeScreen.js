import {Text, Button, HStack, Heading, Stack, Box} from 'native-base';
import {View} from 'react-native';
import Competition from '../components/Competition';
import Competition2 from '../components/Competition2';
import CompetitionAdd from '../components/CompetitionAdd';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import CompetitionScreen from './CompetitionScreen';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Grafico</Text>
      <HStack>
        <Stack>
          <Heading>Leaderboard</Heading>
        </Stack>
      </HStack>
      <TouchableOpacity onPress={()=>navigation.navigate("Competition")}><Competition  /></TouchableOpacity>      
      <Competition2 />
      <CompetitionAdd />
    </View>
  );
}
