import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const Card = ({ children }) => {
    return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: 15,
        padding: 16,
        backgroundColor: Colors.primary800,

        //For Android Only To Add Shadow
        elevation: 4,

        // For IOS Only To Add Shadow
        // shadowColor: 'red',
        // shadowRadius: 10,
        // shadowOpacity: 50,
        // shadowOffset: { height: 3, width: 0 }
    },
});
