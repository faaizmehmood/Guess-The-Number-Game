import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userEnterredNmbr, onStartNewGame }) => {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/images/success.png")}
                    style={styles.imageStyle}
                />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed{" "}
                <Text style={styles.highlightText}>{roundsNumber}</Text> rounds
                to guess the number
                <Text style={styles.highlightText}> {userEnterredNmbr}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>
                Start New Game
            </PrimaryButton>
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    imageContainer: {
        height: 300,
        width: 300,
        borderRadius: 150,
        borderWidth: 3,
        overflow: "hidden",
        margin: 36,
        borderColor: Colors.primary800,
    },
    imageStyle: {
        height: "100%",
        width: "100%",
    },
    summaryText: {
        fontSize: 24,
        fontWeight: "400",
        color: Colors.primary700,
        textAlign: "center",
        marginBottom: 24,
    },
    highlightText: {
        fontWeight: "bold",
        color: Colors.primary500,
    },
});
