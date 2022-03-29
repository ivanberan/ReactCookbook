
import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Touchable } from 'react-native';
const GridKartica = (props) => {
    return (
        <TouchableOpacity style={stil.gridElement} onPress={props.odabir}>
            <View style={{ ...stil.okvir, ...{ backgroundColor: props.boja } }}>
                <Text numberOfLines={2} style={stil.naslov}>{props.naziv}</Text>
            </View>
        </TouchableOpacity>
    )

}

const stil = StyleSheet.create({
    ekan: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    naslov: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    },
    okvir: {
        flex: 1,
        borderRadius: 15,
        elevation: 5,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    gridElement: {
        flex: 1,
        margin: 15,
        height: 150,


    },
})
export default GridKartica;