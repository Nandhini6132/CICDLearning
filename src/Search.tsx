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
          //  handleSearchDebouce(value)
           }}
          
        />
        <button onClick={handleSearch}>search</button>
      </div>{' '}
      <br /> <br />
    </>
  );
};

export default React.memo(Search);

