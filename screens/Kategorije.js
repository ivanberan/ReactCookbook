
import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Touchable } from 'react-native';
import GridKartica from '../components/GridKartica';

import { KATEGORIJE } from '../data/test-podaci';

const Kategorije = (props) => {


  /*const renderGrid = (podaci) => {
    return (
      <TouchableOpacity style={stil.gridElement} onPress={()=>{props.navigation.navigate("JednaKategorija", {
        idKategorije: podaci.item.id
      })}}>
        <View >
          <Text>{podaci.item.naziv}</Text>
        </View>
      </TouchableOpacity>
    )
  }*/
  const renderGrid = (podaci) => {
    return (
      <GridKartica
        naziv={podaci.item.naziv}
        boja={podaci.item.boja}
        odabir={() => { props.navigation.navigate("JednaKategorija", { idKategorije: podaci.item.id }) }}
      />
    )
  }
  return (
    <View>
      <FlatList numColumns={2} data={KATEGORIJE} renderItem={renderGrid} />
    </View>
  );
};



const stil = StyleSheet.create({
  ekan: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridElement: {
    flex: 1,
    margin: 15,
    height: 150,
    borderColor: 'black',
    borderWidth: 1

  },
})
export default Kategorije;