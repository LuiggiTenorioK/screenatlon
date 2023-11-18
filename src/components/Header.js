import {Heading,Image,Flex,Text} from 'native-base';


const Header = () => {
    return (
        <>
        <Flex direction="row" justifyContent="space-between">
        <Heading mt={5} mb={5} ml={4} >Hello Luis! </Heading>
        <Flex direction = "row" mt={5}>
        <Image ml={1} mr={2} width={6} mt={1} height ={6} source={require("../imgs/points/points.png")}/>
        <Text bold  mr={2} mt={1} color="#1AACFF">756</Text>
        <Image width={10} height={10} mr={2} source={require("../imgs/icon/Luis.png")}/>
        </Flex>
        </Flex>
        </>
            );};

    export default Header;