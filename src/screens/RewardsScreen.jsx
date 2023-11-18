import { ScrollView, Box, Center, Text, Heading, Container, Divider, Image, HStack, View, Badge, VStack } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome6';

const PRIZES_HEADER_ROLL = [
    {
        name: "Free Coffee",
        description: "1 free coffee",
        img: "https://t4.ftcdn.net/jpg/01/16/61/93/360_F_116619399_YA611bKNOW35ffK0OiyuaOcjAgXgKBui.jpg",
        price: 2000
    },
    {
        name: "Stand up Paddle",
        description: "Experieriencia para 1 persona",
        img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/39/00/83.jpg",
        price: 6000
    },
    {
        name: "2 free coffees",
        description: "1 free coffee",
        img: "https://t4.ftcdn.net/jpg/01/16/61/93/360_F_116619399_YA611bKNOW35ffK0OiyuaOcjAgXgKBui.jpg",
        price: 3000
    }
]

const PRIZES_LIST = [
    {
        name: "Restaurante 7 Portes",
        description: "20 euros dicount",
        img: "https://runnerbeantours.com/wp-content/uploads/2019/10/paella-in-barcelona.jpg",
        price: 5000
    },
    {
        name: "Stand up Paddle",
        description: "Experieriencia para 1 persona",
        img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/39/00/83.jpg",
        price: 6000
    }
]


export default function RewardsScreen() {
    return (
        <ScrollView w={"100%"} bgColor={"white"}>
            <HStack justifyContent={"space-between"} bgColor={"#1AACFF"} p={6} mb={5}>
                <Box>
                    <Text fontSize={"lg"} color={"white"} bold>
                        <Icon name='gift' solid color={"white"} size={22} /> {" "} Reedem your points
                    </Text>
                </Box>
                <Text fontSize={"lg"} color={"white"} bold>
                    <Image
                        source={require("../imgs/points/points.png")}
                        alt="Alternate Text"
                        width={5}
                        height={5}
                    /> 5043
                </Text>
            </HStack>

            <Heading size={"md"} mx={4} mb={3}>Recommended for you</Heading>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} mb={5}>
                <HStack space={2} px={4}>
                    {
                        PRIZES_HEADER_ROLL.map(prize => {
                            return (
                                <Box key={prize.name} bgColor={"white"} rounded="lg" shadow={2} m={1}>
                                    <Box w="200" h="150" bgColor={"grey"} roundedTop={"lg"}>
                                        <Image roundedTop={"lg"}
                                            source={{ uri: prize.img }}
                                            alt="Alternate Text"
                                            width={"100%"}
                                            height={"100%"}
                                        />
                                    </Box>
                                    <Box w="200" px={4} py={3}>
                                        <Text bold fontSize={"md"}>{prize.name}</Text>
                                        <Badge mt={1} bgColor={"#d2e8ff"} rounded={"xl"}><Text><Image
                                            source={require("../imgs/points/points.png")}
                                            alt="Alternate Text"
                                            width={3}
                                            height={3}
                                        /> {prize.price}</Text></Badge>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </HStack>
            </ScrollView>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} mb={5}>
                <HStack space={1.5} px={4}>
                    <Badge colorScheme="1AACFF" variant={"solid"} rounded={"full"} px={5}><Text fontSize={"md"} color={"white"}>All</Text></Badge>
                    <Badge rounded={"full"} px={5}><Text fontSize={"md"}>Shopping</Text></Badge>
                    <Badge rounded={"full"} px={5}><Text fontSize={"md"}>Restaurants</Text></Badge>
                    <Badge rounded={"full"} px={5}><Text fontSize={"md"}>Charities</Text></Badge>
                </HStack>
            </ScrollView>


            <VStack space={3} px={4} mb={5}>
                {
                    PRIZES_LIST.map(prize => {
                        return (
                            <Box key={prize.name} bgColor={"white"} rounded="lg" shadow={2} m={1}>
                                <Box w="100%" h="200" bgColor={"grey"} roundedTop={"lg"}>
                                    <Image roundedTop={"lg"}
                                        source={{ uri: prize.img }}
                                        alt="Alternate Text"
                                        width={"100%"}
                                        height={"100%"}
                                    />
                                </Box>
                                <Box w="100%" px={4} py={3}>
                                    <Text bold fontSize={"md"}>{prize.name}</Text>
                                    <Text mt={1} color={"grey"}> {prize.description}</Text>
                                    <Badge mt={1} bgColor={"#d2e8ff"} rounded={"xl"}><Text><Image
                                        source={require("../imgs/points/points.png")}
                                        alt="Alternate Text"
                                        width={3}
                                        height={3}
                                    /> {prize.price}</Text></Badge>
                                </Box>
                            </Box>
                        )
                    })
                }
            </VStack>
        </ScrollView>
    )
}