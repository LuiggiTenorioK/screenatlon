import React from "react";
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input, ScrollView, Text, View, FormControl, Box, Center, Select, SelectItem, HStack, VStack, Button } from "native-base";


export default function Multiplier({ title }) {
    let [multiply, setMultiply] = React.useState('key0');
    return (
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