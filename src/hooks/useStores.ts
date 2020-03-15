import React from "react";
import StoreContext from "../contexts/StoresContext";

export default () => {
  const stores = React.useContext(StoreContext);
  if (!stores) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return stores;
};
