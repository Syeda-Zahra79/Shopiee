import styled from "styled-components";
import { device } from "@/models/devices";

export const Container = styled.div`
  width: 70%;
  padding: 2em;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #ffee0483;
`;

export const InputLong = styled.input`
  width: 100%;
  height: 2rem;
  outline: none;
`;

export const InputShort = styled.input`
  width: 100%;
  height: 2rem;
  outline: none;
`;

export const Span = styled.span`
  margin: 2%;
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (${device.laptop}) {
    flex-direction: row;
  }
`;
export const MiddleInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (${device.laptop}) {
    flex-direction: row;
    width: 70%;
  }
`;



export const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Heading = styled.h1`
  border-bottom: 3px solid #ffb901;
  font-family: 'Fraunces', serif;
  font-size: 2.8rem;
  margin: 2% 0;
  `;

export const HeadingTop = styled.h1`
  font-weight: 400;
  font-size: 2rem;
  margin: 2% 4%;
`;

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2% 4%;
  flex-direction: column;

  @media screen and (${device.laptop}) {
    flex-direction: row;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${device.tablet}) {
    margin-top: 0em;
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
`;

export const TypeSpan = styled.div`
  display: flex;
  margin-top: 0.7em;
`;

export const RadioInput = styled.input`
  margin-right: 1em;
`;
