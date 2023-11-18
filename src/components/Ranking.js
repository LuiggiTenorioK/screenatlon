import React from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Stack,
  VStack,
} from 'native-base';
import rankingData from './RankingData'; 

const Ranking = () => {
  return (
    <Box alignItems="center">
      <Text underline alignItems="left">Social Heek Friends</Text>
      {rankingData.map(item => (
        <Box
          key={item.id}
          width="90%"
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
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
               <Stack space={2}>
                <Image
                  source={{ uri: item.badge }} 
                  alt="Alternate Text"
                  size="md"
                />
              </Stack> 
              <VStack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    {item.name}
                  </Heading>
                </Stack>
                <Text fontWeight="400">{item.time} Time</Text>
              </VStack>
            </HStack>
          </HStack>
        </Box>
      ))}
    </Box>
  );
};

export default Ranking;
