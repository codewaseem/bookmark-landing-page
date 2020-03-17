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

const StyledButton = styled.button`
  padding: 0.8rem 1rem;
  border-radius: 5px;
  background-color: transparent;
  border: 0;
  margin: 10px;
  font-weight: bolder;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
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
      <div
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
          <p
            css={css`
              padding: 20px 40px;
              max-width: 340px;
              color: ${store.theme.colors.grayishBlue};
              line-height: 2;
            `}
          >
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div>
            <StyledButton
              style={{
                backgroundColor: `${store.theme.colors.softBlue}`,
                color: "white",
              }}
            >
              Get it on Chrome
            </StyledButton>
            <StyledButton
              style={{
                color: `${store.theme.colors.veryDarkBlue}`,
              }}
            >
              Get it on Firefox
            </StyledButton>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Banner;
