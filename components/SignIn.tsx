"use client";
import Link from "next/link";
import { useState } from "react";
import { addUserDetails } from "@/store/userSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import {
  Container,
  Heading,
  Input,
  Remember,
  RememberText,
  Text,
  Wrapper,
} from "@/ui/components/SignIn.style";

const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [f_name, setFName] = useState("");
  const [l_name, setLName] = useState("");
  const [user_name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setCPassword] = useState("");
  const [dis, setDis] = useState(true);

  const check = () => {
    if (
      l_name != "" &&
      f_name != "" &&
      email != "" &&
      user_name != "" &&
      password != "" &&
      c_password != ""
    ) {
      if (password === c_password) {
        setDis(false);
      }
    }
  };

  const handleSubmission = () => {
    const data = {
      f_name: f_name,
      l_name: l_name,
      user_name: user_name,
      email: email,
      password: password,
    };
    dispatch(addUserDetails(data));
    router.back();
  };
  return (
    <>
      <Container>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Heading>Sign In</Heading>
        </div>
        <Text>First Name : </Text>
        <Input
          type="text"
          value={f_name}
          onChange={(e) => {
            setFName(e.target.value);
          }}
          required
        />
        <Text>Last Name : </Text>
        <Input
          type="text"
          value={l_name}
          onChange={(e) => {
            setLName(e.target.value);
          }}
          required
        />
        <Text>Username : </Text>
        <Input
          type="text"
          value={user_name}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          required
        />
        <Text>Email : </Text>
        <Input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <Text>Password : </Text>
        <Input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <Text>Confirm Password : </Text>
        <Input
          type="password"
          value={c_password}
          onChange={(e) => {
            setCPassword(e.target.value);
            check();
          }}
        />
        <Remember>
          <input type="checkbox" />
          <RememberText>Remember me</RememberText>
        </Remember>

        <Link href={"/login"} className={`${dis && "wrapper"}`}>
          <button
            className={`${dis && "pointer-events-none"} button_style`}
            disabled={dis}
            onClick={() => {
              handleSubmission();
            }}>
            Confirm
          </button>
        </Link>

        {/* )} */}
      </Container>
    </>
  );
};

export default SignIn;
