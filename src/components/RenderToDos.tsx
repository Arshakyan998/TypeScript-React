import React from "react";
import { iState } from "./Main";

interface Props {
  todo: iState[];
  RemoveItem: (id: number) => void;
  cgnageTodoComplited: (id: number) => void;
}

const RenderToDos: React.FC<Props> = ({
  todo,
  RemoveItem,
  cgnageTodoComplited,
}) => {
  const deleteItem = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    RemoveItem(id);
  };

  const changeComplited = (id: number) => {
    cgnageTodoComplited(id);
  };

  const complited = todo.filter((element) => element.completed);
  const inDoing = todo.filter((element) => element.completed === false);

  return (
    <div>
      {todo.length ? (
        [...inDoing, ...complited].map((element, i) => {
          return (
            <div key={element.id}>
              <h1
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {i+1} . {element.title}{" "}
                <input
                  type="checkbox"
                  checked={element.completed ? true : false}
                  style={{ width: "55px", height: "55px" }}
                  onChange={() => changeComplited(element.id)}
                />{" "}
         <button onClick={(e) => deleteItem(e, element.id)} 
           style={{ width: "55px", height: "55px",fontSize:"30px",textAlign:"center" }}>[X]</button>
              </h1>
            </div>
          );
        })
      ) : (
        <h1>Дел не найденно </h1>
      )}
    </div>
  );
};

export default RenderToDos;
