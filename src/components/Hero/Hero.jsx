import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import './Hero.css'

const Hero = ({ searchInput, setSearch, setSearchInput}) => {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <Navbar />

      <div className="hero-content">
        <h1>Find Your Perfect Stay</h1>

        <p>
          Discover comfortable hotels across India with the best prices and
          ratings.
        </p>

        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setSearch={setSearch}
        />
      </div>
    </section>
  );
}

export default Hero