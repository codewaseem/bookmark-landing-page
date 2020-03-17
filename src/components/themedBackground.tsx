import React from "react";
import useStores from "../hooks/useStores";
import { css } from "@emotion/core";

const ThemedBackground = ({
  direction = "right",
  borderPosition = "left",
}: {
  direction?: "left" | "right";
  borderPosition?: "left" | "right";
}) => {
  let store = useStores();
  return (
    <div
      css={css`
        width: 80%;
        height: 77.5%;
        ${direction}: 0;
        bottom: 0;
        ${`border-bottom-${borderPosition}-radius`}: 27.5%;
        z-index: -1;
        position: absolute;
        background-color: ${store.theme.colors.softBlue};
      `}
    />
  );
};

export default ThemedBackground;
