import React, { useEffect, useState, useMemo } from 'react';
import './SearchForm.scss';
import Search from '../../hooks/SearchForm/SearchForm';
import { useHistory } from 'react-router-dom';

const SearchForm: React.FC = () => {
  const [query, setQuery] = useState(Object);
  const history = useHistory();
  const searchProps = useMemo(
    () => ({
      searchQuery: '',
      searchResult: "",
      onClick: (e: Event) => SearchFormChanged(e)
    }),
    [query]
  );

  const SearchFormChanged = (e:any) => {
    setQuery(e.target.value);
    history.push(`/items?search=${query}`);
  };
  return (
  <div className="SearchForm" data-testid="SearchForm">
    <Search {...searchProps}></Search>
  </div>
)};

export default SearchForm;
