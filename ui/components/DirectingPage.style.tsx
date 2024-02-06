import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Text = styled.p`
    text-align: center;
`

export const NextLink = styled(Link)`
margin-top: 1em;
    text-decoration: underline;
`