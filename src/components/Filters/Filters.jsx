import './Filters.css'

const Filters = ({
  priceFilter,
  setPriceFilter,
  ratingFilter,
  setRatingFilter,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="filters">
        <div className="filter-item">
            <label>Price</label>

            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
                <option value="">Any Price</option>
                <option value="below">Below ₹2000</option>
                <option value="2000-5000">₹2000 - ₹5000</option>
                <option value="above">Above ₹5000</option>
            </select>
        </div>

        <div className="filter-item">
            <label>Rating</label>

            <select
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
            >
                <option value="">Any Rating</option>
                <option value="5">5</option>
                <option value="4">4+</option>
                <option value="3">3+</option>
            </select>
        </div>

        <div className="filter-item">
            <label>Sort By</label>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
                <option value="">Recommended</option>
                <option value="price-asc">Price Low → High</option>
                <option value="price-desc">Price High → Low</option>
                <option value="rating">Rating</option>
            </select>
        </div>
    </div>
  )
}

export default Filters