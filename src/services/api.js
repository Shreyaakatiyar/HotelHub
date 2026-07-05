const BASE_URL = "https://demohotelsapi.pythonanywhere.com/hotels/";

export async function getHotels(search = "") {
  let url = BASE_URL;

  if (search.trim() !== "") {
    url += `?search=${encodeURIComponent(search)}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch hotels");
  }

  const data = await response.json();

  return data.data;
}