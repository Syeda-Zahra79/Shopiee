import styled from "styled-components";
import { device } from "@/models/devices";

export const Container = styled.div`
  width: 80vw;
  position:relative;
  left: -80%;
  margin-top:.5em;
  display: flex;
  background-color: #ffffff;
  align-items: center;
  margin: 0.5em 0;
  @media screen and (${device.tablet}) {
    position: relative;
    left: 0;
    margin: 0;
    width:100%;
    border: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;

@media screen and (${device.tablet}) { 
  padding: 1em;
  font-size: 0.8rem;
}
`

export const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding-right: 1em;
  
  transition: animation 3ms ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`