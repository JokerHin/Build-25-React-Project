import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const inputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="flex w-[90%] relative items-center"
      onSubmit={(e) => {
        handleAdd(e);
        // This line removes focus from the input field after the form is submitted
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder="Enter a task"
        className="w-full rounded-full py-[20px] px-[30px] text-[20px] border-none transition duration-100 shadow-md focus:shadow-2xl outline-none"
      ></input>
      <button
        className="absolute w-[50px] h-[50px] m-[12px] rounded-full right-0 border-none size-[15px] bg-blue-700 text-white duration-75 shadow-md hover:bg-blue-500 active:scale-[0.8] active:shadow-md"
        type="submit"
      >
        Go
      </button>
    </form>
  );
};

export default inputFeild;
