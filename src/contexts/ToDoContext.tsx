import * as React from "react";
/** Custom types */
import { ActionType } from "../custom-types";

interface IState {
  toDoList: Array<{ id: number; todo?: string; complete?: boolean }>;
}

interface IAction {
  type: ActionType;
  payload: {
    id: number;
    todo?: string;
    complete?: boolean;
  };
}
interface ItodoContextInterface {
  state: {
    toDoList: Array<{ id: number; todo?: string; complete?: boolean }>;
  };
  updateTodoList: React.Dispatch<IAction>;
}

const initialState: IState = {
  toDoList: []
};

const reducer: React.Reducer<IState, IAction> = (state, action) => {
  console.log("inside reducer");
  switch (action.type) {
    case ActionType.add:
      return { toDoList: [...state.toDoList, action.payload] };
    case ActionType.delete:
      const filteredTodo = state.toDoList.filter(
        todo => todo.id !== action.payload.id
      );
      return {
        toDoList: filteredTodo
      };
    case ActionType.updateStatus:
      const newTodoList = state.toDoList.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
      return {
        toDoList: newTodoList
      };
    default:
      throw new Error();
  }
};

export const todoContext = React.createContext<ItodoContextInterface>({
  updateTodoList: () => {},
  state: {
    toDoList: []
  }
});

const { Provider } = todoContext;

const TODOProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [toDoList, updateTodoList] = React.useReducer(reducer, initialState);
  return (
    <Provider value={{ state: toDoList, updateTodoList }}>{children}</Provider>
  );
};

export default TODOProvider;
