import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createDrawerNavigator } from 'react-navigation-drawer'
import Kategorije from "../screens/Kategorije";
import JelaKategorije from "../screens/JelaKategorije";
import Recept from "../screens/Recept";
import FilteriEkran from "../screens/FilteriEkran";
import JelaFavoriti from "../screens/JelaFavoriti"
import { Ionicons } from "@expo/vector-icons"
const ReceptiNavigacija = createStackNavigator(
  {
    SveKategorije: {
      screen: Kategorije,
      navigationOptions: {
        headerTitle: "Kategorije jela",
      }
    },
    JednaKategorija: {
      screen: JelaKategorije,
    },
    Detalji: Recept,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: 'white'
    }
  }
);

const FavoritiNavigacija = createStackNavigator(
  {
    Favoriti: JelaFavoriti,
    Detalji: Recept
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: 'white'
    }
  
  })

const ReceptiNavigacijaTab = createBottomTabNavigator({
  Recept: {
    screen: ReceptiNavigacija,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (<Ionicons name="md-fast-food-outline" size={24} color={tabInfo.tintColor} />)
      }
    }
  },
  Favoriti: {
    screen: FavoritiNavigacija,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (<Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />)
      }
    }
  }
}, {
  tabBarOptions: {
    activeBackgroundColor: "#c7f6a6",
    inactiveBackgroundColor: "#faae9d",
    activeTintColor: "white",
    inactiveTintColor: "black"
  }
})


const FilterStack = createStackNavigator({
  Filter: FilteriEkran
})

const AppNavigacija = createDrawerNavigator({
TabFavoriti: ReceptiNavigacijaTab,
Filteri: FilterStack
}, {

})

export default createAppContainer(ReceptiNavigacijaTab);