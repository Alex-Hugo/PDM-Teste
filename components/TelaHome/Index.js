import React from 'react';
import { StyleSheet,View, Text, Button,Image } from 'react-native';

const TelaHome = ({ navigation }) => {
  return (
    <View>
    <Button
        title="Ir para a tela da NBA"
        onPress={() => navigation.navigate('TelaNBA')}
      />
      <Button
        title="Ir para a tela do Futebol Brasileiro"
        onPress={() => navigation.navigate('TelaFutebolBrasileiro')}
      />
      <Text>Aqui voce vera as noticias esportivas do Brasil e do mundo em primeira mao! Basquete, Futebol e tudo sobre o mercado de transferencias voce ve aqui!</Text>
        <View>
        <Image source= {{uri: 'https://static.significados.com.br/foto/tipos-de-esporte-og.jpg'}} style={styles.imagem} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    imagem: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        height: 200,
    },
});

export default TelaHome;





