import {Text, Button, HStack, Heading, Stack, Box} from 'native-base';
import {View} from 'react-native';
import Competition from '../components/Competition';
import Competition2 from '../components/Competition2';
import CompetitionScreen from './CompetitionScreen';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Grafico</Text>
      <HStack>
        <Stack>
          <Heading>Leaderboard</Heading>
        </Stack>
        <Stack>
          <Button>Upload</Button>
        </Stack>
      </HStack>
      <Competition />
      <Competition2 />
      <Button onPress={() => navigation.navigate('Settings')}>
        Go Settings
      </Button>
    </View>
  );
}
