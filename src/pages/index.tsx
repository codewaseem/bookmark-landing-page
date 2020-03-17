import React from "react";
import { observer } from "mobx-react-lite";
import { FormattedMessage } from "gatsby-plugin-intl";
import Layout from "../components/layout";

export const Index = () => {
  return (
    <Layout>
      <h1>
        <FormattedMessage id="hello_world" />
      </h1>
    </Layout>
  );
};

export default observer(Index);
