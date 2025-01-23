type KeyboardProps = {
  activeLetters: string[];
  disabled: boolean;
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};
const KEYS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default function Keyboard({
  activeLetters,
  disabled = false,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div className="grid grid-cols-5 gap-3 w-full lg:grid-cols-10 mt-10 md:grid-cols-7">
      {KEYS.map((key) => {
        // array to store the active letters
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            key={key}
            disabled={isInactive || isActive || disabled}
            className={`border-2 p-3 text-2xl uppercase font-bold
              ${isInactive ? "bg-gray-400 text-gray-100 cursor-not-allowed" : "hover:bg-sky-300 hover:scale-130 hover:text-white focus:text-white focus:hover:bg-sky-300"}
              ${isActive ? "bg-green-500 text-white" : ""}
            `}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
