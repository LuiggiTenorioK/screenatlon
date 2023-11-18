import React, { useState } from 'react';
import {NativeModules, Button} from 'react-native';

const NewModuleButton = () => {
    const {AppUsage} = NativeModules;
    const [stringResult, setStringResult] = useState("hola");

    const onPress = async () => {
        try {
            const stringResult = await AppUsage.getAppUsage(
              'Party',
              'My House',
            );
            setStringResult(stringResult);
        } catch (e) {
            console.error(e);
        }
        // AppUsage.getAppUsage('testName', 'testLocation');
    };

    return (
    <Button
        title={stringResult}
        color="#841584"
        onPress={onPress}
    />
    );
};

export default NewModuleButton;