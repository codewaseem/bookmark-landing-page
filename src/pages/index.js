import React from "react"
import Container from "../components/container"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const buttonStyle = props => css`
  background-color: ${props.backgroundColor || "white"};
  color: ${props.color || "black"};
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 6px 10px -4px rgba(0, 0, 0, 0.4);

  &:hover {
    transform: translateY(1px);
    box-shadow: 0px 3px 10px -3px rgba(0, 0, 0, 0.4);
  }
`

const Button = styled.button`
  ${buttonStyle}
`

const IndexPage = () => (
  <Container>
    <div
      css={css`
        background-color: rgba(215, 0, 0, 0.2);
        padding: 1rem;
        & p {
        }
      `}
    >
      <p>Hello, World!</p>
      <Button backgroundColor="white" color="black">
        Click Me!
      </Button>
    </div>
  </Container>
)

export default IndexPage
