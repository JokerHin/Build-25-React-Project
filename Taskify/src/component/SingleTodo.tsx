import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  onComplete?: (id: number) => void;
};

const SingleTodo = ({ todo, todos, setTodos, onComplete }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [EditTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: EditTodo } : todo))
    );
    setEdit(false);
  };

  const inputref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // When the `edit` state changes, this effect runs.
    // If `edit` is true, it sets focus to the input field.
    if (edit) {
      inputref.current?.focus();
    }
  }, [edit]);

  return (
    <form
      onSubmit={(e) => handleEdit(e, todo.id)}
      className=" flex justify-between p-4 px-5 w-full bg-white list-none font-semibold gap-5 mt-5 rounded-md hover:bg-slate-200 hover:scale-[1.05] hover:transition hover:duration-150 cursor-pointer "
    >
      {edit ? (
        <input
          ref={inputref}
          type="text"
          value={EditTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="w-[300px] p-2 rounded-md text-xl border"
        />
      ) : todo.isDone ? (
        <s className="line-through">{todo.todo}</s>
      ) : (
        <span>{todo.todo}</span>
      )}

      <div className="flex">
        {!todo.isDone && (
          <>
            <span
              className="ml-[15px] cursor-pointer"
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <AiFillEdit className="size-[25px] hover:text-slate-400" />
            </span>
            <span
              className="ml-[15px] cursor-pointer"
              onClick={() => onComplete && onComplete(todo.id)}
            >
              <MdDone className="size-[25px] hover:text-green-400" />
            </span>
          </>
        )}
        <span
          className="ml-[15px] cursor-pointer"
          onClick={() => handleDelete(todo.id)}
        >
          <AiFillDelete className="size-[25px] hover:text-red-400" />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
