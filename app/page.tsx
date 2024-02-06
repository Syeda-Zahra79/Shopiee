"use client";
import { ProductProps } from "@/models/productItem";
import { useSelector } from "react-redux";

import TrendingSlider from "@/components/TrendingSlider";
import Banner from "@/components/Banner";

import { Container, Heading } from "@/ui/components/HomePage.style";

export default function Home() {
  const items = useSelector((state: any) => state.products.items);
  let revisedItems = items.filter(
    (product: ProductProps, index: number) => index < 6
  );

  return (
    <>
      <Banner />
      <Container>
        <Heading className="text_faster">SHOP NOW</Heading>
        <TrendingSlider items={revisedItems} />
      </Container>
    </>
  );
}
