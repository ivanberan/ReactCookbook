
import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Touchable, ImageBackground } from 'react-native';
const PrikaziRecept = (props) => {
    return (
        <View style={stil.recept}>
            <TouchableOpacity onPress={props.odabir}>
                <View>
                    <View style={{ ...stil.receptRedak, ...stil.receptZaglavlje }}>
                        <ImageBackground source={{uri: props.slika} } style={stil.pozSlika}>
                            <Text style={stil.naslov}>{props.naziv}</Text>

                        </ImageBackground>
                    </View>
                    <View style={{ ...stil.receptRedak, ...stil.receptDetalji }}>
                        <Text>{props.slozenost.toUpperCase()}</Text>
                        <Text>{props.cijena.toUpperCase()}</Text>
                        <Text>{props.vrijeme} min</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )

}

const stil = StyleSheet.create({
    imeJela:{
        fontSize:18,
        justifyContent:'center',
        backgroundColor:'lightblue',
        textAlign:'center',
        opacity: 0.8
    },
    recept: {
        height: 200,
        width: '100%',
        backgroundColor: '#dcdc40',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },
    receptRedak: {
        flexDirection: 'row'
    },
    receptZaglavlje: {
        height: '85%',
    },
    receptDetalji: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    pozSlika: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    naslov: {
        fontFamily: 'GreatVibes-Regular',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 10,
        textAlign: 'center'
    }
});
export default PrikaziRecept;