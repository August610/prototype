import React from "react";
export const AppContext = React.createContext({
  sort: false,
  cards: [],
  editMode: false,
  changeMode: () => {},
  changeSort: () => {},
  handleUpdateNewPhone: () => {},
  handleCreateNewPhone: () => {},
  handleDeletePhone: () => {},
});
AppContext.displayName = "AppContext";
