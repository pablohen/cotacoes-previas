import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({ onChange }) => (
  <div className="flex items-center w-full border rounded px-2">
    <SearchIcon className="text-gray-600" />
    <input
      type="text"
      placeholder="Pesquisar..."
      className="w-full p-2 outline-none text-gray-600 font-semibold"
      onChange={onChange}
    />
  </div>
);

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
