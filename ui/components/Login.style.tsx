import { device } from "@/models/devices";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffee0483;
  width: 60%;
  height: fit-content;
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (${device.laptop}) {
    width: 30%;
    border: 1px solid purple;
  }

  @media screen and (${device.desktop}) {
    padding: 2em;
  }
`;


export const Title = styled.h1`
  text-align: center;
  border-bottom: 2px solid #ffb901;
  width: fit-content;
  z-index: 200;

  
  @media screen and (${device.laptopL}) {
    font-size: 2.5rem;
    margin-bottom: 4%;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  background-color: #ffb901;
  height: 2px;
  width: 83px;
  position: absolute;
  margin: 0 auto;
  top: 213px;
  left: 633px;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 80%;
  margin: auto;
  padding: 0.5rem;
  
  @media screen and (${device.laptopL}) {
    font-size: 1.3rem;
    padding: 1rem;
  }
`;

export const Label = styled.label`
  width: 80%;
  margin: 1rem auto;

  @media screen and (${device.laptopL}) {
    font-size: 1.3rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: #ffb901;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 25px;
  margin-bottom: 0.8rem;
  cursor: pointer;

  
  @media screen and (${device.laptopL}) {
    font-size: 1.3rem;
    border-radius: 30px;
    padding: 1rem 1.5rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2.5rem auto 1rem;
`;

export const CreateAccount = styled.p`
  width: fit-content;
  margin: auto;

  @media screen and (${device.laptopL}) {
    font-size: 1.3rem;
  }
`;
