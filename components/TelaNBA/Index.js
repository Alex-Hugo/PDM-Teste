import React from 'react';
import { View, Text,FlatList, StyleSheet ,ScrollView } from 'react-native';
import { Button} from '@rneui/themed';
import { useDados } from '../../API/Dados';


const TelaNBA = ({navigation}) => {
  console.log('TelaNBA')

  const { dados, isLoading, isError } = useDados();

  if (isLoading) {
    console.log('TelaNBA isLoading')
    return <Text>Carregando...</Text>;
  }

  if (isError) {
    console.log('TelaNBA isError')
    return <Text>Ocorreu um erro ao carregar os dados</Text>;
  }

  console.log('TelaNBA dados',  dados);

  const myRenderItem = ({item}) => {
    console.log('item', item);
    console.log('item.logo_time.url', item.logo_time.url)
    return (
      <View style={styles.corpo}>

        <ScrollView>
        <Text>Nome do time:{item.nome}</Text>
        <Text>Cidade:{item.cidade}</Text>
        <Text>Principal jogador:{item.estado}</Text>
        </ScrollView>
      </View>

      
    )
  }
  return (
    <View>  
       <Button
        title="Ir para a tela inicial"
        icon={{
          name: 'home',
          size: 15,
          color: 'white',
        }}
        iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'rgba(90, 154, 230, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
        onPress={() => navigation.navigate('TelaHome')}
      />
      <Button
        title="Ir para a tela do Futebol Brasileiro"
        buttonStyle={{
          backgroundColor: 'rgba(90, 154, 230, 1)',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          width: 300,
          marginHorizontal: 50,
          marginVertical: 5,
        }}
        onPress={() => navigation.navigate('TelaFutebolBrasileiro')}
      />
        <FlatList
          data={dados}
          keyExtractor={(item) => item.objectId}
          numColums={4}
          renderItem={myRenderItem}
        />
    </View>
  );
};

const styles = StyleSheet.create({
image:{
marginLeft:70,
width:60,
height:60,
justifyContent:'center',
},
corpo:{
  textAlign:'center',
  justifyContent:'center',
  marginBottom:110,
  marginLeft:85,
},
});

export default TelaNBA;