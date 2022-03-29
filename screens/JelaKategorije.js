
import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ReceptiLista from '../components/ReceptiLista';
import { KATEGORIJE, RECEPTI } from '../data/test-podaci';
import PrikazRecepta from '../components/PrikazRecepta';
import Recept from '../models/Recept';

const JelaKategorije = (props) => {
  const kategorijaId = props.navigation.getParam('idKategorije')
  const odabranaKat = KATEGORIJE.find(kat => kat.id === kategorijaId)

  const receptiPrikaz = RECEPTI.filter(recept => recept.idKategorija.indexOf(kategorijaId) >= 0)

  return (
    <ReceptiLista listaPodaci={receptiPrikaz} navigation={props.navigation} />
  );
};


JelaKategorije.navigationOptions = (navigationData) => {
  const kategorijaId = navigationData.navigation.getParam('idKategorije') //ne treba props , props = navigationData
  const odabranaKat = KATEGORIJE.find(kat => kat.id === kategorijaId)
  return {
    headerTitle: odabranaKat.naziv,
    headerStyle: {
      backgroundColor: odabranaKat.boja,
    },
    headerTintColor: 'white'
  }
}


const stil = StyleSheet.create({
  ekan: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
})
export default JelaKategorije;