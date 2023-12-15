import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const PrimaryButton = ({ children, onPress }) => {
    return (
        <View style={styles.butttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.pressed, styles.butttonInnerContainer]
                        : styles.butttonInnerContainer
                }
                onPress={onPress}
                android_ripple={{ color: Colors.primary600 }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    butttonOuterContainer: {
        margin: 4,
        borderRadius: 28,
        overflow: "hidden",
    },
    butttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        borderRadius: 28,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
});
