import { useState } from 'react';
import { Filter, Todo } from '../../types';

const isRightTodo = (el: Todo, filter: Filter, searchTerm: string) => {
  let isRight = true;
  switch (filter) {
    case Filter.Active:
      isRight = !el.done;
      break;
    case Filter.Done:
      isRight = el.done;
      break;
    case Filter.Important:
      isRight = el.important;
      break;
    default:
      isRight = true;
      break;
  }

  return searchTerm.length > 0
    ? el.label.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) && isRight
    : isRight;
};

export const useFilters = (todos: Todo[]) => {
  const [filter, setFilter] = useState(Filter.All);
  const [searchTerm, setSearchTerm] = useState('');

  const { toDo, done, filteredTodos } = todos.reduce(
    (acc, el) => {
      return {
        toDo: acc.toDo + Number(!el.done),
        done: acc.done + Number(el.done),
        filteredTodos: isRightTodo(el, filter, searchTerm)
          ? [...acc.filteredTodos, el]
          : acc.filteredTodos,
      };
    },
    {
      toDo: 0,
      done: 0,
      filteredTodos: [],
    } as {
      toDo: number;
      done: number;
      filteredTodos: Todo[];
    },
  );

  return {
    toDo,
    done,
    setFilter,
    filter,
    setSearchTerm,
    searchTerm,
    filteredTodos,
  };
};
