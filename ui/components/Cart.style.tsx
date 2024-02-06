import styled from "styled-components";
import { device } from "@/models/devices";

export const PriceContainer = styled.p`
  font-size: 1.3rem;
  text-align: right;
  margin-right: 2.5rem;
  font-family: "Fraunces", Times, serif;
`;
export const Price = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
`;

export const CheckoutButton = styled.button`
  background-color: #ffb901;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin-top: 1em;
  margin-left: 54%;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;

  @media screen and (${device.laptop}) {
    margin-left: 87%;
  }
`;

export const Container = styled.div`
  background-color: #ffee0483;
  margin: 0 auto;
  width: 80%;
  padding: 1rem;
`;

export const ClearAll = styled.div`
  width: 80%;
  display: flex;
  justify-content: end;
  margin: 0 auto;
`;

export const ClearAllButton = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const EmptyText = styled.h3`
  text-align: center;
  width: 100%;
  font-weight: normal;
  margin-top: 2em;
`;
export const Wrapper = styled.div`
  padding-top: 3em;
  display: flex;
  justify-content: center;
  align-items: top;
`;

export const Heading = styled.h1`
  text-align: center;
  border-bottom: 3px solid #ffb901;

  width: fit-content;
  margin: 0 auto;
`;
