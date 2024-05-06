import { useId } from 'react';
import css from './SearchBox.module.css';
export default function SearchBox({ value, onFilter }) {
  const inputId = useId();
  return (
    <>
      <label className={css.label} htmlFor={inputId}>
        Find contact by name
      </label>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
        id={inputId}
      />
    </>
  );
}
