import React from 'react';
import "../src/TodoSearch.css";


function TodoSearch() {


  const [searchValue, setSearchValue] = React.useState("");


  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}


export { TodoSearch };