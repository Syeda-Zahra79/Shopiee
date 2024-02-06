"use client";
import { useEffect } from "react";
import Link from "next/link";
import {
  Container,
  Title,
  Input,
  Text,
  ButtonContainer,
  ExpiryContainer,
  ConfirmButton,
  Section,
} from "@/ui/components/Billing.style";

const billing = () => {
  useEffect(() => {
    alert(
      "No need to enter any confidential details, You can just click on the button to proceed."
    );
  }, []);

  return (
    <Section>
      <Container>
        <Title>Billing Form</Title>
        <Text>Name on Card :</Text>
        <Input type="text" />
        <Text>Card Number :</Text>
        <Input type="card-number" />

        <ExpiryContainer>
          <div>
            <Text>EXP. month</Text>
            <Input type="month" />
          </div>
          <div>
            <Text>EXP. day</Text>
            <Input type="day" style={{ width: "100%" }} />
          </div>
        </ExpiryContainer>

        <ButtonContainer>
          <Link href="directing">
            <ConfirmButton>Confirm</ConfirmButton>
          </Link>
        </ButtonContainer>
      </Container>
    </Section>
  );
};

export default billing;
