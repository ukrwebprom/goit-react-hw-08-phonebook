import { MdDeleteOutline } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import './contactlist.scss'

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className='list-item'>
      <p className='list-content list-name'>{name}</p>
      <p className='list-content'>{number}</p>
      <button className='del-btn'
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        <MdDeleteOutline size={25}/>
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
