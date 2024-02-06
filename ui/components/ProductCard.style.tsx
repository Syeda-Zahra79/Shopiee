import styled from "styled-components";
import { device } from "@/models/devices";

export const Container = styled.div`
  display: flex;
  background-color: white;
  margin: .4em;
  flex-direction: column-reverse;
  align-items: flex-end;

  @media screen and (${device.tablet}) {
    flex-direction: row;
    align-items: flex-start;
  }

  @media screen and (${device.laptop}) {
    margin: 2em 2.5em; 
  }
`;
export const Title = styled.h3`
  font-family: "Times New Roman", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

export const ImageWrapper = styled.div`
  background-color: #ffee0483;
  padding: 1.5rem 0.5rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;


  @media screen and (${device.tablet}) {
    width: auto;
  }
`;

export const ContentWrapper = styled.div`
  padding: 0 1em;
  width: auto;
  margin: 1em 0;
`;


export const ProductRatingAndQauntity = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media screen and (${device.tablet}) {
    flex-direction: row;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;


export const PriceText = styled.p`
  margin: 0%;
  padding: 0;
  font-size: 1rem;
  display: inline;
  font-weight: normal;
`;


export const PriceContainer = styled.div`
  padding: 0 2em;
  font-size: 1.3rem;
  display: flex;
  white-space: nowrap;
  gap: .5em;
  width: 100%;
  display: none;
  @media screen and (${device.laptop}) {
    display: inline;
    width: fit-content;
    font-weight: bold;
    margin-left: 10%;
    
  }
`;

export const Buttons = styled.div`
  display: flex;
`;

export const Quantity = styled.p`

@media screen and (${device.laptop}) {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
`;

export const QuantityButton = styled.button`
  margin: 0em 1em;
  font-weight: semibold;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #ffee0483;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 1rem;
  @media screen and (${device.laptop}) {
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
     
  }
`;

export const CloseButton = styled.button`
  margin: 0.5em;
  font-size: 1.5rem;
  font-weight: semibold;
  width: 40px;
  height: 40px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #ffee0483;
  border-radius: 50%;
`;