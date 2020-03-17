import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import useStores from "../hooks/useStores";
import { useIntl } from "gatsby-plugin-intl";
import ThemedBackground from "./themedBackground";

interface bannerProps {}

const RelativeDiv = styled.div`
  position: relative;
`;

const HeroImage = () => {
  return (
    <RelativeDiv>
      <ThemedBackground />
      <img
        css={css`
          width: 90%;
          display: block;
          max-width: 850px;
          max-height: 100%;
          margin: auto;
        `}
        src={"/images/illustration-hero.svg"}
        alt=""
      />
    </RelativeDiv>
  );
};

export const Banner: React.FC<bannerProps> = () => {
  let store = useStores();
  let intl = useIntl();

  return (
    <div
      css={css`
        min-height: 80vmin;
        width: 100%;
        text-align: center;

        > * {
          margin-top: 30px;
        }
      `}
    >
      <HeroImage />
      <section
        css={css`
          margin-top: 50px;
        `}
      >
        <article>
          <h1
            css={css`
              font-weight: bold;
              font-size: ${store.theme.headingSizes.h1};
              color: ${store.theme.colors.veryDarkBlue};
              letter-spacing: 0.05rem;
            `}
          >
            {intl.formatMessage({ id: "banner_heading" })}
          </h1>
        </article>
      </section>
    </div>
  );
};

export default Banner;
