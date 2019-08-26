export type UserAuth = {
  id: number;
  email: string;
};

export type TodoItemType = {
  id: number;
  todo?: string;
  complete?: boolean;
};

export enum ActionType {
  add = "ADD",
  delete = "DELETE",
  updateStatus = "UPDATE"
}
