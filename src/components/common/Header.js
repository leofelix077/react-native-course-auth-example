import React from "react";
import { Text, View } from "react-native";


const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    const { headerText } = props;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20
    },

    viewStyle: {
        backgroundColor: "#F8F8F8",
        justifyContent: 'center',
        alignItems: "center",
        height: 60,
        paddingTop: 15,
        paddingBottom: 15,
        shadowColor: "#FFF",
        shadowOffset: {
            width: 2, height: 3
        },
        shadowOpacity: 0.6,
        elevation: 5,
        position: "relative"
    }
}

export { Header }