import PropTypes from 'prop-types';
import { FilterWrapper, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterWrapper>
      <label>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </label>
    </FilterWrapper>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
