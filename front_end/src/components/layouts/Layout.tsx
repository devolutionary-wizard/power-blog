import { Box, Divider, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Divider color="black" variant="solid" />
      <main>{children}</main>
      <Flex flex={1} />
      <Footer />
    </Flex>
  );
};
