type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export default function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div className="flex gap-[20px] text-6xl font-bold uppercase font-mono">
      {wordToGuess.split("").map((letter, index) => {
        //It maps over the wordToGuess string and renders each letter inside a <span>. If the letter is in guessedLetters or reveal is true, the letter is visible; otherwise, it is hidden. If the letter is not in guessedLetters and reveal is true, the letter is red.
        return (
          <span key={index} className="border-b-2">
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetters.includes(letter) && reveal ? "red" : "black",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}
