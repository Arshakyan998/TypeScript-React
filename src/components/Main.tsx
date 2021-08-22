import React, { ReactElement } from "react";
import { AddNewTodo } from "./AddNewTodo";
import RenderToDos from "./RenderToDos";
import { Serch } from "./Serch";

export interface iState {
  id: number;
  completed?: Boolean;
  title: string;
}

const Main: React.FC = () => {
  const [todos, setToDos] = React.useState<iState[]>([
  ]);

  const [toDoClone, setToDoClone] = React.useState<iState[]>([...todos]);
 

const fetchToDos=async()=>{
        try {
        const response=await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
        const result=await response.json()
        setToDos([...result]);
        setToDoClone([...result])
 
        } catch (e) {
                console.error(e.messege);
                
        }
}
  
  React.useEffect(()=>{
 fetchToDos()
  },[])
  
  const RemoveItem = (id: number) => {
    const result = todos.filter((element) => element.id !== id);
    const resForClone = toDoClone.filter((element) => element.id !== id);

    setToDos(result);
    setToDoClone(resForClone);
  };

  const cgnageTodoComplited = (id: number) => {
    let newState = todos.filter((element) => {
      if (element.id === id) {
        element.completed = !element.completed;
      }
      return element;
    });
    setToDos(newState);
  };

  const newTodo = (val: string) => {
    const result = {
      id: Date.now(),
      completed: false,
      title: val,
    };

    

    setToDos([...todos, result]);
    setToDoClone([...toDoClone, result]);
  };

  const serchInToDo = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.value !== "") {
      let result = [...todos].filter((element) =>
        element.title.toLowerCase().includes(e.currentTarget.value.toLowerCase())
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
