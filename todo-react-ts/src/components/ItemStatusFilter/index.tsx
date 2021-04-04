import React, { FC } from 'react';
import './styles.css';

import { Filter } from '../../types';

type ItemStatusFilterProps = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

type ButtonProps = {
  filter: Filter;
  btnFilter: Filter;
  setFilter: (filter: Filter) => void;
  title: string;
};

const Button: FC<ButtonProps> = ({ filter, btnFilter, setFilter, title }) => {
  const isActive = (btnFilter: Filter) => btnFilter === filter;

  return (
    <button
      type="button"
      className={`btn ${isActive(btnFilter) ? 'btn-info' : 'btn-outline-secondary'}`}
      onClick={() => setFilter(btnFilter)}
    >
      {title}
    </button>
  );
};

const ItemStatusFilter: FC<ItemStatusFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="btn-group">
      <Button filter={filter} btnFilter={Filter.All} setFilter={setFilter} title="All" />
      <Button filter={filter} btnFilter={Filter.Active} setFilter={setFilter} title="Active" />
      <Button filter={filter} btnFilter={Filter.Done} setFilter={setFilter} title="Done" />
      <Button
        filter={filter}
        btnFilter={Filter.Important}
        setFilter={setFilter}
        title="Important"
      />
    </div>
  );
};

export default ItemStatusFilter;
