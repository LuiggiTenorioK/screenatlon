import { Box, Heading, Image, Text, HStack, Stack, VStack } from 'native-base';
import rankingData from "../components/RankingData"

const Participants = () => {
  return (
    <>
      <HStack>
        <Box alignItems="center">
          <Heading mb={5} mt={5} alignItems="left">Add your friends</Heading>
          {rankingData.map(item => (
            <Box
              key={item.id}
              ml={1}
              width={350}
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: 'coolGray.600',
                backgroundColor: 'gray.700',
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: 'gray.50',
              }}
            >
              <HStack alignItems="center" space={5} py={3} justifyContent="space-between">
                <HStack alignItems="center">
                  <Stack space={2}>
                    <Image
                      source={item.badge}
                      alt="Alternate Text"
                      size="sm"
                      borderRadius={10}
                      ml={4}
                    />
                  </Stack>
                  <VStack p="4" space={3}>
                    <Stack space={2}>
                      <Heading size="md" ml="-1">
                        {item.name}
                      </Heading>
                    </Stack>
                    
                  </VStack>
                </HStack>
              </HStack>
            </Box>
          ))}
        </Box>
      </HStack>
    </>
  );
};
export default Participants;