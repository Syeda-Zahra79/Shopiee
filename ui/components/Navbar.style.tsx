
import Link from "next/link";
import styled from "styled-components";

export const List = styled.li`
  list-style-type: none;
  margin: 0rem;
  padding: 5px 10px;
  transition: animation 3ms ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export const NextLink = styled(Link)``


export const Display = styled.ul`
  margin: 1.5em;
  display: flex;
`;
