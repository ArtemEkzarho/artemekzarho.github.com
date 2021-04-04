import React, { FC } from 'react';
import './styles.css';

type TodoListItemProps = {
  label: string;
  important: boolean;
  done: boolean;
  onDeleteted: () => void;
  onToggleDone: () => void;
  onToggleImportant: () => void;
};

const TodoListItem: FC<TodoListItemProps> = ({
  label,
  important,
  done,
  onDeleteted,
  onToggleDone,
  onToggleImportant,
}) => {
  return (
    <span className={`todo-list-item ${done ? 'done' : ''} ${important ? 'important' : ''}`}>
      <span className="todo-list-item-label" onClick={onToggleDone}>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleteted}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
