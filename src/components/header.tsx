import React from "react";
// eslint-disable-next-line no-unused-vars
import { css } from "@emotion/core";
import useStores from "../hooks/useStores";

interface headerProps extends React.AllHTMLAttributes<any> {}

export const PureHeader: React.FC<headerProps> = ({ ...props }) => {
  let store = useStores();
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
        <span
          css={css`
            @media screen and (min-width: 850px) {
              display: none;
            }
          `}
        >
          <img src="/images/icon-hamburger.svg" alt="Open Navigation" />
        </span>
        <ul
          css={css`
            list-style: none;
            > * {
              padding: 10px 35px;
              flex: 1;
              cursor: pointer;
              text-transform: uppercase;

              :hover {
                color: ${store.theme.colors.softRed};
              }
            }
            display: none;
            @media screen and (min-width: 850px) {
              display: flex;
            }
          `}
        >
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li
            css={css`
              background: ${store.theme.colors.softRed};
              color: white;
              border-radius: 5px;
              box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
              border: 1px solid ${store.theme.colors.softRed};

              :hover {
                background: white;
              }
            `}
          >
            Login
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PureHeader;
