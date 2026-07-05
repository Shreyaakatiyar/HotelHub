import './Filters.css'

const Filters = () => {
  return (
    <div className="filters">
        <div className="filter-item">
            <label>Price</label>

            <select>
                <option>Any Price</option>
                <option>Below ₹2000</option>
                <option>₹2000 - ₹5000</option>
                <option>Above ₹5000</option>
            </select>
        </div>

        <div className="filter-item">
            <label>Rating</label>

            <select>
                <option>Any Rating</option>
                <option>5</option>
                <option>4+</option>
                <option>3+</option>
            </select>
        </div>

        <div className="filter-item">
            <label>Sort By</label>

            <select>
                <option>Recommended</option>
                <option>Price Low → High</option>
                <option>Price High → Low</option>
                <option>Rating</option>
            </select>
        </div>

        <button className='apply-btn'>Apply Filters</button>
    </div>
  )
}

export default Filters