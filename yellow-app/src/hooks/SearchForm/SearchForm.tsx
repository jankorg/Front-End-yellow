import React, {memo, useState} from 'react';
import './SearchForm.scss';

interface SearchMemo{
  searchQuery: string;
  onClick: any; 
  searchResult: string;
}
const SearchForm= memo(
  (SearchProps: SearchMemo) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSubmit = (event: any) => {
      setSearchTerm(event.target.value);
      SearchProps.onClick(event);
    }
  
     return (
  
      <form className="SearchForm" onSubmit={handleSubmit} method="GET" role="search">
        <input 
          type="text" className="search-input" 
          aria-label="Nunca dejes de buscar" 
          name="search" 
          placeholder="Nunca dejes de buscar"
          >
        </input>
        <button type="submit" className="nav-search-btn" >
          <div role="img" aria-label="Buscar" className="nav-icon-search" onClick={handleSubmit}>Buscar</div>
        </button>
      </form>
     );
  }
) 

export default SearchForm;
