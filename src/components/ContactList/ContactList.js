import s from './ContactList.module.css';
import IconButton from '../IconButton/IconButton';
import { ReactComponent as Del } from '../../img/trash.svg';
import { ReactComponent as IconPhone } from '../../img/call.svg';
import { ReactComponent as IconUser } from '../../img/user.svg';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={s.filter}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

const ContactList = ({ contacts, filter, onChangeFilter, onDeleteContact }) => {
  const contactList = contacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        <div className={s.contact}>
          <div>
            <IconUser width="13" height="13" />
            <p>{name}</p>
          </div>
          <div>
            <IconPhone width="13" height="13" />
            <a href={`tel:${number}`}>{number}</a>
          </div>
        </div>
        <IconButton
          onClick={() => onDeleteContact(id)}
          title="delete"
          aria-label="Добавить заметку"
        >
          <Del width="13" height="13" />
        </IconButton>
      </li>
    );
  });

  return (
    <div className={s.contacts}>
      {!!contacts.length ? (
        <Filter value={filter} onChangeFilter={onChangeFilter} />
      ) : (
        <div>
          <p>Запрашиваемых данных "{filter}" нет в списке контактов</p>
          <button type="button" onClick={() => onChangeFilter('')}>
            Вернуться к списку
          </button>
        </div>
      )}
      <ul>{contactList.reverse()}</ul>
    </div>
  );
};

export default ContactList;
