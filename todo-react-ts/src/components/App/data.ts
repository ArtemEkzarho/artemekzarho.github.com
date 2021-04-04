import { nanoid } from 'nanoid';

export const todoData = [
  { label: 'Drink coffee', important: false, done: false, id: nanoid() },
  { label: 'Make Awesome app', important: true, done: false, id: nanoid() },
  { label: 'Have lunch', important: false, done: true, id: nanoid() },
];
