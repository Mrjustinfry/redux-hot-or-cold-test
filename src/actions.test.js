import { GENERATE_AURAL_UPDATE, generateAuralUpdate, MAKE_GUESS, makeGuess, RESTART_GAME, restartGame } from './actions';

describe('generateAuralUpdate', () => {
	it('Should update the aural status', () => {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
	})
});

describe('makeGuess', () => {
	it('Should guess a number', () => {
		const guess =10;
		const action = makeGuess(guess);
		expect(action.type).toEqual(MAKE_GUESS);
		expect(action.guess).toEqual(guess);
	})
});

describe('restartGame', () => {
	it('Should reset the game', () => {
		const correctAnswer = 10;
		const action = restartGame(correctAnswer);
		expect(action.type).toEqual(RESTART_GAME);
		expect(action.correctAnswer).toEqual(correctAnswer);
	})
});