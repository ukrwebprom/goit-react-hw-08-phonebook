import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';
import './filter.scss';

export function Filter() {
  const dispatch = useDispatch();
  return (
    <label className='filter-label'>
      Find contacts by name
      <input
        type="text"
        onChange={e => dispatch(updateFilter(e.target.value))}
      />
    </label>
  );
}
