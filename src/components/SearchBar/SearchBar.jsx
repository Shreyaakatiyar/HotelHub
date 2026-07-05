import "./SearchBar.css";

const SearchBar = ({ searchInput, setSearchInput, setSearch }) => {
  const handleSearch = () => {
    setSearch(searchInput);
    setSearchInput("");
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search hotels..."
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
