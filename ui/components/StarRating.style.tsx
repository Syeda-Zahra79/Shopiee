import { device } from "@/models/devices";
import styled from "styled-components";

export const RatingContainer = styled.div`
  display: none;

  @media screen and (${device.laptop}) {
    display: flex;
    margin-bottom: 0.4rem;
    margin-left: 1em;
  }
`;

export const Star = styled.h1`
  margin: 0 0.2rem;
  font-size: 1.5rem;

  @media screen and (${device.tablet}) {
    font-size: 2rem;
  }
`;
