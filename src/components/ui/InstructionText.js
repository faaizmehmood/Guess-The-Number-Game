import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../utils/constants/Color'
import { font } from '../../utils/constants/font'

const InstructionText = ({ children, style }) => {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: font.regular,
        fontSize: 24,
        color: Color.accent500,
    },
})