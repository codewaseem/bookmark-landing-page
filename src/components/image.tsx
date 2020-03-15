import React from "react";
import { useStaticQuery, graphql } from "gatsby"; // to query for image data
import Img from "gatsby-image"; // to take image data and render it

const GatsbyImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Img
      style={{
        width: 100,
      }}
      fluid={data.file.childImageSharp.fluid}
      alt="Gatsby Icon"
    />
  );
};

export default GatsbyImage;
