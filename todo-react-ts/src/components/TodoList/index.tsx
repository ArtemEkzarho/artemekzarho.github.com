import React, { FC } from 'react';

import TodoListItem from '../TodoListItem';
import './styles.css';
import { Todo } from '../../types';

type TodoListProps = {
  todos: Todo[];
  onDeleteted: (id: string) => void;
  onToggleDone: (id: string) => void;
  onToggleImportant: (id: string) => void;
};

const TodoList: FC<TodoListProps> = ({ todos, onDeleteted, onToggleDone, onToggleImportant }) => (
  <ul className="list-group todo-list">
    {todos.map(({ id, ...rest }) => (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...rest}
          onDeleteted={() => onDeleteted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
