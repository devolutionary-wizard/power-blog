import { Box, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

import { LeftComponent } from "../components/home/LeftComponent";
import RightComponenet from "../components/home/RightComponenet";

const Home: NextPage = () => {
  return (
    <Flex px="10" py="5">
      <LeftComponent />
      <Box w="2" />
      <Stack direction="row" h="100vh" px="2">
        <Divider orientation="vertical" />
      </Stack>
      <RightComponenet />
    </Flex>
  );
};

export default Home;
