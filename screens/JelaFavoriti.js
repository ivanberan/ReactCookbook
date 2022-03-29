
import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ReceptiLista from '../components/ReceptiLista';
import { KATEGORIJE, RECEPTI } from '../data/test-podaci';
import PrikazRecepta from '../components/PrikazRecepta';
import Recept from '../models/Recept';
const JelaFavoriti = (props) => {

  const favRecepti = RECEPTI.filter((r) => r.id === "r1" || r.id === "r2")


  return (
    <ReceptiLista listaPodaci={favRecepti} navigation={props.navigation} />
  );
};

JelaFavoriti.navigationOptions = {
  headerTitle: "Omiljena jela"
}


const stil = StyleSheet.create({
  ekan: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
})
export default JelaFavoriti;