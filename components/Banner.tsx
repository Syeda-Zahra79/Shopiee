import {
  Container,
  MidContainer,
  Heading,
  Paragraph,
  Button,
  ImageDiv,
  ImageContainer,
} from "@/ui/components/Banner.style";

const Banner = () => {
  return (
    <Container>
      <MidContainer>
        <Heading>Check out our new Collection</Heading>
        <Paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
          obcaecati officiis quia minima eos tempora eius magnam fuga magni
        </Paragraph>
        <Button>SHOP NOW</Button>
      </MidContainer>
      <ImageDiv>
        <ImageContainer src="/shopping-girl.png" width={600} height={500} />
      </ImageDiv>
    </Container>
  );
};

export default Banner;
