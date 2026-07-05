import Navbar from "../../components/Navbar/Navbar"
import { useFavourites } from "../../context/FavouriteContext"
import HotelCard from "../../components/HotelCard/HotelCard"
import "./Favourites.css"

const Favourites = () => {
  const { favourites } = useFavourites()

  return (
    <div>
      <Navbar/>
      <section className="favourites-section">
        <div className="favourites-header">
          <h1>My Favourite Hotels</h1>
          <p>{favourites.length} hotel{favourites.length !== 1 ? 's' : ''} saved</p>
        </div>

        {favourites.length > 0 ? (
          <div className="hotel-grid">
            {favourites.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>No Favourite Hotels Yet</h2>
            <p>Start exploring and add your favourite hotels!</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default Favourites