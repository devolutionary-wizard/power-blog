import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { AiFillThunderbolt } from "react-icons/ai";
import { follows, menus, supports } from "../../constants/data/datas";
import React from "react";

export const Footer = () => {
  return (
    <>
      <Flex
        justifyContent="space-evenly"
        bg="black"
        color="white"
        w="100vw"
        p="3em"
        direction={["column", "column", "row"]}>
        <VStack alignItems="start">
          <Flex alignItems="center">
            <AiFillThunderbolt size="1.5rem" />
            <Box w="5px" />
            <Text textTransform="uppercase" fontWeight="bold" fontSize="1.5rem">
              powerblog
            </Text>
          </Flex>
          <Text width={["70vw", "70vw", "330px"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu
            ultrices ligula. Fusce a velit dolor. Nulla facilisi. Maecenas ut
            neque tempor, dictum lacus id, lobortis nisi. Proin egestas metus
            est, eget mollis augue ullamcorper eget.
          </Text>
        </VStack>
        <HStack alignItems="start" spacing="10em">
          <VStack alignItems="start">
            <Text>Menu</Text>
            {menus.map((menu) => {
              return <Text key={menu.id}>{menu.title}</Text>;
            })}
          </VStack>
          <VStack alignItems="start">
            <Text>Support</Text>
            {supports.map((support) => {
              return <Text key={support.id}>{support.title}</Text>;
            })}
          </VStack>
          <VStack alignItems="start">
            <Text>Follow Us</Text>
            {follows.map((icon) => {
              return <icon.icon key={icon.id} />;
            })}
          </VStack>
        </HStack>
      </Flex>
    </>
  );
};
