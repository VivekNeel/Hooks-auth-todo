import * as React from "react";
/** Context */
import { todoContext } from "../contexts/ToDoContext";
/** Styles */
import { ToDoItem } from "../components/Styles";
/** Utils */
import { ActionType, TodoItemType } from "../custom-types";

const ToDoList: React.FC<{}> = () => {
  const { state, updateTodoList } = React.useContext(todoContext);
  return (
    <React.Fragment>
      {state.toDoList.map(({ id, todo, complete }: TodoItemType, i: number) => {
        return (
          <ToDoItem
            key={id}
            onClick={() =>
              updateTodoList({
                type: ActionType.updateStatus,
                payload: { id }
              })
            }
            complete={complete}
          >
            {i + 1}. {todo}
          </ToDoItem>
        );
      })}
    </React.Fragment>
  );
};
export default ToDoList;
