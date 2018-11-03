import React from "react"
import { View } from "react-native"


const CardItem = (props) => {
    const { children } = props;
    const { containerStyle } = styles
    return (
        <View style={containerStyle}>
            {children}
        </View>
    )
}

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        flexDirection: "row",
        borderColor: "#ddd",
        position: "relative",
        BorderRadius:5,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,

    }
}

export { CardItem }