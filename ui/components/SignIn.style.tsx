import { device } from "@/models/devices";
import Link from "next/link";
import styled from "styled-components";


export const Container = styled.div`
    background-color:  #ffee0483;
    width:70%;
    margin: 2rem auto;
    padding: 0 1.5rem;


@media screen and (${device.laptop}) {
        width:40%;
        padding: 0 5rem;
}
`
export const Input=  styled.input`
    border: none;
    width: 100%;
    margin: auto;
    outline: none;
    font-size: 1rem;
    padding: .5rem 1rem;
`

export const Text = styled.p`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: medium;
    font-weight: 600;
    margin: 1em 0 .3em;
`

export const Button = styled.button`
    width: 100%;
    height: 2rem;
    border: none;
    border-radius: 25px;
    color: black;
    font-family:'Times New Roman', Times, serif;
    font-size: large;
    font-weight: 700;
    background-color: #ffb901;
    margin: 1.5rem auto;   
    pointer-events: none;
    &:disabled {
        background-color: #7e621a;
    }
`

export const Wrapper = styled(Link)`
    cursor: not-allowed;
`
export const Heading = styled.h1`
    font-family: 'Fraunces', Times, serif;
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
    padding-top: 2rem;
    z-index: 10;
    border-bottom: 3px solid #ffb901;
    width: fit-content;
    margin-bottom: .5em; 

    @media screen and (${device.laptop}) {
        font-size: 3rem;
    }
`

export const Remember = styled.div`
    display: flex;
    margin: 1rem 0 .1rem;  
`

export const RememberText = styled.p`
    margin: 0rem 1rem;
`
