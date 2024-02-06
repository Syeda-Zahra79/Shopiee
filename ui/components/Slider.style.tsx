import { device } from "@/models/devices";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 98vw;
  margin: 0 auto 5em;
  padding: 0 19px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled.button`
  background: white;
  border: none;
  width: fit-content;
  outline: none;
  cursor: pointer;
  
  @media screen and (${device.tablet}) {
    padding: 0 1.5em;
  }
`;

export const SymbolBtnRight = styled(Image)`
  display: absolute;
  background-color: white;
  right: 0;
  z-index: 50;
  scale: 1;

@media screen and (${device.tablet}) {
  scale : 2;
}
`;

export const SymbolBtnLeft = styled(Image)`
  display: absolute;
  transform: rotate(180deg);
  background-color: white;
  left: 0;
  scale: 1;
  z-index: 50;

@media screen and (${device.tablet}) {
  scale :2;
}
`;


export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;
