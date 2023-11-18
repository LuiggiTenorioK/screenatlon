import React from 'react';
import { Box, Heading, Image, Text, HStack, Stack, VStack } from 'native-base';
import rankingData from './RankingData';

const Ranking = () => {
  return (
    <Box alignItems="center">
      <Heading mb={5} mt={5}  alignItems="left">Social Heek Friends</Heading>
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
          <HStack alignItems="center" space={5} justifyContent="space-between">
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
                <Text fontWeight="400">Time:{item.time}</Text>
              </VStack>
              <HStack p="4" space={3}>
                <Stack space={2}>
               
                  <Heading color="#1AACFF" size="md" > 
                  <Image
                  source={item.token} 
                  alt="Alternate Text"
                  width={3}
                  height={3}
                />
                    {" "+item.points}
                  </Heading>
                </Stack>
              </HStack>
            </HStack>
          </HStack>
        </Box>
      ))}
    </Box>
  );
};

export default Ranking;
