import React, {useState} from "react";
import {createContext} from "react";

interface IFavoriteContext {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

interface IFavoritesContextProvider {
  children: React.ReactNode;
}

const FavoritesContextValue: IFavoriteContext = {
  ids: [],
  addFavorite: (id) => {
    console.log("ADDED", id);
  },
  removeFavorite: (id) => {
    console.log("REMOVED", id);
  },
};

export const FavoritesContext = createContext(FavoritesContextValue);

export function FavoritesContextProvider({
  children,
}: IFavoritesContextProvider) {
  const [favoritesIDs, setFavoritesIDs] = useState<string[]>([]);

  function addFavorite(id: string) {
    setFavoritesIDs((prev) => [...prev, id]);
  }

  function removeFavorite(id: string) {
    setFavoritesIDs((prev) => [...prev.filter((mealID) => id !== mealID)]);
  }

  const value = {
    ids: favoritesIDs,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
