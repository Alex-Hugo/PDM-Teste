import React from 'react';
import { StyleSheet,View, Text,Image } from 'react-native';
import { Button} from '@rneui/themed';
import themeStore from '../../assets/themeStore';

const TelaHome = ({ navigation }) => {
  const { theme, setTheme } = themeStore();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme); // Altere o tema no estado
  };

  const buttonText = theme === 'light' ? 'dark' : 'light';


  return (
    <View style={styles[theme].container}>
    <View>
    <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
    <Button
        title="Ir para a tela da NBA"
        onPress={() => navigation.navigate('TelaNBA')}
      />
      <Button
        title="Ir para a tela do Futebol Brasileiro"
        onPress={() => navigation.navigate('TelaFutebolBrasileiro')}
      />
      <Text style={styles[theme].texto}>Aqui voce vera as noticias esportivas do Brasil e do mundo em primeira mao! Basquete, Futebol e tudo sobre o mercado de transferencias voce ve aqui!</Text>
        <View>
        <Image source= {{uri: 'https://static.significados.com.br/foto/tipos-de-esporte-og.jpg'}} style={styles[theme].imagem} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    dark:{
      container:{
      flex:1,
      backgroundColor:'black',
      },
    imagem: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        height: 200,
    },
    texto:{
      color:'white',
    },
  },
  light:{
    container:{
    flex:1,
    backgroundColor:'white',
    },
    imagem: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 400,
      height: 200,
  },
    texto:{
      color:'black',
    }

  }
});

export default TelaHome;





