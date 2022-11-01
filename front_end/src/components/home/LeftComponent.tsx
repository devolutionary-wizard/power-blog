import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import Card from "../common/card";

export const LeftComponent = () => {
  return (
    <>
      <Card
        width="400px"
        height="350px"
        fontSize="24"
        title="How Art And Culture Can Help Us Rethink Our Time"
        des=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna."
        image="https://assets.website-files.com/624a0494562144f492089904/624a0c6fc9692de550d75c7b_Des-07-p-1080.jpeg"
        type="Design"
        left="10"
      />
      <Box w="3" />
      <VStack>
        <Card
          width="250px"
          height="150px"
          fontSize="16"
          title="Why Boxed Water Isn’t The Best Solution They Want You To Think It Is"
          image="https://assets.website-files.com/624a0494562144f492089904/624a098881d5ed4279396737_Cult-06-p-800.jpeg"
          type="Culture"
          left="3"
        />
        <Card
          width="250px"
          height="150px"
          fontSize="16"
          title="Qick Response Codes: What Are They And Why Should The Society Care?"
          image="https://assets.website-files.com/624a0494562144f492089904/624a0b1523e2fe1d9cba625d_Tech-07-p-500.jpeg"
          type="Tech"
          left="3"
        />
      </VStack>
    </>
  );
};
