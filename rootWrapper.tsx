import React from "react";
import { useLocalStore } from "mobx-react-lite";
// eslint-disable-next-line no-unused-vars
import { CounterStore, ThemeStore } from "./src/stores";
import StoresContext from "./src/contexts/StoresContext";

export const StoreProvider = ({ children }: { children: any }) => {
  const stores = useLocalStore(() => {
    return {
      counter: new CounterStore(),
      theme: new ThemeStore(),
    };
  });
  return (
    <StoresContext.Provider value={stores}>{children}</StoresContext.Provider>
  );
};

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => <StoreProvider>{element}</StoreProvider>;
