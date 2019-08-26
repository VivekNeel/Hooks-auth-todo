import * as React from "react";

import { Button, Form } from "reactstrap";
/** Presentation */
import ErrorMessage from "./ErrorMessage";
import { Input } from "./Styles";
/** Custom Hooks */
import useErrorHandler from "../utils/custom-hooks/ErrorHandler";

import uuid from "uuid";

/** Context */
import { todoContext } from "../contexts/ToDoContext";
/** Utils */
import { ActionType } from "../custom-types";

const AddToTodo: React.FC<{}> = () => {
  const { error, showError } = useErrorHandler(null);
  const textInput = React.useRef<HTMLInputElement>(null);

  const { updateTodoList } = React.useContext(todoContext);

  console.log(React.useContext(todoContext));

  const addNewToDoItem = () => {
    if (textInput.current && textInput.current.value) {
      console.log(textInput.current.value);
      const toDo = textInput.current.value;
      const id = parseInt(uuid(), 10);
      console.log("..id", id);
      updateTodoList({
        type: ActionType.add,
        payload: { id, todo: toDo }
      });
      textInput.current.value = "";
    } else {
      showError("Please type an item before clicking add.");
    }
  };

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        addNewToDoItem();
      }}
    >
      <Input type="text" ref={textInput} placeholder="Add to do item" />
      <Button type="submit" block={true}>
        Add
      </Button>
      <br />
      {error && <ErrorMessage errorMessage={error} />}
    </Form>
  );
};

export default AddToTodo;
