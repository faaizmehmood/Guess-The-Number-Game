import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {
    const [enterredNumber, setEnterredNumber] = useState("");

    const numberInputHandler = (enterredText) => {
        setEnterredNumber(enterredText);
    };

    const resetInputHandler = () => {
        setEnterredNumber("");
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enterredNumber);
        if (
            (!chosenNumber && isNaN(chosenNumber)) ||
            chosenNumber <= 0 ||
            chosenNumber > 99
        ) {
            Alert.alert(
                "Invalid Number",
                "Number has to be a number between 1 and 99.",
                [
                    {
                        text: "Okay",
                        style: "destructive",
                        onPress: resetInputHandler,
                    },
                ]
            );
            return;
        }
        onPickNumber(chosenNumber);
    };

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    value={enterredNumber}
                    onChangeText={(enterredText) =>
                        numberInputHandler(enterredText)
                    }
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonWidthContainer}>
                        <PrimaryButton onPress={resetInputHandler}>
                            Reset
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonWidthContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>
                            Confirm
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center",
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold",
        marginVertical: 8,
        borderBottomWidth: 2,
        borderColor: Colors.accent500,
        color: Colors.accent500,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    buttonWidthContainer: {
        flex: 1,
    },
});
