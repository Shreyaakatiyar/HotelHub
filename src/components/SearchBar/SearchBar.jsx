import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="search-box">
        <input
        type="text"
        placeholder="Search hotels, cities or locations..."
        />

        <button>Search</button>
    </div>
  )
}

export default SearchBar