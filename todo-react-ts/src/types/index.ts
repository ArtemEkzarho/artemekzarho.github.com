export type Todo = {
  id: string;
  label: string;
  important: boolean;
  done: boolean;
};

export enum Filter {
  All = 0,
  Active = 1,
  Done = 2,
  Important = 3,
}
