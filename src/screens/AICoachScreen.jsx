import { ScrollView, Box, Center, Text, Heading, Container, Divider, Image, HStack, View, Badge, VStack } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome6';


export default function AICoachScreen() {
    return (
        <ScrollView w={"100%"} bgColor={"white"}>
            <HStack justifyContent={"space-between"} bgColor={"#1AACFF"} p={6} mb={5}>
                <Box>
                    <Text fontSize={"lg"} color={"white"} bold>
                        <Icon name='brain' solid color={"white"} size={22} /> {" "} Your personal coach
                    </Text>
                </Box>
                <Text fontSize={"lg"} color={"white"} bold>
                    <Icon name='circle-question' solid color={"white"} size={22} />
                </Text>
            </HStack>
            <Box mx={5} mb={5}>
                <Box bgColor={"white"} rounded="lg" shadow={3} p={4} mb={5}>
                    <Heading size={"md"} mb={2}>Summary</Heading>
                    <VStack space={0.5}>
                        <Text>
                            <Icon name='plus' color="green" /> Lorem ipsum
                        </Text>
                        <Text>
                            <Icon name='plus' color="green" /> Lorem ipsum
                        </Text>
                        <Text>
                            <Icon name='circle' color="yellow" solid /> Lorem ipsum
                        </Text>
                        <Text>
                            <Icon name='circle' color="yellow" solid /> Lorem ipsum
                        </Text>
                        <Text>
                            <Icon name='minus' color="red" /> Lorem ipsum
                        </Text>
                        <Text>
                            <Icon name='minus' color="red" /> Lorem ipsum
                        </Text>
                    </VStack>

                </Box>
                <Heading size={"xl"} mb={4}>Your weekly advice</Heading>

                <VStack space={3}>
                    <Box bgColor={"white"} rounded="lg" shadow={3} p={4}>
                        <Heading size={"sm"} mb={2}>Recommedation 1</Heading>
                        <Text>
                            Lorem ipsum
                        </Text>
                    </Box>

                    <Box bgColor={"white"} rounded="lg" shadow={3} p={4}>
                        <Heading size={"sm"} mb={2}>Recommedation 2</Heading>
                        <Text>
                            Lorem ipsum
                        </Text>
                    </Box>

                    <Box bgColor={"white"} rounded="lg" shadow={3} p={4}>
                        <Heading size={"sm"} mb={2}>Recommedation 3</Heading>
                        <Text>
                            Lorem ipsum
                        </Text>
                    </Box>
                </VStack>

            </Box>
        </ScrollView>
    )
}