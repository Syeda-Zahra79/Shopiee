import Image from "next/image";
import Link from "next/link";

import {
  Container,
  ImageContainer,
  Title,
  Price,
  Button,
} from "@/ui/components/Card.style";

const Card = ({ product }) => {
  return (
    <>
      <Link
        href={{
          pathname: "/productDetail",
          query: `productId=${product.id}`,
        }}>
        <Container key={product.id}>
          <ImageContainer>
            <Image
              src={product.image}
              style={{ scale: "0.75" }}
              alt="Product Image"
              width="100"
              height="100"
              layout="responsive"
            />
          </ImageContainer>

          <Title>
            {product.title.length > 19
              ? product.title.slice(0, 15) + ".."
              : product.title}
          </Title>
          <Price>${product.price}</Price>
          <Button>Add to Cart</Button>
        </Container>
      </Link>
    </>
  );
};

export default Card;
