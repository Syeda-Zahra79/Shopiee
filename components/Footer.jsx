import Image from "next/image";
import Link from "next/link";

import {
  Container,
  FirstContainer,
  MainDiv,
  IconsContainer,
  Input,
  Button,
  SecondContainer,
} from "@/ui/components/Footer.style";

const Footer = () => {
  return (
    <>
      <Container>
        <FirstContainer>
          <MainDiv>
            <span>Developer's Contact</span>
            <p>Find us:</p>
            <IconsContainer>
              <Link href={"https://web.facebook.com/"}>
                <Image src="/facebook.png" width="28" height="28" />
              </Link>
              <Link href={"https://www.instagram.com/"}>
                <Image src="/instagram.png" width="28" height="28" />
              </Link>
              <Link href={"https://dribbble.com/"}>
                <Image src="/dribble.png" width="30" height="30" />
              </Link>
            </IconsContainer>
          </MainDiv>

          <MainDiv>
            <Link href="/about">About</Link>
            <Link href="/products?category=all">Products</Link>
            <Link href="/signIn">Sign In</Link>
          </MainDiv>

          <MainDiv>
            Join our Newsletter
            <div style={{ display: "flex" }}>
              <Input type="text" />
              <Button>Subscribe</Button>
            </div>
          </MainDiv>
        </FirstContainer>

        <SecondContainer>Shopiee Ltd. All Rights Reserved.</SecondContainer>
      </Container>
    </>
  );
};

export default Footer;
