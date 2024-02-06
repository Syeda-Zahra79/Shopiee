import Image from "next/image";
import StarRating from "./StarRating";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  sumPrice,
  deleteItem,
} from "@/store/cartSlice";

import {
  Container,
  Title,
  ImageWrapper,
  ContentWrapper,
  ProductRatingAndQauntity,
  FlexContainer,
  PriceText,
  PriceContainer,
  Buttons,
  Quantity,
  QuantityButton,
  CloseButton,
} from "@/ui/components/ProductCard.style";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const { quantity } = useSelector((state) =>
    state.cart.items.find((pro) => pro.id == product.id)
  );

  const increment = () => {
    dispatch(increaseQuantity({ id: product.id, increment: 1 }));
    dispatch(sumPrice());
  };

  const decrement = () => {
    dispatch(decreaseQuantity(product.id));
    dispatch(sumPrice());
  };

  const handleDelete = () => {
    dispatch(deleteItem(product.id));
    dispatch(sumPrice());
  };

  return (
    <Container key={product.id}>
      <ImageWrapper>
        <Image
          src={product.image}
          width="100"
          height="100"
          alt={product.title}
        />
      </ImageWrapper>
      <FlexContainer>
        <ContentWrapper>
          <Title>{product.title}</Title>
          <p>Product ID: {product.id}</p>
        </ContentWrapper>

        <ProductRatingAndQauntity>
          <StarRating rate={product.rate} />
          <Buttons>
            <QuantityButton onClick={increment}>+</QuantityButton>
            <Quantity>{quantity}</Quantity>
            <QuantityButton onClick={decrement}>-</QuantityButton>
          </Buttons>
          <PriceContainer>
            <PriceText>Buy at:</PriceText> ${product.price}
          </PriceContainer>
        </ProductRatingAndQauntity>
      </FlexContainer>
      <CloseButton id={product.id} onClick={handleDelete}>
        <Image src='/close.png' width={20} height={20} />
      </CloseButton>
    </Container>
  );
};

export default ProductCart;
