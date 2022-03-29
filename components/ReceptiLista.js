
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import PrikazRecepta from "./PrikazRecepta";
const ReceptiLista = (props) => {
    const PrikaziRecept = (recept) => {
        return (
            <PrikazRecepta
                naziv={recept.item.naziv}
                odabir={() => {
                    props.navigation.navigate({
                        routeName: "Detalji",
                        params: {
                            idRecepta: recept.item.id
                        }
                    })
                }}
                vrijeme={recept.item.vrijeme}
                slozenost={recept.item.slozenost}
                cijena={recept.item.cijena}
                slika={recept.item.urlSlike}
            />
        )
    }

    return (
        <View style={stil.ekran}>
            <FlatList
                data={props.listaPodaci}
                renderItem={PrikaziRecept}
                style={{ width: "90%" }}
            />
        </View>
    );
};

const stil = StyleSheet.create({
    ekran: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ReceptiLista;