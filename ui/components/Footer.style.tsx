import { device } from "@/models/devices";
import styled from "styled-components";


export const Container = styled.div`
  background-color: #025174;
  color: white;
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 2rem;
`;

export const FirstContainer = styled.div`
  padding: 1rem 3rem 0.4rem;
  display: flex;
  flex-direction: column;

  @media screen and (${device.tablet}) {
    flex-direction: row;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.35rem 2rem;
  width: 50%;

  @media screen and (${device.tablet}) {
    width: 12%;
  }
`;

export const SecondContainer = styled.div`
  color: white;
  background-color: #04405b;
  font-weight: bold;
  font-size: medium;
  width: 100%;
  padding: 0.5rem;
  text-align: center;
`;

export const Input = styled.input`
  padding: 0.4rem;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #ffb901;
  border: none;
  outline: none;
  padding: 0.4rem 1em;
  font-size: 0.9rem;
  margin-left: 0.5rem;
  font-weight: bold;
`;

export const IconsContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;