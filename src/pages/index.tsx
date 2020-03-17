import React from "react";
import { observer } from "mobx-react-lite";
import Header from "../components/header";
import Layout from "../components/layout";

export const Index = () => {
  return (
    <Layout>
      <Header />
    </Layout>
  );
};

export default observer(Index);
