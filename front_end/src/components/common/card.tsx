import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface cardType {
  width: string;
  height: string;
  fontSize: string;
  title: String;
  des?: String;
  image: string;
  type: String;
  left: string;
}

const Card = ({
  width,
  height,
  fontSize,
  title,
  des,
  image,
  type,
  left,
}: cardType) => {
  return (
    <VStack alignItems="start">
      <Box pos="relative">
        <Flex pos="absolute" bottom="5" left={left}>
          <Box bg="white" borderRadius="5" px="3">
            <Text>{type}</Text>
          </Box>
          <Box w="2" />
          <Text textTransform="uppercase" color="white">
            April 4,2021
          </Text>
        </Flex>
        <Image
          w={width}
          h={height}
          src={image}
          alt="Dan Abramov"
          borderRadius="10px"
        />
      </Box>
      <Text w={width} fontWeight="bold" fontSize={fontSize}>
        {title}
      </Text>
      {des && <Text w={width}>{des}</Text>}
      <Text color="grey">By SEANG LAY</Text>
    </VStack>
  );
};

export default Card;
