import React from 'react';
import { Center, Box, Text, VStack } from 'native-base';

const Rules = () => {
  return (
    <Center mt={5} mb={2}>
      <Box
        width="90%"
        rounded="lg"
        borderColor="coolGray.300"
        p={4}
        mb={5}
        shadow={2}
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _light={{
          backgroundColor: 'white',
        }}
      >
        <Text fontSize="lg" bold underline>
          Reglas de Clasificación
        </Text>
        <VStack space={2} mt={2}>
          <Text>- Las apps de entretenimiento cuentan el tiempo x2.</Text>
          <Text>- Las apps de redes sociales cuentan el tiempo x2.</Text>
          <Text>- Las apps de productividad cuentan el tiempo x3.</Text>
        </VStack>
      </Box>
    </Center>
  );
};

export default Rules;
