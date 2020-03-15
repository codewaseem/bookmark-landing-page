import React from "react";
import useStores from "../hooks/useStores";
import { observer } from "mobx-react-lite";

export const Index = () => {
  let stores = useStores();

  return (
    <div>
      <h1>
        Hello, world! adsfnalksdfj klasdjfalksd fasdfladflakjdf alsdkf jaldfjldd
        adflakj asfjlaksdf alakdsfjjk
      </h1>

      <section>
        <h1>Counter Store</h1>
        <p>Current Value: {stores.counter.count}</p>
        <p>Computed Double: {stores.counter.doubleCount}</p>

        <button onClick={stores.counter.increment}>Increament</button>
        <button onClick={stores.counter.decrement}>Decrement</button>
      </section>

      <section>
        <h1>Theme store</h1>
        <div
          style={{
            backgroundColor: stores.theme.themeColor,
            width: 200,
            height: 200,
          }}
        ></div>
        <button onClick={stores.theme.toggleThemeColor}>Toggle Theme</button>
      </section>
    </div>
  );
};

export default observer(Index);
