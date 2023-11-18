import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider, VStack } from "native-base";

const Competition = ({navigation}) => {
    return <Box alignItems="center">
        <Box width="90%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
        }} _web={{
            shadow: 2,
            borderWidth: 0
        }} _light={{
            backgroundColor: "gray.50"
        }}>
            <HStack alignItems="center" space={4} justifyContent="space-between">
                <HStack alignItems="center">
                    <Stack space={2}>
                        <Image source={require('../imgs/badges/3rd-badge.png')} alt="Alternate Text" size="md" />
                    </Stack>
                    <VStack p="4" space={3}>
                        <Stack space={2}>
                            <Heading size="md" ml="-1">
                                Family
                            </Heading>
                        </Stack>
                        <Text fontWeight="400">
                            4 competitors
                        </Text>
                        <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }} fontWeight="400">
                            Time left: 4 days
                        </Text>
                    </VStack>
                </HStack>
            </HStack>
        </Box>
    </Box>;
};

    export default Competition;
    