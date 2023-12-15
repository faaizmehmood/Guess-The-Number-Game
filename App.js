import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";

const App = () => {
    const [userNumber, setUserNumber] = useState("");
    const [isGameOver, setIsGameOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    const pickNumberHandler = (enterrednumber) => {
        setUserNumber(enterrednumber);
        setIsGameOver(false);
    };

    const gameOverHanler = (numberOfRounds) => {
        setIsGameOver(true);
        setGuessRounds(numberOfRounds);
    };

    const startNewGameHandler = () => {
        setUserNumber(null);
        setGuessRounds(0);
    };

    let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

    if (userNumber) {
        screen = (
            <GameScreen
                userEnterredNumber={userNumber}
                onGameOver={gameOverHanler}
            />
        );
    }

    if (isGameOver && userNumber) {
        screen = (
            <GameOverScreen
                userEnterredNmbr={userNumber}
                roundsNumber={guessRounds}
                onStartNewGame={startNewGameHandler}
            />
        );
    }

    return (
        <LinearGradient
            colors={[Colors.primary700, Colors.accent500]}
            style={styles.rootScreen}
        >
            <ImageBackground
                source={require("./assets/images/background.png")}
                style={styles.rootScreen}
                resizeMode="cover"
                imageStyle={styles.imageBackground}
            >
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
};

export default App;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    imageBackground: {
        opacity: 0.18,
    },
});
