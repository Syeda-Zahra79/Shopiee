"use client";

import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";

import Product from "@/components/Product";

import {
  Heading1,
  Heading2,
  Container,
  InnerContainer,
} from "@/ui/components/ProductDetail.style";

const productDetail = () => {
  const productId = useSearchParams().get("productId");
  const product = useSelector((state: any) =>
    state.products.items.find((pro: any) => pro.id == productId)
  );

  return (
    <Container>
      <InnerContainer style={{ width: "90%", margin: "0 auto" }}>
        <Heading1 className="text_fraunces">Categories</Heading1>
        <Heading2>Home / Items / {product.title}</Heading2>
      </InnerContainer>
      <Product product={product} />
    </Container>
  );
};

export default productDetail;
