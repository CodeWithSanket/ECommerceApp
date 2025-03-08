import { View } from "react-native";
import Navbar from "./Navbar";
import DisplayList from "./DisplayList";
import React, { useState } from "react";
import ProductCountContext from "./context/useProductCount";

export default function App() {

    const [cart, setCart] = useState<number>(0);

    return (
        <ProductCountContext.Provider value={{ cart, setCart }}>
            <View>
                <Navbar />
                <DisplayList />
            </View>
        </ProductCountContext.Provider>
    )
}
