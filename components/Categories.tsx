import Image from "next/image";

import {
  Container,
  Wrapper,
  NextLink,
  ButtonContainer,
  Button,
  RightSymbolImage,
} from "@/ui/components/Categories.style";

function Categories() {
  const slideLeft = () => {
    let slider = document.getElementById("slider") as HTMLElement;
    slider.scrollLeft = slider.scrollLeft - 100;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider") as HTMLElement;
    slider.scrollLeft = slider.scrollLeft + 100;
  };

  return (
    <Wrapper>
      <Container id="slider">
        <NextLink
          href={{
            pathname: "/products",
            query: "category=all",
          }}>
          All
        </NextLink>
        <NextLink
          href={{
            pathname: "/products",
            query: "category=men",
          }}>
          Men's Clothing
        </NextLink>
        <NextLink
          href={{
            pathname: "/products",
            query: "category=women",
          }}>
          Women's Clothing
        </NextLink>
        <NextLink
          href={{
            pathname: "/products",
            query: "category=electronics",
          }}>
          Electronics
        </NextLink>
        <NextLink
          href={{
            pathname: "/products",
            query: "category=jewelry",
          }}>
          Jewelry
        </NextLink>
      </Container>
      <ButtonContainer>
        <Button onClick={slideLeft}>
          <RightSymbolImage
            src="/symbol.png"
            alt="Symbol"
            width="25"
            height="25"
          />
        </Button>
        <Button onClick={slideRight}>
          <Image src="/symbol.png" alt="Symbol" width="25" height="25" />
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
}

export default Categories;
