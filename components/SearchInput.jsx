"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Input, Button } from "@/ui/components/SearchInput.style";

const SearchInput = () => {
  const [value, setValue] = useState("");

  return (
    <Container>
      <Input
        type="text"
        id="input"
        onChange={(e) => setValue(e.target.value)}
      />
      <Link
        href={{
          pathname: "searchPage",
          query: `query=${value}`,
        }}>
        <Button>
          <Image src={"/search.png"} width={30} height={30} />
        </Button>
      </Link>
    </Container>
  );
};

export default SearchInput;
