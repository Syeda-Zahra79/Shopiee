import styled from "styled-components";
import { device } from "@/models/devices";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;

  @media screen and (${device.tablet}) {
    height: 90vh;
    border: 1px solid black;
  }


`;