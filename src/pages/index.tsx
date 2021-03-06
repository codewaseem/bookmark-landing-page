import React from "react";
import { observer } from "mobx-react-lite";
import Header from "../components/header";
import Layout from "../components/layout";
import Banner from "../components/banner";

export const Index = () => {
  return (
    <Layout>
      <Header />
      <Banner />
    </Layout>
  );
};

export default observer(Index);
