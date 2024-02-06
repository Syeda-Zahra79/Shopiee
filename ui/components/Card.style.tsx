import { device } from "@/models/devices";
import styled from "styled-components";


export const Container = styled.div`
  margin: 2em 1rem;
  padding: 1em;
  width: 200px;
  border: 1px solid #80808065;
  background-color: white;
  transition: transform 0.3s ease-in-out;

   &:hover {
    transform: scale(1.1);
  } 
`


export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #FFF6DD;
  padding:.5rem;
  margin: 0 .5rem;
  height: 12em;
`

export const Title = styled.h5`
  padding-top: 0em 1em;
  text-align: center;
  color: rgb(19, 18, 18);
  font-size: .9rem;
  font-family: 'Fraunces', serif;

`

export const Price = styled.p`
    text-align: center;
   color: rgb(19, 18, 18);
   font-weight: bold;
   font-size: 1rem;
   margin: .5rem auto;
`

export const Button = styled.button`
  background-color: #FFB901;
  font-family: 'Times New Roman', Times, serif;
  font-size: 1rem;
  font-weight: bold;
  padding:.5rem;
  outline: none;
  border: none;
  border-radius: 20px;
  width: 100%;
  cursor: pointer;
  font-family: 'Fraunces', serif;

  @media screen and (${device.desktop}) {
  }

`