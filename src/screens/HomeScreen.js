import { Button } from "native-base";
import { Text, View } from "react-native";


export default function HomeScreen({navigation}){
    return (
        <View>
            <Text>HOME</Text>
            <Button onPress={() => navigation.navigate('Settings')}>Go Settings</Button>
        </View>
    )
}