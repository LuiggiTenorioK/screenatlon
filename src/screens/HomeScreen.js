import { Text, Button, HStack, Heading, Stack, Box, Image, Center, ScrollView } from 'native-base';
import Competition from '../components/Competition';
import Competition2 from '../components/Competition2';
import CompetitionAdd from '../components/CompetitionAdd';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from "../components/Header"

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView bgColor="white" pt={6}>
      <Header />
      <Text fontSize="xl" mt={3} mb={1.5} ml={4}>Today</Text>
      <Center>
        <Image ml={3} source={require('../imgs/Charts/Stats.png')} />
      </Center>
      <HStack>
        <Stack>
          <Text fontSize="xl" mt={3} mb={1.5} ml={5}>Active challenges</Text>
        </Stack>
      </HStack>
      <TouchableOpacity onPress={() => navigation.navigate("Competition")}><Box mb={2}>< Competition2 /></Box></TouchableOpacity>
      <Competition />
      <TouchableOpacity onPress={() => navigation.navigate("Create Challenge")}><Center mt={3} mb={7}><CompetitionAdd /></Center></TouchableOpacity>
      <Center>
        <Image mb={10} source={require('../imgs/Charts/Info-card.png')} />
      </Center>
    </ScrollView>
  );
}
