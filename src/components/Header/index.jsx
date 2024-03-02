import React from "react";
import { Button, Flex, Link, Text, UnorderedList, ListItem, Image } from "@chakra-ui/react";

export default function Header({ ...props }) {
  return (
    <Flex {...props} as="header">
      <Flex ml="60px" gap="12px" w="13%" alignItems="center">
        <Image src="images/img_clip_path_group.svg" h="48px" w="48px" />
        <Text size="xl" color="indigo.900" letterSpacing="-0.28px">
          Domingo
        </Text>
      </Flex>
      <UnorderedList
        styleType="none"
        ml="305px"
        bg="white.A700"
        w="23%"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        p="16px"
        borderRadius="28px"
      >
        <ListItem>
          <Link href="#" cursor="pointer" _hover={{ color: "gray.900_01" }}>
            <Text letterSpacing="-0.32px" ml="7px">
              Home
            </Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#" cursor="pointer" _hover={{ color: "gray.900_01" }}>
            <Text letterSpacing="-0.32px">About us</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#">
            <Text color="gray.900_01" letterSpacing="-0.32px" mr="7px">
              Properties
            </Text>
          </Link>
        </ListItem>
      </UnorderedList>
      <Flex ml="348px" mr="60px" w="10%" justifyContent="center">
        <Button size="2xl" letterSpacing="-0.32px" fontWeight={700} w="100%" borderRadius="24px">
          Contact Us
        </Button>
      </Flex>
    </Flex>
  );
}
