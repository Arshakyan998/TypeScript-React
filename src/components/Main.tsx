import React, { ReactElement } from "react";
import { AddNewTodo } from "./AddNewTodo";
import RenderToDos from "./RenderToDos";
import { Serch } from "./Serch";

export interface iState {
  id: number;
  isComplited?: Boolean;
  text: string;
}

const Main: React.FC = () => {
  const [todos, setToDos] = React.useState<iState[]>([
    {
      id: 1,
      isComplited: false,
      text: "Выучить TYPE SCRIPT",
    },

    {
      id: 2,
      isComplited: true,
      text: "Выучить React",
    },
    {
      id: 3,
      isComplited: true,
      text: "Выучить JS",
    },
  ]);

  const [toDoClone, setToDoClone] = React.useState<iState[]>([...todos]);

  const RemoveItem = (id: number) => {
    const result = todos.filter((element) => element.id !== id);
    const resForClone = toDoClone.filter((element) => element.id !== id);

    setToDos(result);
    setToDoClone(resForClone);
  };

  const cgnageTodoComplited = (id: number) => {
    let newState = todos.filter((element) => {
      if (element.id === id) {
        element.isComplited = !element.isComplited;
      }
      return element;
    });
    setToDos(newState);
  };

  const newTodo = (val: string) => {
    const result = {
      id: Date.now(),
      isComplited: false,
      text: val,
    };

    setToDos([...todos, result]);
    setToDoClone([...toDoClone, result]);
  };

  const serchInToDo = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.value !== "") {
      let result = [...todos].filter((element) =>
        element.text.toLowerCase().includes(e.currentTarget.value.toLowerCase())
      );

      setToDos(result);
    } else {
      setToDos([...toDoClone]);
    }
  };

  return (
    <div style={{ margin: "55px auto", width: "700px" }}>
      <AddNewTodo newTodo={newTodo} />
      <Serch
        placeholder={"Искать в списке"}
        onChange={serchInToDo}
        width="100%"
      />

      <RenderToDos
        cgnageTodoComplited={cgnageTodoComplited}
        RemoveItem={RemoveItem}
        todo={todos}
      />
    </div>
  );
};

export default Main;
