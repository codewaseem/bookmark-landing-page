import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { useLocation } from "@reach/router";

import SEO from "./seo";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  lang?: string;
  image?: {
    alt: string;
    src: string;
  };
};

const Layout: React.FC<Props> = ({
  children,
  title,
  description,
  lang,
  image,
}) => {
  const location = useLocation();
  return (
    <HelmetProvider>
      <SEO
        title={title}
        description={description}
        lang={lang}
        pathname={location.pathname}
        image={image}
      />
      {children}
    </HelmetProvider>
  );
};

export default Layout;
