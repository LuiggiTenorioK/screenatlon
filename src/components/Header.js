import { Heading, Image, Flex, Text } from 'native-base';


const Header = () => {
    return (
        <>
            <Flex direction="row" justifyContent="space-between" alignItems={"center"}>
                <Heading mt={5} mb={5} ml={4} >Hello Luis! </Heading>
                <Flex direction="row" mt={5}  mb={5} alignItems={"center"}>
                    <Image ml={1} mr={2} width={6} mt={1} height={6} source={require("../imgs/points/points.png")} />
                    <Text bold mr={3} mt={1} color="#1AACFF">5043</Text>
                    <Image width={10} height={10} mr={5} rounded={"full"} source={require("../imgs/people/Luchito.jpg")} />
                </Flex>
            </Flex>
        </>
    );
};

export default Header;