import React from 'react';
import SearchBar from './Searchbar';

function Home() {
  // const [searchResults, setSearchResults] = useState([]);
  // const [userName, setUserName] = useState(''); // Store user name


  const handleSearch = (query) => {
    console.log('Searching for:', query);
    // Fetch or filter your data based on the `query`
    // setSearchResults(filteredData);
  };

  return (
    <div>

      <div className="w-1/2">
        <SearchBar onSearch={handleSearch} placeholder="Search by name, specialty..." />
      </div>
    </div>
  );
}

export default Home;
