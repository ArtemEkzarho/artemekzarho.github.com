import React, { FC, useState } from 'react';
import './styles.css';

type ItemAddFormProps = {
  onAdded: (text: string) => void;
};

const ItemAddForm: FC<ItemAddFormProps> = ({ onAdded }) => {
  const [label, setLabel] = useState('');

  return (
    <form
      className="item-add-form d-flex"
      onSubmit={ev => {
        ev.preventDefault();
        onAdded(label);
        setLabel('');
      }}
    >
      <input
        type="text"
        value={label}
        className="form-control"
        onChange={ev => setLabel(ev.target.value)}
        placeholder="What needs to be done"
      />
      <button className="btn btn-outline-secondary" disabled={label.length === 0}>
        Add Item
      </button>
    </form>
  );
};

export default ItemAddForm;
