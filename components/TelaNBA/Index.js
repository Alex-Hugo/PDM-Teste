import React from 'react';
import { View, Text, Button } from 'react-native';

const TelaNBA = ({ navigation }) => {
  return (
    <View>
      <Text>Tela da NBA</Text>
      <Button
        title="Ir para a tela inicial"
        onPress={() => navigation.navigate('TelaHome')}
      />
      <Button
        title="Ir para a tela do Futebol Brasileiro"
        onPress={() => navigation.navigate('TelaFutebolBrasileiro')}
      />
    </View>
  );
};

export default TelaNBA;