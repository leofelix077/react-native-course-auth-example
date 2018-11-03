import React from "react";
import { TextInput, View, Text } from "react-native";

const Input = (props) => {
    const {
        label,
        value,
        onChangeText,
        autoCorrect,
        placeholder,
        secureTextEntry
    } = props;

    const {
        labelStyle,
        inputStyle,
        containerStyle
    } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                autoCorrect={autoCorrect}
                secureTextEntry={secureTextEntry}
                />
        </View>
    )
}

const styles = {
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        color: "#000",
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        borderRadius:5,
        backgroundColor: "#EEF",
        borderWidth: 1,
        borderColor: "#007aff",
        marginRight:5
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    }
}

export { Input };