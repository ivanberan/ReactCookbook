import React from 'react'

import { HeaderButton } from "react-navigation-header-buttons"
import { Ionicons } from "@expo/vector-icons"
const NavButton = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={24}
            color={"gold"}
        />
    )
}
export default NavButton