import React from "react";
// eslint-disable-next-line no-unused-vars
import { css } from "@emotion/core";

interface headerProps {}

export const PureHeader: React.FC<headerProps> = () => {
  return (
    <header
      css={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 30,
      }}
    >
      <section>
        <img src="/images/logo-bookmark.svg" alt="Welcome to Bookmark It" />
      </section>
      <nav>
        <span>
          <img src="/images/icon-hamburger.svg" alt="Open Navigation" />
        </span>
      </nav>
    </header>
  );
};

export default PureHeader;
