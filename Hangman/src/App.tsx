import { useCallback, useEffect, useState } from "react";
import "./App.css";
import words from "./wordList.json";
import HangmanDrawing from "./component/HangmanDrawing";
import HangmanWord from "./component/HangmanWord";
import Keyboard from "./component/Keyboard";

//get words from wordList file and use math.random to get one of the word randomly
function getWord() {
  return words[Math.floor(Math.random() * words.length)].toUpperCase();
}

// make two useState to store the word to guess and guessed letters
function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord);
  const [guessLetters, setGuessedLetters] = useState<string[]>([]);

  // filter the guessed letters to get the incorrect letters in to array
  const incorrectLetters = guessLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  // cause the hangman just have 6 elements, so if the incorrect letters is more than 6, the player will lose
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess // if the word to guess is equal to the guessed letters, the player will win
    .split("")
    .every((letter) => guessLetters.includes(letter));

  // add the guessed letter to the guessed letters array
  const addGuessLetter = useCallback(
    (letter: string) => {
      if (guessLetters.includes(letter) || isLoser || isWinner) return; // if the letter ald inside the array or the player win or lose, the letter will not be added

      setGuessedLetters((currentLetters) => [...guessLetters, letter]);
    },
    [guessLetters, isWinner, isLoser]
  );

  // add event listener to listen the keydown event
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key;
      console.log(key);
      if (!key.match(/^[a-z]$/i)) {
        // matches exactly one letter (a–z), and the “i” flag makes it case-insensitive. The ^ and $ anchors ensure that the string is only one character long, and [a-z] limits it to letters.
        return;
      }
      event.preventDefault();
      addGuessLetter(key.toUpperCase());
    };
    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [guessLetters]);

  // if the player press enter, the guessed letters will be empty and the word to guess will be random again
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key;
      if (key === "Enter") {
        event.preventDefault();
        setGuessedLetters([]);
        setWordToGuess(getWord());
      }
    };
    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  return (
    <div className="max-w-[800px] flex flex-col gap-2 mx-auto my-0 items-center">
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessLetters}
        wordToGuess={wordToGuess}
      />
      <div className="text-2xl text-center mt-4 text-red-500 font-bold">
        {isWinner && "You win! - Press Enter to try again!"}
        {isLoser && "Nice Try - Press Enter to try again!"}
      </div>
      <div className="items-stretch">
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessLetter}
        />
      </div>
    </div>
  );
}

export default App;
