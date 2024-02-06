"use client";

import Card from "@/components/Card";
import { ProductProps } from "@/models/productItem";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";

import { Heading, Container } from "@/ui/components/ProductsPage.style";

function page() {
  const category = useSearchParams().get("category");

  const items = useSelector((state: any) => state.products.items);
  let filteredItems = [];
  let defined_category = "";

  if (category == "men") {
    defined_category = "Men's Clothing";
    filteredItems = items.filter(
      (item: any) => item.category == "men's clothing"
    );
  } else if (category == "women") {
    defined_category = "Women's Clothing";
    filteredItems = items.filter(
      (item: any) => item.category == "women's clothing"
    );
  } else if (category == "jewelry") {
    defined_category = "Jewelry";
    filteredItems = items.filter((item: any) => item.category == "jewelery");
  } else if (category == "electronics") {
    defined_category = "Electronics";
    filteredItems = items.filter((item: any) => item.category == "electronics");
  } else {
    defined_category = "All";
    filteredItems = [...items];
  }

  return (
    <>
      <Heading className="text_fraunces">
        Categories / {defined_category}
      </Heading>
      <Container>
        {filteredItems.map((product: ProductProps, index: number) => (
          <Card key={index} product={product} />
        ))}
      </Container>
    </>
  );
}

export default page;
