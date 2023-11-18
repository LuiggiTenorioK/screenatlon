import {Text, Button, HStack, Heading, Stack, Box, ScrollView, Center} from 'native-base';
import {View} from 'react-native';
import Participants from "../components/Participants"

export default function CreateCompetitionAddParticipants({navigation}) {
  return (
    <ScrollView w="100%" h="100%">
      <Center>
      <Participants/>
        
      </Center>
    </ScrollView>
  );
}
