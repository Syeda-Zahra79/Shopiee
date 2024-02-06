"use client";
import Link from "next/link";
import ProductCart from "@/components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { emptyBag } from "@/store/cartSlice";
import {
  PriceContainer,
  CheckoutButton,
  Container,
  ClearAll,
  ClearAllButton,
  EmptyText,
  Wrapper,
  Heading,
  Price,
} from "@/ui/components/Cart.style";

const cart = () => {
  const sum_price = useSelector((state: any) => state.cart.totalPrice);
  const items = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();


  return (
    <Wrapper>
      <Container>
        <Heading>My Bag</Heading>

        {items.length > 0 && (
          <ClearAll>
            <ClearAllButton onClick={() => dispatch(emptyBag())}>
              Clear all
            </ClearAllButton>
          </ClearAll>
        )}

        <div>
          {items.length <= 0 ? (
            <EmptyText>Currently Your Bag is empty</EmptyText>
          ) : (
            items.map((product: any) => {
              if (product.id != null) {
                return (
                  <ProductCart
                    key={product.id}
                    product={product}
                  />
                );
              }
            })
          )}
        </div>
        {items.length > 0 && (
          <>
            <PriceContainer>
              Sub total : <Price>${sum_price}</Price>
            </PriceContainer>
            <Link href="/checkout">
              <CheckoutButton>Checkout</CheckoutButton>
            </Link>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default cart;
