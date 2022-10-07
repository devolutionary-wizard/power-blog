import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import React from "react";

export const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex px="40px" py="20px" justifyContent="space-between">
      <Flex alignItems="center">
        <GiHamburgerMenu size="1.5rem" onClick={onOpen} />
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
              <DrawerCloseButton />
            </DrawerHeader>
            <DrawerBody></DrawerBody>
          </DrawerContent>
        </Drawer>
        <Box w="15px" />
        <AiFillThunderbolt size="1.5rem" />
        <Box w="5px" />
        <Text
          textTransform="uppercase"
          color="black"
          fontWeight="bold"
          fontSize="1.5rem">
          powerblog
        </Text>
      </Flex>
      <Flex display={["none", "inline-flex"]}>
        <InputGroup>
          <InputRightElement>
            <BsSearch />
          </InputRightElement>
          <Input type="text" />
        </InputGroup>
        <Box w="15px" />
        <Button bg="black" color="white">
          Contact
        </Button>
      </Flex>
    </Flex>
  );
};
