const BASE_URL = "https://demohotelsapi.pythonanywhere.com/hotels/";

export async function getHotels(filters = {}) {
  let url = BASE_URL;
  const params = new URLSearchParams();

  // Add search parameter
  if (filters.search && filters.search.trim() !== "") {
    params.append("search", filters.search);
  }

  // Add price filter (exact price)
  if (filters.price) {
    params.append("price", filters.price);
  }

  // Add price range filters
  if (filters.minPrice) {
    params.append("min_price", filters.minPrice);
  }
  if (filters.maxPrice) {
    params.append("max_price", filters.maxPrice);
  }

  // Add rating filter (exact rating)
  if (filters.rating) {
    params.append("rating", filters.rating);
  }

  // Add rating range filters
  if (filters.minRating) {
    params.append("min_rating", filters.minRating);
  }
  if (filters.maxRating) {
    params.append("max_rating", filters.maxRating);
  }

  // Add location filter
  if (filters.location && filters.location.trim() !== "") {
    params.append("location", filters.location);
  }

  // Add ordering/sorting
  if (filters.sortBy) {
    params.append("order_by", filters.sortBy);
  }

  // Add pagination parameters
  if (filters.limit) {
    params.append("limit", filters.limit);
  }
  if (filters.skip) {
    params.append("skip", filters.skip);
  }

  const queryString = params.toString();
  if (queryString) {
    url += `?${queryString}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch hotels");
  }

  const data = await response.json();

  return data.data;
}