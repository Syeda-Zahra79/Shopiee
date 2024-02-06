
import { device } from "@/models/devices";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  padding-left: 2em;
  border-bottom: 1px solid #a5a0a03e;
  position: relative;

  @media screen and (${device.tablet}) {
    padding: 0 2.5em;
  }
`;

export const OuterContainer = styled.div`
  background: #ffb901;
  font-family: montserrat;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  border: none;
  position: fixed;
  width: 100%;
  z-index: 50;
  filter: drop-shadow(0 0 0.75rem #68686739);
`;

export const Heading = styled.h3`
  font-family: "Fraunces", serif;
  font-size: 1.5rem;
`;

export const Span = styled.span`
  font-size: 3rem;
`;

export const MenuContainer = styled.div`
  background: #ffb901;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 3em;
  height: 100vh;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
`;
export const List = styled.li`
  list-style-type: none;
  margin: 0 1rem;
  text-align: center;
  padding: 5px 10px;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5em 1em;
`;

export const Button = styled(List)`
  color: white;
  background-color: #025174;
  padding: 0.5rem;
  border-radius: 20px;
  width: 70%;
  margin: 0 auto;
`;
export const NavLists = styled.div`
  padding: 1em;
  width: 80%;
  margin: 0 auto;
`;

export const HorizontalLine = styled.hr`
  margin: 1em;
  opacity: 0.6;
`;

export const ButtonMenu = styled.button`
  background-color: none;
`;

export const NavSearchContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 40%;
  position: relative;

  @media screen and (${device.tablet}) {
    flex-direction: row;
    width: 60%;
  }

  @media screen and (${device.laptop}) {
    width: 40%;
  }
`;