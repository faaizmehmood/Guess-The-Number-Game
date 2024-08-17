import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../utils/constants/Color'
import { font } from '../../utils/constants/font'

const PrimaryButton = ({ children, onPress, style }) => {
    return (
        <View style={styles.buttonOuterContainer}>

            <Pressable style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed, style] : [styles.buttonInnerContainer, style]}
                android_ripple={{ color: Color.primary800 }}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>

        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        overflow: 'hidden',
        borderRadius: 15,
    },
    buttonInnerContainer: {
        paddingVertical: 8,
        paddingHorizontal: '3%',
        backgroundColor: Color.primary500,
        elevation: 5,
    },
    buttonText: {
        fontFamily: font.bold,
        color: Color.white,
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    },
})