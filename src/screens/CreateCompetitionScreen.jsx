import { StyleSheet } from 'react-native';
import { Container, Input, ScrollView, Text, View, FormControl, Box, Button } from "native-base";

export default function CreateCompetitionScreen() {
    return (
        <ScrollView height="100%" width="100%" padding="5%">
            <Box w="100%">
                <FormControl mb="5">
                    <Input size="xl" placeholder='Group Name' />
                </FormControl>
            </Box>
            <Box mb="5">
                <Text fontSize="xl" bold>
                    Rules
                </Text>
                <View style={styles.sectionContainer}></View>
                <Button size="lg">+ Add rule</Button>
            </Box>
            <Box style={styles.screenContainer}>
                <Text fontSize="xl" bold>
                    Participants
                </Text>
                <View style={styles.sectionContainer}></View>
                <Button size="lg">+ Add participants</Button>

                <Box>Or share this link <Box>https://...</Box></Box>
            </Box>
        </ScrollView>

    )
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