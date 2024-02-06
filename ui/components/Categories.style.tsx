import { device } from "@/models/devices";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  padding: 0 1em;
  display: flex;
  margin: 0 auto;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  margin-right: 2em;
  align-items: center;
  width: 70%;
  padding: 0.5em 2em;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  white-space: nowrap;
  gap: 1em;

  @media screen and (${device.tablet}) {
    width: 70%;
    justify-content: space-evenly;
    overflow-x: hidden;
    margin: 0 auto;
  }
`;

export const NextLink = styled(Link)`
  padding: 0 0.5rem;
  font-family: 'Fraunces', serif;
  font-weight: 400;

  &:hover {
    color: #ffffff;
  
  }
  @media screen and (${device.tablet}) {
    padding: 0;
    font-size: 1.2rem;
  }
  @media screen and (${device.laptopL}) {
    font-size: 1.5rem;
  }
`;

export const ButtonContainer = styled.div`
@media screen and (${device.tablet}) {
    display: none;
}
`;
export const Button = styled.button`
  background: #cc930281;
  border-radius: 100px;
  outline: none;
  border: none;
  padding: 0 0.2em;
  margin: 0 0.3em;
`;

export const RightSymbolImage = styled(Image)`
  transform: rotate(180deg);
`;