import styled from "styled-components";
import { device } from "@/models/devices";

export const Container = styled.div`
    background-color: #ffee0483;
    width: 50%;
    height: fit-content;
    margin: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media screen and (${device.tablet}) {
        width: 25%; 
    }
`
export const Title = styled.h1`
    text-align: center;
    margin: 0rem 0 1.5rem;
    z-index: 200;
    border-bottom:3px solid #FFB901;
    text-align: center;
    width: auto;
    margin: 0 auto;
    margin-bottom: 1em;
`


export const Input = styled.input`
    outline: none;
    border: none;
    width: 85%;
    margin: auto;
    padding: .5rem;
`

export const Text = styled.p`
    width: 85%;
    margin: 1rem auto .5rem;
`


export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ExpiryContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: auto;
    @media screen and (${device.tablet}) {
        flex-direction: row;
    }
`

export const ConfirmButton = styled.button`
    background-color: #ffb901;
    border: none;
    outline: none;
    padding: .5rem 1rem;
    font-size: .9rem;
    font-weight: bold;
    border-radius: 25px;
    cursor: pointer;
    margin: 2rem auto 1rem;
`

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
`