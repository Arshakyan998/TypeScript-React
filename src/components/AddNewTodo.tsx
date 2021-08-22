import React from "react";

interface Props {
  newTodo: (val: string) => void;
}

export const AddNewTodo: React.FC<Props> = ({ newTodo }) => {
  const [value, setValue] = React.useState<string>("");

  const addNewToDo = (e: React.FormEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };



  const addToDo = () => {
    if (value === "") {
      return;
    }

    newTodo(value);
    setValue("");
  };

  return (
    <div style={{ width: "100%" }}>
      <input
        type="text"
        onChange={addNewToDo}
        value={value}
        placeholder="Добавить дело"
        style={{ border: "none", fontSize: "55px" }}
      />
<button onClick={addToDo} style={{background:"transparent",
border:"1px solid teal",
 color:"teal",
 fontSize:"25px"}}> Add</button>
    </div>
  );
};
