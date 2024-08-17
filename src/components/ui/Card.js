import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../utils/constants/Color'

const Card = ({ children }) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    card: {
        marginTop: deviceWidth < 370 ? '5%' : '10%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        padding: deviceWidth < 370 ? 16 : 18,
        backgroundColor: Color.primary800,
        elevation: 5,
        borderRadius: 8
    },
})