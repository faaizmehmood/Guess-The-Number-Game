import { Alert, FlatList, StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { memo, useEffect, useState } from 'react'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import { Ionicons } from '@expo/vector-icons'
import { Color } from '../utils/constants/Color'
import ShowGameRounds from '../components/game/ShowGameRounds'

const generateRandomNumber = (min, max, exclude) => {
    let rndNumber = Math.floor(Math.random() * (max - min) + min)
    if (rndNumber === exclude) {
        return generateRandomNumber(min, max, exclude)
    } else {
        return rndNumber;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, gameOverHandler }) => {
    let initialGuess = generateRandomNumber(1, 100, userNumber)

    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRoundsList, setGuessRoundsList] = useState([initialGuess])

    let { width } = useWindowDimensions();

    useEffect(() => {
        if (currentGuess === userNumber) {
            gameOverHandler(guessRoundsList.length);
        }

    }, [gameOverHandler, userNumber, currentGuess])


    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    }, [])

    const nextGuessHandler = (direction) => {

        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {

            Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: 'Sorry!', style: 'destructive' }])

            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        let newRndNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRoundsList((prev) => [newRndNumber, ...prev])
    }

    let content = width < 380 ?
        <>
            <NumberContainer>{currentGuess}</NumberContainer>

            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>

                <View style={styles.buttonsContainer}>

                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                            <Ionicons name='remove-outline' size={24} color={Color.white} />
                        </PrimaryButton>
                    </View>

                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('higher')}>
                            <Ionicons name='add' size={24} color={Color.white} />
                        </PrimaryButton>
                    </View>

                </View>

            </Card>
        </>
        :
        <>
            <View style={styles.landScapeButtonContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                        <Ionicons name='remove-outline' size={24} color={Color.white} />
                    </PrimaryButton>
                </View>

                <NumberContainer>{currentGuess}</NumberContainer>

                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={() => nextGuessHandler('higher')}>
                        <Ionicons name='add' size={24} color={Color.white} />
                    </PrimaryButton>
                </View>

            </View>
        </>

    return (
        <View style={styles.mainContainer}>

            <Title>Opponent's Guess</Title>

            {content}

            <FlatList
                data={guessRoundsList}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => <ShowGameRounds roundsNumber={guessRoundsList.length - index} guess={item} />}
                keyExtractor={(item) => item}
            />

        </View>
    )
}

export default memo(GameScreen)

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        padding: 24,
        alignItems: 'center',
    },
    instructionText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    landScapeButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
    },
})