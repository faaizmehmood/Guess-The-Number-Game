import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../utils/constants/Color'
import { font } from '../../utils/constants/font'

const deviceWidth = Dimensions.get('window').width

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        padding: deviceWidth < 370 ? 12 : 10,
        borderRadius: 8,
        margin: 24,
        borderColor: Color.accent500,
    },
    numberText: {
        fontSize: 36,
        fontFamily: font.bold,
        color: Color.accent500,
    },
})