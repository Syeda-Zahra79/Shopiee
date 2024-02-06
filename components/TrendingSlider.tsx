"use client";
import React from "react";
import Card from "./Card";
import { ProductProps } from "@/models/productItem";
import {
  Button,
  ButtonContainer,
  Container,
  SymbolBtnLeft,
  SymbolBtnRight,
} from "@/ui/components/Slider.style";

const TrendingSlider = ({ items }: any) => {
  const slideLeft = () => {
    let slider = document.getElementById("slider_products") as HTMLElement;
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider_products") as HTMLElement;
    slider.scrollLeft = slider.scrollLeft + 235;    
  };
  return (
    <>
      <Container>
          <ButtonContainer>
            <Button title="scroll left" onClick={slideLeft}>
              <SymbolBtnLeft
                src="/symbol.png"
                alt="Symbol"
                width="50"
                height="50"
              />
            </Button>

            <div className="row-container" id="slider_products">
              {items.map((product: ProductProps, index: number) => (
                <Card product={product} key={index} />
              ))}
            </div>

            <Button title="scroll right" onClick={slideRight}>
              <SymbolBtnRight
                src="/symbol.png"
                alt="Symbol"
                width="50"
                height="50"
              />
            </Button>
          </ButtonContainer>
        </Container>
    </>
  );
};
export default TrendingSlider;
