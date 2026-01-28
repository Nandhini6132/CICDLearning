import React from 'react';

const Search = ({
  setSearch,
  handleSearch,
  search,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
  
}) => {
  console.log('child');

  const a='ci cd'
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search user by name or email"
          value={search}
          onChange={(e) => {
            const value=e.target.value
            setSearch(value)
         
           }}
          
        />
        <button onClick={handleSearch}>Search user by name</button>
      </div>{' '}
      <br /> <br />
    </>
  );
};

export default React.memo(Search);

