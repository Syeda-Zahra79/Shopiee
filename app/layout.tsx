"use client";

import { Provider } from "react-redux";
import store from "../store/store";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "styled-components";
import { device } from "@/models/devices";

const Container = styled.div`
  position: absolute;
  z-index: -1;
  width: 100vw;
  margin-top: 11em;

  @media screen and (${device.tablet}) {
    margin-top: 8em;
  }
`;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>
          <Header />
          <Container>
            <div style={{ minHeight: "100vh" }}>{children}</div>
            <Footer />
          </Container>
        </body>
      </Provider>
    </html>
  );
}
