import React, { FC } from 'react';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';
import { useActions } from './useActions';
import { useFilters } from './useFilters';

import './styles.css';

const App: FC = () => {
  const { todos, addItem, deleteItem, toggleProperty } = useActions();
  const { toDo, done, setFilter, filter, setSearchTerm, searchTerm, filteredTodos } = useFilters(
    Object.values(todos),
  );

  return (
    <div className="todo-app">
      <AppHeader toDo={toDo} done={done} />
      <div className="top-panel d-flex">
        <SearchPanel searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ItemStatusFilter filter={filter} setFilter={setFilter} />
      </div>

      <TodoList
        todos={filteredTodos}
        onDeleteted={deleteItem}
        onToggleDone={toggleProperty('done')}
        onToggleImportant={toggleProperty('important')}
      />
      <ItemAddForm onAdded={addItem} />
    </div>
  );
};

export default App;
