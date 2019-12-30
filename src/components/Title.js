import React from "react"
import styled from "styled-components"

export default function Title({ title, subtitle }) {
  return (
    <TitlWrapper>
      <h4>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h4>
    </TitlWrapper>
  )
}

const TitlWrapper = styled.div`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }
  .title {
    color: var(--mainBlack);
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
