import { Text, View } from "react-native";
import Ranking from "../components/Ranking";
import Rules from "../components/Rules";
import { ScrollView } from "native-base";
export default function CompetitionScreen(){
    return (
        <ScrollView height="100%" bgColor={"white"}>
            <Ranking/>
            <Rules/>
        </ScrollView>
    )
}