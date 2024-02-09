import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

import Link from "next/link";

import {
  Container,
  Title,
  TitleContainer,
  Label,
  Input,
  Button,
  Buttons,
  CreateAccount,
} from "@/ui/components/Login.style";

const login = () => {
  const { user_name, password } = useSelector((state) => state.user.user);

  console.log(user_name, password );
  const router = useRouter();

  const [username, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const checkData = () => {
    if (user_name == "" || password == "") {
      alert("Create Account First");
      router.push("/signIn")
    } else if (username == user_name && pass == password) {
      router.back();
    }
  };
  return (
    <>
      <Container>
        <TitleContainer>
          <Title>Log In</Title>
        </TitleContainer>
        {/* <Line /> */}
        <Label htmlFor="username">Username: </Label>
        <Input
          name="username"
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        />
        <Label htmlFor="password">Password: </Label>
        <Input
          name="password"
          type="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <Buttons>
          <Button onClick={() => checkData()}>Log In</Button>
          <Link href="signIn">
            <CreateAccount>Create account</CreateAccount>
          </Link>
        </Buttons>
      </Container>
    </>
  );
};

export default login;
