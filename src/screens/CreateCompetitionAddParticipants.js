import {Text, Button, HStack, Heading, Stack, Box} from 'native-base';
import {View} from 'react-native';
import Participants from "../components/Participants"

export default function CreateCompetitionAddParticipants({navigation}) {
  return (
    <View>
      <Participants/>
    </View>
  );
}
