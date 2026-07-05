import { createContext, useState, useContext, useEffect } from "react";

const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // Load favourites from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("favourites");
    if (saved) {
      setFavourites(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever favourites changes
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addFavourite = (hotel) => {
    setFavourites((prev) => {
      // Check if hotel is already in favourites
      if (prev.find((h) => h.id === hotel.id)) {
        return prev;
      }
      return [...prev, hotel];
    });
  };

  const removeFavourite = (hotelId) => {
    setFavourites((prev) => prev.filter((h) => h.id !== hotelId));
  };

  const isFavourite = (hotelId) => {
    return favourites.some((h) => h.id === hotelId);
  };

  const getFavourites = () => {
    return favourites;
  };

  const value = {
    favourites,
    addFavourite,
    removeFavourite,
    isFavourite,
    getFavourites,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourites = () => {
  const context = useContext(FavouriteContext);
  if (!context) {
    throw new Error("useFavourites must be used within FavouriteProvider");
  }
  return context;
};
