import { Alert, Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native'
import React, { useState, memo } from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'
import { Color } from '../utils/constants/Color'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import { font } from '../utils/constants/font'

const StartGameScreen = ({ onPickNumberHandler }) => {
    const [enteredNumber, setEnteredNumber] = useState('')
    let { height, width } = useWindowDimensions();

    const inputHandler = (text) => {
        const sanitizedText = text.replace(/[-.,\s]/g, '');
        setEnteredNumber(sanitizedText);
    }

    const confirmInputHandler = () => {
        let chosenNumber = parseInt(enteredNumber)

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be a number between 0 and 99.',
                [{
                    text: 'OK',
                    style: 'destructive',
                    onPress: resetInputHandler
                }])
            return;
        }

        onPickNumberHandler(chosenNumber)
    }

    const resetInputHandler = () => {
        setEnteredNumber('')
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior='position'>
                <View style={[styles.mainContainer, { marginTop: height < 380 ? '8%' : '20%' }]}>

                    <Title>Guess My Number</Title>

                    <Card>

                        <TextInput style={styles.inputText}
                            value={enteredNumber}
                            onChangeText={(text) => inputHandler(text)}
                            keyboardType='number-pad'
                            autoCapitalize='none'
                            autoCorrect={false}
                            maxLength={2}
                            onSubmitEditing={() => enteredNumber.trim().length > 0 ? confirmInputHandler() : null}
                        />

                        <View style={styles.buttonsContainer}>

                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>

                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>

                        </View>

                    </Card>

                </View>
            </KeyboardAvoidingView>
        </ScrollView>

    )
}

export default memo(StartGameScreen)

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center'
    },
    inputText: {
        borderBottomColor: Color.accent500,
        borderBottomWidth: 2,
        height: 45,
        width: 50,
        color: Color.accent500,
        fontFamily: font.bold,
        fontSize: 32,
        marginBottom: 10,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: '2%'
    },
    buttonContainer: {
        flex: 1,
    },
})