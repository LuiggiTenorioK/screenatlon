import React from 'react';
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

function Footer() {
  const [selected, setSelected] = React.useState(1);
  return <NativeBaseProvider>
        <Box flex={1} bg="white" safeAreaTop width="100%" maxW="300px" alignSelf="center">
            <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
                <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
                    <Center>
                        {/* <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="sm" /> */}
                        <Text color="white" fontSize="12">
                            Leaderboard
                        </Text>
                    </Center>
                </Pressable>
                <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
                    <Center>
                        {/* <Icon mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" /> */}
                        <Text color="white" fontSize="12">
                            AI Coach
                        </Text>
                    </Center>
                </Pressable>
            </HStack>
        </Box>
    </NativeBaseProvider>;
}

export default Footer;