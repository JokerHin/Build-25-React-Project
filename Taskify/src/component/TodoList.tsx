import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: Props) => {
  const handleComplete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    const completedTodo = todos.find((todo) => todo.id === id);
    if (completedTodo) {
      setTodos(newTodos);
      setCompletedTodos([
        ...completedTodos,
        { ...completedTodo, isDone: true },
      ]);
    }
  };

  return (
    <div className="flex flex-wrap w-[90%] justify-center items-start ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 items-start justify-between w-full">
        <div className="p-4 flex flex-wrap w-full justify-center mt-5 border-white border-2 bg-sky-400 rounded-md flex-grow overflow-y-auto">
          <div className=" w-full text-2xl font-semibold text-white text-left">
            Active Tasks
          </div>
          <div className="w-full">
            {todos && todos.length > 0 ? (
              todos.map((todo) => (
                <div key={todo.id}>
                  <SingleTodo
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                    onComplete={handleComplete}
                  />
                </div>
              ))
            ) : (
              <p className="text-xl font-semibold mt-[40px] text-center w-full">
                No task available
              </p>
            )}
          </div>
        </div>
        <div className="p-4 flex flex-wrap w-full justify-center mt-5 border-white border-2 bg-red-400 flex-grow overflow-y-auto">
          <div className=" w-full text-2xl font-semibold text-white text-left">
            Completed Tasks
          </div>
          <div className="w-full">
            {completedTodos && completedTodos.length > 0 ? (
              completedTodos.map((todo) => (
                <div key={todo.id}>
                  <SingleTodo
                    todo={todo}
                    todos={completedTodos}
                    setTodos={setCompletedTodos}
                  />
                </div>
              ))
            ) : (
              <div className="text-xl font-semibold mt-[40px] text-center w-full">
                No task completed
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
