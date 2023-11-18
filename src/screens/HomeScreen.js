import { Button, Heading } from "native-base";
import { Text, View } from "react-native";
import Competition from "../components/Competition";
import Competition2 from "../components/Competition2";


export default function HomeScreen({navigation}){
    return (
        <View>
            <Text>Grafico</Text>
            <Heading>Leaderboard</Heading>
            <Competition />
            <Competition2 />
            {/* <Button onPress={() => navigation.navigate('Competition')}>Go Settings</Button> */}
        </View>
    )
}