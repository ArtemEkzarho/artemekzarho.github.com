import { useState } from 'react';
import { nanoid } from 'nanoid';

import { Todo } from '../../types';
import { todoData } from './data';

import './styles.css';

export const useActions = () => {
  const [todos, setTodos] = useState(
    todoData.reduce((acc, el) => ({ ...acc, [el.id]: el }), {} as Record<string, Todo>),
  );

  const deleteItem = (id: string) => {
    const { [id]: remove, ...rest } = todos;
    setTodos(rest);
  };

  const addItem = (text: string) => {
    const id = nanoid();

    setTodos({
      ...todos,
      [id]: {
        label: text,
        important: false,
        done: false,
        id,
      },
    });
  };

  const toggleProperty = (prop: 'done' | 'important') => (id: string) => {
    const todo = todos[id];
    setTodos({
      ...todos,
      [todo.id]: {
        ...todo,
        [prop]: !todo[prop],
      },
    });
  };

  return {
    todos,
    addItem,
    deleteItem,
    toggleProperty,
  };
};
