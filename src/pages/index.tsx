import React from "react";
import useStores from "../hooks/useStores";
import { observer } from "mobx-react-lite";
import GatsbyIcon from "../components/image";
import { FormattedMessage, Link } from "gatsby-plugin-intl";
import Layout from "../components/layout";

export const Index = () => {
  let stores = useStores();
  return (
    <Layout>
      <h1>
        <FormattedMessage id="hello_world" />
      </h1>

      <Link to="/observer-component">Go Here</Link>
      <GatsbyIcon />
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
    </Layout>
  );
};

export default observer(Index);
