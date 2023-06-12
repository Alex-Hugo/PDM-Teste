import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { React, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDados } from "../../API/Times";

const TelaNBA = ({}) => {
  console.log("TelaNBA");
  const { dados, isLoading, isError } = useDados();
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const data = dados;
    setTimes(data.times);
  }, []);

  if (isLoading) {
    console.log("TelaNBA isLoading");
    return <Text>Carregando...</Text>;
  }

  if (isError) {
    console.log("TelaNBA isError");
    return <Text>Ocorreu um erro ao carregar os dados</Text>;
  }

  const navigation = useNavigation();

  const handleTimePress = (time) => {
    navigation.navigate('TelaElencos', { time });
  };

  return (
    <ScrollView style={styles.container}>
      {times.map((time) => (
        <TouchableOpacity key={time._id} style={styles.card} onPress={() => handleTimePress(time)}>
          <Text style={styles.text}>Nome: {time.nome}</Text>
          <Text style={styles.text}>Estado: {time.estado}</Text>
          <Text style={styles.text}>Cidade: {time.cidade}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  console.log(times);
  console.log("TelaNBA dados", dados.times[0].nome);
  return (
    <View>
      {times.map((time) => (
        <View key={time._id}>
          <Text>Nome: {time.nome}</Text>
          <Text>Estado: {time.estado}</Text>
          <Text>Cidade: {time.cidade}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  image: {
    marginLeft: 70,
    width: 60,
    height: 60,
    justifyContent: "center",
  },
  corpo: {
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 110,
    marginLeft: 85,
    color: "black",
  },
});

export default TelaNBA;
