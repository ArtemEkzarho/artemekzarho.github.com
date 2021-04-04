import React, { FC } from 'react';
import './styles.css';

type SearchPanelProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const SearchPanel: FC<SearchPanelProps> = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    className="form-control search-input"
    placeholder="type to search"
    value={searchTerm}
    onChange={e => setSearchTerm(e.target.value)}
  />
);

export default SearchPanel;
