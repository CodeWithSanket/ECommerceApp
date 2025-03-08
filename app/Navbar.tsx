import { StyleSheet, Text, View } from "react-native"
import { theme } from "./style/theme"
import React, { useContext } from "react"
import ProductCountContext from "./context/useProductCount";

export default function Navbar() {

    const { cart } = useContext(ProductCountContext);

    return (
        <View style={styles.navbarTwoItemSameLine}>
            <Text style={styles.navbar}>Shopify</Text>
            <Text style={styles.navbar}>Cart: {cart}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    navbar: {
        padding: 15,
        backgroundColor: theme.colors.primary,
        color: theme.colors.white,
        fontSize: 20,
        fontWeight: "bold",
    },
    navbarTwoItemSameLine: {
        flexDirection: "row",
        backgroundColor: theme.colors.primary,
        justifyContent: "space-between",
        alignItems: "center",
    }
})

