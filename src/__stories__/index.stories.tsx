import React from "react";
import Index from "../pages";
import { storiesOf } from "@storybook/react";
import { RootStoreProvider } from "../contexts/RootStoreContext";

storiesOf("IndexPage", module)
  .addDecorator((stories) => <RootStoreProvider>{stories()}</RootStoreProvider>)
  .add("Default", () => <Index />);
