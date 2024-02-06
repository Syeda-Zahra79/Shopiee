import { device } from "@/models/devices";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffb901;
  display: flex;
  flex-direction: column;
  border: none;

  @media screen and (${device.laptop}) {
    height: 80vh;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-evenly;
  }
`;

export const MidContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.5em;

  @media screen and (${device.laptop}) {
    padding-left: 6em;
    width: 50%;
    align-items: flex-start;
  }
`;

export const Paragraph = styled.p`
  margin-top: 3%;
  width: 100%;

  @media screen and (${device.laptopL}) {
    width: 80%;
    font-size: 1.3rem;
  }
  @media screen and (${device.desktop}) {
    font-size: 1.6rem;
  }
`;

export const Button = styled.button`
  background-color: #025174;
  color: #dbdbdb;
  border-radius: 25px;
  margin-top: 5%;
  padding: 1rem 1.5rem;
  outline: none;
  border: none;
  font-family: "Faster One", system-ui;

  &:hover {
    cursor: pointer;
    background-color: #0e709b;
  }
  @media screen and (${device.laptopL}) {
    font-size: 1.3rem;
  }

  @media screen and (${device.desktop}) {
    font-size: 1.6rem;
  }
`;

export const Heading = styled.h1`
  font-family: "Fraunces", serif;
  color: #181717;
  font-size: 3em;
  text-align: center;
  padding-top: 2em;

  @media screen and (${device.laptop}) {
    padding-top: 0;
    font-size: 4em;
    text-align: left;
  }

  @media screen and (${device.laptopL}) {
    font-size: 5rem;
  }
`;

export const ImageDiv = styled.div`
  height: 100%;
  display: flex;
  max-width: 100vw;
  align-items: center;
  justify-content: center;

  @media screen and (${device.laptop}) {
    align-items: flex-end;
    width: 50vw;
  }
`;

export const ImageContainer = styled.img`
  transform-origin: bottom;
  z-index: 3;

  @media screen and (${device.mobileL}) {
    transform: scale(0.7);
  }
  @media screen and (${device.tablet}) {
    transform: scale(0.8);
  }

  @media screen and (${device.laptopL}) {
    transform: scale(1);
  }

  @media screen and (${device.desktop}) {
    transform: scale(1.2);
    transform-origin: bottom;
  }
`;