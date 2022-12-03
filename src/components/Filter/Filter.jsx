import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { FilterInput, Title, FilterWrap } from './Filter.styled';
import { setFilterValue } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <FilterWrap>
      <Title>Find contact by name</Title>
      <Formik>
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeFilter}
          autoComplete="off"
        ></FilterInput>
      </Formik>
    </FilterWrap>
  );
};
