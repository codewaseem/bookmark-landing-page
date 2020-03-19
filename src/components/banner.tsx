import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import useStores from "../hooks/useStores";
import { useIntl } from "gatsby-plugin-intl";
import ThemedBackground from "./themedBackground";

interface bannerProps extends React.AllHTMLAttributes<any> {}

const HeroImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 375px;
  max-width: 750px;
  flex: 1;
`;

const StyledButton = styled.button`
  padding: 0.8rem 1rem;
  border-radius: 5px;
  background-color: transparent;
  border: 0;
  font-weight: bolder;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const HeroImage: React.FC<React.AllHTMLAttributes<any>> = ({ ...props }) => {
  return (
    <HeroImageContainer {...props}>
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
    </HeroImageContainer>
  );
};

export const Banner: React.FC<bannerProps> = ({ ...props }) => {
  let store = useStores();
  let intl = useIntl();

  return (
    <div
      css={css`
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        align-items: center;
        justify-content: space-between;

        @media screen and (min-width: 850px) {
          flex-direction: row-reverse;
          text-align: left;
        }
      `}
      {...props}
    >
      <HeroImage />
      <div
        css={css`
          margin: 30px;
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
              margin: 20px auto;
              max-width: 340px;
              color: ${store.theme.colors.grayishBlue};
              line-height: 2;

              @media screen and (min-width: 850px) {
                margin: 20px 0;
              }
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
                marginRight: "20px",
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
