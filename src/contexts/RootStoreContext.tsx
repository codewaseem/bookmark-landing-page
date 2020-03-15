import React from "react";
import { CounterStore, ThemeStore } from "../stores";
import { useLocalStore } from "mobx-react-lite";

type Stores = {
  counter: CounterStore;
  theme: ThemeStore;
};

export const RootStoreContext = React.createContext<Stores | null>(null);

export const RootStoreProvider = ({ children }: { children: any }) => {
  const stores = useLocalStore(() => {
    return {
      counter: new CounterStore(),
      theme: new ThemeStore(),
    };
  });
  return (
    <RootStoreContext.Provider value={stores}>
      {children}
    </RootStoreContext.Provider>
  );
};
