import {Text, Button, HStack, Heading, Stack, Box} from 'native-base';
import {View} from 'react-native';
import Competition from '../components/Competition';
import Competition2 from '../components/Competition2';
import CompetitionScreen from './CompetitionScreen';

export default function CreateCompetitionAddParticipants({navigation}) {
  return (
    <View>
      <Text>Grafico</Text>
      <HStack>
        <Stack>
          <Heading>Leaderboard</Heading>
        </Stack>
      </HStack>
      <Competition />
      <Competition2 />
    </View>
  );
}
