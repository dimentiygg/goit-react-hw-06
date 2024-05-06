import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <FaUser size={20} className={css.user} />
        <p className={css.text}>{name}</p>
        <FaPhoneAlt size={20} className={css.phone} />
        <p className={css.text}>{number}</p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
