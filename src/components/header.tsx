import React from "react";
// eslint-disable-next-line no-unused-vars
import { css } from "@emotion/core";

interface headerProps extends React.AllHTMLAttributes<any> {}

export const PureHeader: React.FC<headerProps> = ({ ...props }) => {
  return (
    <header
      css={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 30,
      }}
      {...props}
    >
      <div>
        <img src="/images/logo-bookmark.svg" alt="Welcome to Bookmark It" />
      </div>
      <nav>
        <h1 className="sr-only">Navigation</h1>
        <span>
          <img src="/images/icon-hamburger.svg" alt="Open Navigation" />
        </span>
      </nav>
    </header>
  );
};

export default PureHeader;
