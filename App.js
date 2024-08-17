import { ActivityIndicator, ImageBackground, SafeAreaView, StyleSheet, View, Text } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import StartGameScreen from './src/screens/StartGameScreen'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import GameScreen from './src/screens/GameScreen'
import { Color } from './src/utils/constants/Color'
import GameOverScreen from './src/screens/GameOverScreen'
import * as Font from 'expo-font'

const App = () => {
    const [userNumberPicked, setUserNumberPicked] = useState(null)
    const [isGameOver, setIsGameOver] = useState(false)
    const [fontsLoading, setFontsLoading] = useState(false)
    const [numberOfRounds, setNumberOfRounds] = useState(0)

    const onPickNumberHandler = useCallback((numberPicked) => {
        setUserNumberPicked(numberPicked)
        setIsGameOver(false)
    }, [userNumberPicked])

    const gameOverHandler = useCallback((countRounds) => {
        setIsGameOver(true)
        setNumberOfRounds(countRounds)
    }, [isGameOver])

    const startNewGameHandler = useCallback(() => {
        setIsGameOver(false)
        setUserNumberPicked(null)
    }, [userNumberPicked, isGameOver])

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'OpenSans-Bold': require('./assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
                'OpenSans-Regular': require('./assets/fonts/Open_Sans/OpenSans-Regular.ttf')
            }).then((res) => {
                setFontsLoading(true)
            }).catch((err) => {
                setFontsLoading(false)
                console.log('err in loading fonts', err);

            });
        }
        loadFonts();
    }, [])

    if (!fontsLoading) return (
        <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading...</Text>
            <ActivityIndicator size={30} color={Color.primary600} />
        </View>
    )

    return (
        <LinearGradient style={styles.rootScreen} colors={[Color.primary700, Color.accent500]}>
            <StatusBar style='light' />

            <ImageBackground
                source={require('./assets/images/background.png')}
                resizeMode='cover'
                style={styles.rootScreen}
                imageStyle={styles.imageOpacity}
            >
                <SafeAreaView style={styles.rootScreen}>

                    {isGameOver ?
                        <GameOverScreen roundsNumber={numberOfRounds} userNumber={userNumberPicked} startNewGameHandler={startNewGameHandler} />
                        :
                        userNumberPicked ?
                            <GameScreen userNumber={userNumberPicked} gameOverHandler={gameOverHandler} />
                            :
                            <StartGameScreen onPickNumberHandler={onPickNumberHandler} />
                    }

                </SafeAreaView>

            </ImageBackground>

        </LinearGradient>
    )
}

export default App

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        margin: 5,
        fontSize: 24,
        fontWeight: 'bold',
        color: Color.accent500,
    },
    rootScreen: {
        flex: 1,
    },
    imageOpacity: {
        opacity: 0.15
    },
})