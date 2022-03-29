
import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';
import { KATEGORIJE, RECEPTI } from '../data/test-podaci';
import NavButton from '../components/NavButton';
import { HeaderButtons, Item } from "react-navigation-header-buttons"
const Recept = (props) => {
  console.log(props.navigation.getParam(''))
  const receptId = props.navigation.getParam('idRecepta')
  const odabraniRecept = RECEPTI.find(r => r.id === receptId)

  return (
    <View style={stil.ekran}>
      <Text>{odabraniRecept.naziv}</Text>
      <Text>{odabraniRecept.koraci}</Text>
    </View>
  );
};

Recept.navigationOptions = (navigtionData) => {
  const receptId = navigtionData.navigation.getParam('idRecepta')
  const odabraniRecept = RECEPTI.find(r => r.id === receptId)
  return {
    headerTitle: odabraniRecept.naziv,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={NavButton}>
          <Item title='Favoriti' iconName="ios-star" onPress={()=>{console.log("ds ")}
          }/>
        </HeaderButtons>
      )
    }
  }
}

const stil = StyleSheet.create({
  ekan: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }, fav: {
    color: "white"
  }
})
export default Recept;