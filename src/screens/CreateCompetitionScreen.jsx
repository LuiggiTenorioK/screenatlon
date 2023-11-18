import React from "react";
import { StyleSheet } from 'react-native';
import Participants from "../components/Participants"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input, ScrollView, Text, View, FormControl, Box, Center, Select, SelectItem, HStack, VStack, Button } from "native-base";
function Multiplier({title}){
    let [multiply, setMultiply] = React.useState('key0');
    return(
    <HStack alignItems="center" justifyContent="space-between">
    <Text >{title}</Text>
    <Select
        placeholder="Multiplier"
        selectedValue={multiply}
        width={120}
        onValueChange={(itemValue) => setMultiply(itemValue)}
    >
        <SelectItem label=" x 0.5  🥰 " value="key0-" />
        <SelectItem label=" x 1  😎 " value="key0" />
        <SelectItem label=" x 2  🙃 " value="key1" />
        <SelectItem label=" x 3  🤯 " value="key2" />
    </Select>
    </HStack>
    );
};
export default function CreateCompetitionScreen({navigation}) {

    return (
        <ScrollView height="100%" width="100%" padding="5%" bgColor="white">
            <Box w="100%">
                <FormControl mb="5">
                    <Input size="xl" placeholder='Group Name' />
                </FormControl>
            </Box>
            <Box mb={5}>
                <Text fontSize="xl" mb={5}bold>
                    Rules  	📃
                </Text>
                <Multiplier title="Entertainment"></Multiplier>
                <Multiplier title="Social Media"></Multiplier>
                <Multiplier title="Productivity"></Multiplier>
                <Multiplier title="Other"></Multiplier>

            </Box>
            <Box style={styles.screenContainer}>
                <Text fontSize="xl" bold mb={2}>
                    Participants  👥
                </Text>
                <View style={styles.sectionContainer}></View>
                <TouchableOpacity onPress={()=>navigation.navigate("Add participants")}><Center mt={3} mb={7}><Button bgColor="#1AACFF">Add your Friend!</Button></Center></TouchableOpacity> 

                <Box>Or share this link <Box>https://...</Box></Box>
                <Button bgColor="#1AACFF">Send!</Button>
            </Box>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        width: "100%"
    },
    sectionContainer: {
        height: 0,
        backgroundColor: "#dddddd"
    }
});
