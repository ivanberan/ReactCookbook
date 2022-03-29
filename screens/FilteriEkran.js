	
import React from 'react'
import { StyleSheet, View, Text, Button} from 'react-native';
	

const FilteriEkran = (props) => {
    console.log(props)
    return (
      <View style={stil.ekran}>
        <Text>Ekran za FilteriEkran</Text>
        <Button title="Pogledaj recepte!" onPress={() => {}}/>
      </View>
    );
  };

  const stil = StyleSheet.create({
    ekan:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
  })
  export default FilteriEkran;