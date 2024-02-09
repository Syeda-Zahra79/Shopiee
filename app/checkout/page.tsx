"use client";
import { useState, useEffect} from "react";
import Link from "next/link";
import {
  Container,
  InputContainer,
  InputLong,
  InputShort,
  Span,
  MiddleInputContainer,
  HeadingContainer,
  Heading,
  HeadingTop,
  PaymentContainer,
  ButtonContainer,
  Button,
  TypeSpan,
  RadioInput,
} from "@/ui/components/Checkout.style";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails } from "@/store/userSlice";


const checkout = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
  
    const [f_name, setFName] = useState("");
    const [l_name, setLName] = useState("");
    const [phone, setPhone] = useState();
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
  
    const [creditFlag, setCreditFlag] = useState(false);
    const [CODFlag, setCODFlag] = useState(false);
    const [dis, setDis] = useState(true);

    let user = useSelector((state : any) => state.user.user)
    const dispatch = useDispatch()

    useEffect(() => {
      setFName(user.f_name);
      setLName(user.l_name)
      setEmail(user.email);
      setAddress(user.address != "" ? user.address : "")
      setCity(user.city != "" ? user.city : "")
      setCountry(user.country != "" ? user.country : "")
      setPhone(user.phone != "" ? user.phone : "")
      setCreditFlag(user.creditFlag != "" ? user.creditFlag : "")
      setCODFlag(user.CODFLag != "" ? user.CODFlag : "")
    }, [])

  const handleSubmission = () => {
    const data = {
      country: country,
      city: city,
      phone: phone,
      address: address,
     CODFlag:CODFlag,
     creditFlag: creditFlag
    };
    dispatch(addUserDetails(data))
  };

  return (
    <div>
      <HeadingTop className="text_fraunces">Cart / Checkout </HeadingTop>
      <Container>
        <HeadingContainer>
          <Heading>Checkout</Heading>
        </HeadingContainer>
        <InputContainer>
          <Span>
            <p>First Name : </p>
            <InputLong
              type="text"
              value={f_name}
              onChange={(e) => setFName(e.target.value)}
            />
          </Span>

          <Span>
            <p>Last Name : </p>
            <InputLong
              type="text"
              value={l_name}
              onChange={(e) => setLName(e.target.value)}
            />
          </Span>
        </InputContainer>

        <MiddleInputContainer>
          <Span>
            <p>Email : </p>
            <InputShort
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Span>

          <Span>
            <p>Telephone : </p>
            <InputShort
              type="number"
              value={phone}
              onChange={(e: any) => setPhone(e.target.value)}
            />
          </Span>
        </MiddleInputContainer>

        <InputContainer>
          <Span>
            <p>Country : </p>
            <InputShort
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Span>

          <Span>
            <p>City : </p>
            <InputShort
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Span>

          <Span>
            <p>Address : </p>
            <InputShort
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Span>
        </InputContainer>

        <PaymentContainer>
          <div>
            <p>Payment :</p>

            <TypeSpan>
              <RadioInput
                type="radio"
                name="radioBtns"
                onClick={() => setCreditFlag(!creditFlag)}
              />
              <p>Credit Card</p>
            </TypeSpan>

            <TypeSpan>
              <RadioInput
                type="radio"
                name="radioBtns"
                onClick={() => setCODFlag(!CODFlag)}
              />
              <p>COD</p>
            </TypeSpan>
          </div>

          <ButtonContainer>
            {creditFlag == true ? (
              <Link href="billing" className="z-50">
                <Button onClick={handleSubmission}>Save Changes</Button>
              </Link>
            ) : (
              <Link href="directing" className="z-50">
                <Button onClick={handleSubmission}>Save Changes</Button>
              </Link>
            )}
          </ButtonContainer>
        </PaymentContainer>
      </Container>

    </div>
  );
};

export default checkout;
