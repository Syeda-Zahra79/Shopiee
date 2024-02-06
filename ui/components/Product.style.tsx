import Image from "next/image";
import styled from "styled-components";
import { device } from "@/models/devices";

export const Container = styled.div`
  width: 80%;
  margin: auto;
  background-color: #ffc11780;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media screen and (${device.tablet}) {
    flex-direction: row;
  }
`;


export const Id = styled.p`
  margin-top: 0;
  font-size: .8rem;
  font-weight: bold;
`;

export const Title = styled.h1`
  font-size: 1.5rem;

  @media screen and (${device.tablet}) {
    font-size: 2rem;
  }
`;

export const CartButton = styled.button`
  width: 100%;
  background-color: #ffb901;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0;

  /* border-radius: 15px; */
  cursor: pointer;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  margin-top: 2em;

  @media screen and (${device.tablet}) {
    margin: 0rem 0rem 0 4rem;
    width: 50%;
  }
  /* position: relative; */
`;

export const DescriptionMiddle = styled.div`
  width:100%;

  @media screen and (${device.tablet}) {
    width: 85%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  height: 41px;
  margin: 1rem 0rem 0.5rem;
`;

export const QuantityButton = styled.button`
  background: white;
  color: black;
  font-size: 1.3rem;
  font-weight: semibold;
  width: 30px;
  height: 30px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 50%;
`;

export const IncrementButton = styled(QuantityButton)`
  margin-right: 1rem;
`;

export const DecrementButton = styled(QuantityButton)`
  margin-left: 1rem;
`;

export const Quantity = styled.p`
  font-size: 1.2rem;
  bottom: 1rem;
`;

export const Price = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const PriceContainer = styled.div`
  margin-top: 0.3rem;
  margin-bottom: 1em;
`;

export const DescriptionText = styled.p`
  margin: 1rem 0;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  background-color: white;
  
  @media screen and (${device.tablet}) {
    width: 50%;   
  }
`;

export const ImageContainer = styled(Image)`
  @media screen and (${device.mobileL}) {
    transform:scale(0.7);
  }
  @media screen and (${device.tablet}) {
    transform:scale(0.9);
  }
`