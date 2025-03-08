import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProductCountContext from "./context/useProductCount";

export default function AddToCart() {

    const { cart, setCart } = useContext(ProductCountContext);

    const addtoCart = () => {
        setCart(cart + 1);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={addtoCart}>
                <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    button: {
        width: 150,
        backgroundColor: "#f7287b",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        elevation: 5, // Android
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});
