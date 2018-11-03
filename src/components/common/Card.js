import React from "react"
import { View } from "react-native"

const Card = (props) => {
    const { containerStyle } = styles;
    const { children } = props;

    return (
        <View style={containerStyle}>
            {children}
        </View>
    )
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#ddd",
        borderBottomWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0, height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
}

export { Card }