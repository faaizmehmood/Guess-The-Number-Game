import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandomBetween = (min, max, exclude) => {
    let rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(max, min, exclude);
    } else {
        return rndNum;
    }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userEnterredNumber, onGameOver }) => {
    const initialNumber = generateRandomBetween(1, 100, userEnterredNumber);
    const [currentGuess, setCurrentGuess] = useState(initialNumber);
    const [guessRounds, setGuessRounds] = useState([initialNumber]);

    useEffect(() => {
        if (currentGuess === userEnterredNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userEnterredNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    const nextGuessHandler = (direction) => {
        if (
            (direction === "lower" && currentGuess < userEnterredNumber) ||
            (direction === "greater" && currentGuess > userEnterredNumber)
        ) {
            Alert.alert("Don't lie ", "You Know that this is Wrong...", [
                {
                    text: "Sorry!",
                    style: "cancel",
                },
            ]);
            return;
        }
        if (direction === "lower") {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNmber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setCurrentGuess(newRndNmber);
        setGuessRounds((prevGuessRounds) => [newRndNmber, ...prevGuessRounds]);
    };

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>
                    Higher or Lower?
                </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonWidthContainer}>
                        <PrimaryButton
                            onPress={() => nextGuessHandler("lower")}
                        >
                            <Ionicons
                                name="md-remove"
                                size={24}
                                color="white"
                            />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonWidthContainer}>
                        <PrimaryButton
                            onPress={() => nextGuessHandler("greater")}
                        >
                            <Ionicons name="md-add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.guessLogContainer}>
                {/* For Map Loginc See this */}
                {/* {guessRounds.map((itm, index) => (
                    <Text key={index}>{itm}</Text>
                ))} */}
                <FlatList
                    data={guessRounds}
                    renderItem={({ item, index }) => {
                        return (
                            <GuessLogItem
                                roundNumber={index + 1}
                                guess={item}
                            />
                        );
                    }}
                    keyExtractor={(item) => item.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonWidthContainer: {
        flex: 1,
    },
    instructionText: {
        marginBottom: 12,
    },
    guessLogContainer: {
        flex: 1,
        padding: 16,
    },
});
