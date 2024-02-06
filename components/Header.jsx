import Navbar from "./Navbar.jsx";
import SearchInput from "./SearchInput.jsx";
import Categories from "./Categories.tsx";

import {
  OuterContainer,
  Container,
  Heading,
  Span,
  NavSearchContainer,
} from "@/ui/components/Header.style.tsx";

const Header = () => {
  return (
    <>
      <OuterContainer>
        <Container>
          <Heading>
            Shopiee
            <Span>.</Span>
          </Heading>
          <NavSearchContainer>
            <SearchInput />
            <Navbar />
          </NavSearchContainer>
        </Container>
        <Categories />
      </OuterContainer>
    </>
  );
};

export default Header;
