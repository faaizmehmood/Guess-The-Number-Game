import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { font } from '../../utils/constants/font'
import { Color } from '../../utils/constants/Color'

const ShowGameRounds = ({ roundsNumber, guess }) => {
    return (
        <View style={styles.listContainer}>
            <Text style={styles.numberText}>#{roundsNumber}</Text>
            <Text style={styles.numberText}>Opponent's Guess: {guess}</Text>
        </View>
    )
}

export default ShowGameRounds

const styles = StyleSheet.create({
    listContainer: {
        borderWidth: 2,
        borderColor: Color.primary800,
        backgroundColor: Color.accent500,
        flexDirection: 'row',
        padding: 12,
        width: '100%',
        borderRadius: 40,
        justifyContent: 'space-between',
        marginVertical: '5%',
        marginBottom: 0,
    },
    numberText: {
        fontFamily: font.regular
    },
})