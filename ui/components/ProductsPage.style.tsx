import { device } from "@/models/devices";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
  flex-wrap: wrap;
  padding: 0 5%;
`;

export const Heading = styled.h1`
  display: none;
  padding: 1% 5%;
  font-weight: 300;

  @media screen and (${device.laptop}) {
    display: block;
  }
`;