import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../utils/constants/Color'
import { font } from '../../utils/constants/font'

const Title = ({ children }) => {
    return (
        <Text style={styles.textColor}>{children}</Text>
    )
}

export default Title

const styles = StyleSheet.create({
    textColor: {
        color: Color.white,
        borderWidth: Platform.select({ ios: 0, android: 2 }),
        borderColor: Color.white,
        padding: 12,
        textAlign: 'center',
        fontSize: 24,
        fontFamily: font.bold,
        maxWidth: '80%',
    },

})