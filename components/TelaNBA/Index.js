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
