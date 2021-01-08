import styled from "styled-components";

import MoreProductImg from "../../assets/tim-toomey-pe9dvM1rQkM-unsplash.jpg";

export const MoreProductsContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${MoreProductImg});
  height: 100vh;
  max-height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;

export const MoreProductsBtn = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #a52a2a;
  color: #fff;
  transition: 0.2s ease-out;
  border-radius: 20px;

  &:hover {
    color: #fff;
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
