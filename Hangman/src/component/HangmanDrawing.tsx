const HEAD = (
  <div className="w-[50px] h-[50px] rounded-full border-[10px] border-black absolute top-[50px] right-[-20px]" />
);
const BODY = (
  <div className="w-[10px] h-[100px] bg-black absolute top-[100px] right-0" />
);
const RIGHT_ARM = (
  <div className="w-[80px] h-[10px] bg-black absolute top-[130px] right-[-80px] rotate-[-30deg] origin-bottom-left" />
);
const LEFT_ARM = (
  <div className="w-[80px] h-[10px] bg-black absolute top-[130px] right-[10px] rotate-[30deg] origin-bottom-right" />
);
const RIGHT_LEG = (
  <div className="w-[80px] h-[10px] bg-black absolute top-[190px] right-[-70px] rotate-[60deg] origin-bottom-left" />
);
const LEFT_LEG = (
  <div className="w-[80px] h-[10px] bg-black absolute top-[190px] right-[0px] rotate-[-60deg] origin-bottom-right" />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrwaingProps = {
  numberOfGuesses: number;
};

export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrwaingProps) {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses).map(
        (
          part,
          index //It takes the BODY_PARTS array and limits it to the first numberOfGuesses items, then renders each item inside a <div>.
        ) => (
          <div key={index}>{part}</div>
        )
      )}
      <div className="h-[50px] w-[10px] bg-black top-0 right-0 absolute" />
      <div className="h-[10px] w-[200px] bg-black ml-[120px]" />
      <div className="h-[400px] w-[10px] bg-black mx-auto" />
      <div className="h-[10px] w-[250px] bg-black" />
    </div>
  );
}
