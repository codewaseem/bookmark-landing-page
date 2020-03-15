import React from "react";

// eslint-disable-next-line no-unused-vars
import { CounterStore, ThemeStore } from "../stores";

type Stores = {
  counter: CounterStore;
  theme: ThemeStore;
};

export default React.createContext<Stores | null>(null);
