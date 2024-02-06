"use client";
import Card from "@/components/Card";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { Heading, Container } from "@/ui/components/ProductsPage.style";

const searchPage = () => {
  const allItems = useSelector((state: any) => state.products.items);
  const query = useSearchParams().get("query");

  const filteredItems = allItems.filter(
    (item: any) =>
      item.title.includes(query) ||
      item.description.includes(query) ||
      item.category.includes(query)
  );

  return (
    <>
      <Heading className="text_fraunces">Search Results</Heading>
      <Container>
        {filteredItems.length > 0 ? (
          filteredItems.map((product: any) => <Card product={product} />)
        ) : (
          <h3>No Search Found</h3>
        )}
      </Container>
    </>
  );
};

export default searchPage;
