import { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, View, Image } from "react-native";
import { theme } from "./style/theme";
import AddToCart from "./AddToCart";
import React from "react";

export default function DisplayList() {
    const [list, setList] = useState<any[]>([]);

    const fetchList = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setList(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {list.map((item) => (
                <View key={item.id} style={styles.card}>
                    <Image style={styles.image} source={{ uri: item.image }} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                        <Text style={styles.category}>{item.category}</Text>
                        <Text style={styles.description} numberOfLines={2}>
                            {item.description}
                        </Text>
                        <AddToCart/>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: 15,
        paddingBottom: 20,
        backgroundColor: theme.colors.lightGray,
    },
    card: {
        backgroundColor: theme.colors.white,
        borderRadius: 12,
        padding: 15,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        resizeMode: "contain",
    },
    textContainer: {
        width: "100%",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: theme.colors.black,
        textAlign: "center",
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: theme.colors.primary,
        marginTop: 5,
    },
    category: {
        fontSize: 14,
        fontWeight: "600",
        color: theme.colors.darkGray,
        marginTop: 5,
    },
    description: {
        fontSize: 12,
        color: theme.colors.gray,
        marginTop: 5,
        textAlign: "center",
    },
});
