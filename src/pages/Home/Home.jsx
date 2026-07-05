import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Filters from "../../components/Filters/Filters";
import { getHotels } from "../../services/api";
import HotelCard from "../../components/HotelCard/HotelCard";
import "./Home.css";

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setLoading(true);
        const filters = {
          search: search,
        };

        // Handle price filter
        if (priceFilter === "below") {
          filters.maxPrice = 2000;
        } else if (priceFilter === "2000-5000") {
          filters.minPrice = 2000;
          filters.maxPrice = 5000;
        } else if (priceFilter === "above") {
          filters.minPrice = 5000;
        }

        // Handle rating filter
        if (ratingFilter === "5") {
          filters.rating = 5;
        } else if (ratingFilter === "4") {
          filters.minRating = 4;
        } else if (ratingFilter === "3") {
          filters.minRating = 3;
        }

        // Handle sorting
        if (sortBy === "price-asc") {
          filters.sortBy = "price";
        } else if (sortBy === "price-desc") {
          filters.sortBy = "-price";
        } else if (sortBy === "rating") {
          filters.sortBy = "-rating";
        }

        const hotels = await getHotels(filters);
        setHotels(hotels);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [search, priceFilter, ratingFilter, sortBy]);

  return (
    <>
      <Hero
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSearch={setSearch}
      />
      <Filters
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <section className="hotel-section">
        <div className="hotel-grid">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </section>

      {loading && <h2>Loading Hotels...</h2>}

      {error && <h2>{error}</h2>}
    </>
  );
};

export default Home;