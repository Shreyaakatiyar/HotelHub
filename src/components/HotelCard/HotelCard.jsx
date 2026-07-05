import "./HotelCard.css";
import { Link } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <div className="image-container">
        <img
          src={hotel.thumbnail}
          alt={hotel.name}
          className="hotel-image"
        />

        <div className="rating-badge">
          ⭐ {hotel.rating}
        </div>
      </div>

      <div className="hotel-info">
        <h2>{hotel.name}</h2>

        <p className="location">
          📍 {hotel.location}
        </p>

        <div className="price-section">
          <div>
            <span className="from">Starting from</span>

            <h3>₹ {Number(hotel.price).toLocaleString()}</h3>

            <span className="night">/ night</span>
          </div>
        </div>

        <Link to={`/hotel/${hotel.id}`}>
          <button className="details-btn">
            View Details →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;