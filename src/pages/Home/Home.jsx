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


  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const hotels = await getHotels(search);
        setHotels(hotels);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [search]);

  return (
    <>
      <Hero
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSearch={setSearch}
      />
      <Filters />

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