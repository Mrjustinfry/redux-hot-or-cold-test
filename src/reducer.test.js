import reducer from './reducer';
import {makeGuess, generateAuralUpdate, restartGame } from './actions';

describe('reducer', () => {
    it('Should set the initial state', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});

        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.auralStatus).toEqual('');
    });


    describe('restartGame', () => {
        it('Should restart the game', () => {
            let state = {
                guesses: [10, 20, 30, 40],
                feedback: 'test',
                correctAnswer: 25
            };
            const correctAnswer = 10;
            state = reducer(state, restartGame(correctAnswer));
            expect(state.guesses).toEqual([]);
            expect(state.feedback).toEqual('Make your guess!');
            expect(state.correctAnswer).toEqual(correctAnswer);
            expect(state.auralStatus).toEqual('');
        });
    });

    describe('makeGuess', () => {
        it('Should guess the number', () => {
            let state = {
                guesses: [],
                feedback: '',
                correctAnswer: 90
            };

            state = reducer(state, makeGuess(1));
            expect(state.guesses).toEqual([1]);
            expect(state.feedback).toEqual("You're Ice Cold...");

            state = reducer(state, makeGuess(45));
            expect(state.guesses).toEqual([1, 45]);
            expect(state.feedback).toEqual("You're Cold...");

            state = reducer(state, makeGuess(70));
            expect(state.guesses).toEqual([1, 45, 70]);
            expect(state.feedback).toEqual("You're Warm.");

            state = reducer(state, makeGuess(95));
            expect(state.guesses).toEqual([1, 45, 70, 95]);
            expect(state.feedback).toEqual("You're Hot!");

            state = reducer(state, makeGuess(90));
            expect(state.guesses).toEqual([1, 45, 70, 95, 90]);
            expect(state.feedback).toEqual('You got it!');
        });
    });
});