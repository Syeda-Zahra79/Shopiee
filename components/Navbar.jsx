import Image from "next/image";

import { Display, NextLink, List } from "@/ui/components/Navbar.style";

const Navbar = () => {
  return (
    <>
      <Display>
        <List>
          <NextLink href="/cart">
            <Image src="/cart.png" width="30" height="30" />
          </NextLink>
        </List>
        <List>
          <NextLink href="/login">
            <Image src="/user.png" width="30" height="30" />
          </NextLink>
        </List>
      </Display>
    </>
  );
};

export default Navbar;
