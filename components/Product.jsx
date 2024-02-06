"use client";
import Link from "next/link";
import StarRating from "./StarRating";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, sumPrice } from "@/store/cartSlice";

import {
  Container,
  ImageWrapper,
  ImageContainer,
  Description,
  DecrementButton,
  DescriptionMiddle,
  DescriptionText,
  Id,
  Title,
  IncrementButton,
  Quantity,
  Price,
  PriceContainer,
  CartButton,
  Buttons,
} from "@/ui/components/Product.style";

const Product = ({ product }) => {
  const user_data = useSelector((state) => state.user.user);
  let passProduct = { ...product };

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  passProduct.quantity = quantity;

  const addProductToCart = () => {
    dispatch(addItem(passProduct));
    dispatch(sumPrice());
  };

  return (
    <>
      <Container>
        <ImageWrapper>
          <ImageContainer
            src={product.image}
            alt={product.title}
            width="200"
            height="300"
          />
        </ImageWrapper>

        <Description>
          <Id>Product ID : {product.id}</Id>
          <Title className="text_fraunces">{product.title}</Title>

          <DescriptionMiddle>
            <DescriptionText>{product.description}</DescriptionText>
            <StarRating rate={product.rate} />
            <Buttons>
              <IncrementButton
                onClick={() => setQuantity((prev) => (prev = prev + 1))}>
                +
              </IncrementButton>
              <Quantity>{quantity}</Quantity>
              <DecrementButton
                onClick={() =>
                  quantity > 1 && setQuantity((prev) => (prev = prev + 1))
                }>
                -
              </DecrementButton>
            </Buttons>

            <PriceContainer>
              Buy at : <Price>${product.price}</Price>
            </PriceContainer>

            {user_data == null ? (
              <>
                {alert("Login First to add items to the cart")}
                <Link href={"/login"}>
                  <CartButton>
                    <strong>Log in </strong>
                  </CartButton>
                </Link>
              </>
            ) : (
              <Link
                href={{
                  pathname: "cart",
                }}>
                <CartButton onClick={addProductToCart}>Add to cart</CartButton>
              </Link>
            )}
          </DescriptionMiddle>
        </Description>
      </Container>
    </>
  );
};

export default Product;
