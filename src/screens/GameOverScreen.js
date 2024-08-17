import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View, } from 'react-native'
import React, { memo } from 'react'
import Title from '../components/ui/Title'
import { Color } from '../utils/constants/Color'
import { font } from '../utils/constants/font'
import PrimaryButton from '../components/ui/PrimaryButton'

const GameOverScreen = ({ roundsNumber, userNumber, startNewGameHandler }) => {
    const { width } = useWindowDimensions();

    let imageSize = width < 380 ? {
        height: 300,
        width: 300,
        borderRadius: 150,
    } : {
        height: 150,
        width: 150,
        borderRadius: 75,
    }

    return (
        <ScrollView style={{ flexGrow: 1 }}>
            <View style={styles.rootContainer}>
                <Title>Game Over!</Title>

                <View style={[styles.imageContainer, imageSize]}>
                    <Image style={styles.imageStyle} source={require('../../assets/images/success.png')} />
                </View>

                <Text style={styles.summaryText}>Your phone needed
                    <Text style={styles.highlight}> {roundsNumber} </Text>rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
                </Text>

                <PrimaryButton style={styles.paddingStyle} onPress={() => startNewGameHandler()}>
                    Start New Game
                </PrimaryButton>

            </View>
        </ScrollView>
    )
}

export default memo(GameOverScreen)

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24
    },
    imageContainer: {
        borderColor: Color.primary800,
        borderWidth: 2,
        margin: 36,
        overflow: 'hidden',
    },
    imageStyle: {
        height: '100%',
        width: '100%',
    },
    summaryText: {
        fontSize: 21,
        fontFamily: font.regular,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: font.bold,
        color: Color.primary500,
    },
    paddingStyle: {
        paddingVertical: 10
    },
})