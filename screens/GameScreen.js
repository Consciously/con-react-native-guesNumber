import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';

function generateRandomBetween(min, max, exclude) {
	const rndNumber = Math.floor(Math.random() * (max - min)) + min;

	if (rndNumber === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNumber;
	}
}

function GameScreen({ userNumber }) {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			{/* GUESS */}
			<View>
				<Text>Higher or lower?</Text>
				{/* +
				- */}
			</View>
			<View>{/* LOG OUR ROUNDS */}</View>
		</View>
	);
}

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24
	}
});
