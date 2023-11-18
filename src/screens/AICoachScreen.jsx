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
                            <Icon name='plus' color="green" /> <Text bold>Balanced Productivity and Leisure:</Text> The equal use of productivity apps alongside entertainment and social media suggests a balanced approach between work/learning and leisure activities. This balance is crucial for maintaining overall well-being.
                        </Text>
                        {/* <Text>
                            <Icon name='plus' color="green" /> <Text bold>Non-Digital Morning Routine:</Text> The absence of app usage in the early morning might indicate a non-digital morning routine, which can be positive for mental health and focus.
                        </Text> */}
                        <Text>
                            <Icon name='circle' color="yellow" solid /> <Text bold>Moderate Morning Usage:</Text>  Moderate app usage in the morning, primarily on social media, suggests that you do not start your day with heavy digital consumption, which can be beneficial for setting a productive tone for the day.
                        </Text>
                        <Text>
                            <Icon name='minus' color="red" /> <Text bold>High Afternoon and Evening Usage:</Text>  The most active periods for app usage are in the afternoon and evening. This could indicate potential overuse or distraction during times that could otherwise be used for more productive or physically active pursuits.
                        </Text>
                        {/* <Text>
                            <Icon name='minus' color="red" /> <Text bold>Usage Before Sleep:</Text>  Consistent use of various apps before sleep might negatively impact sleep quality. Screen time right before bed can interfere with the body's natural sleep processes.

                        </Text> */}
                    </VStack>

                </Box>
                <Heading size={"xl"} mb={4}>Your weekly advice {"💡"}</Heading>

                <VStack space={3}>
                    <Box bgColor={"white"} rounded="lg" shadow={3} p={4}>
                        <Heading size={"sm"} mb={2}>Prioritize Productivity</Heading>
                        <Text>
                            Your data shows significant time spent on social media and entertainment apps. Consider allocating more time to productivity apps, especially during the morning when you're likely to be more focused and energized.
                        </Text>
                    </Box>

                    <Box bgColor={"white"} rounded="lg" shadow={3} p={4}>
                        <Heading size={"sm"} mb={2}>Limit Social Media and Entertainment</Heading>
                        <Text>
                            While these categories are essential for relaxation and staying connected, they can also be major time sinks. Set specific time limits for apps like Instagram, Facebook, and YouTube, particularly during periods of the day reserved for work or study.

                        </Text>
                    </Box>

                    <Box bgColor={"white"} rounded="lg" shadow={3} p={4}>
                        <Heading size={"sm"} mb={2}>Use Tools for Time Management</Heading>
                        <Text>
                            Consider using apps or features that track and limit your usage. Many smartphones now come with digital wellbeing tools that help you monitor and manage your time on different apps.

                        </Text>
                    </Box>
                </VStack>

            </Box>
        </ScrollView>
    )
}