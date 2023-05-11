import React from 'react';
import { View, Text,FlatList,StyleSheet, Button } from 'react-native';
import { useDados } from '../../API/Dados';

const TelaNBA = () => {

  const { dados, isLoading, isError } = useDados();

  if (isLoading) {
    return <Text>Carregando...</Text>;
  }

  if (isError) {
    return <Text>Ocorreu um erro ao carregar os dados</Text>;
  }

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
      <View>
        <FlatList>
          data={dados}
          keyExtractor={(item) => item.objectId}
          numColums={4}
          renderItem={({item}) => {
          <View>
            <Image source={{ uri: item.logo_time.url }} />
            <Text>{item.nome}</Text>
            <Text>{item.cidade}</Text>
            <Text>{item.estrela_do_time}</Text>
            </View>
          }}
        </FlatList>
      </View>
    </View>
  );
};

export default TelaNBA;