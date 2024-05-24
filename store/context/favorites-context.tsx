import React from "react";
import {createContext} from "react";

interface IFavoriteContext {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
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
}: {
  children: React.ReactNode;
}) {
  return (
    <FavoritesContext.Provider value={FavoritesContextValue}>
      {children}
    </FavoritesContext.Provider>
  );
}
