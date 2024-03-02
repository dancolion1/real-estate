import React from "react";
import {
  IconButton,
  Image,
  Flex,
  Text,
  Box,
  Link,
  Heading,
  UnorderedList,
  ListItem,
  Button,
  InputLeftElement,
  InputGroup,
  Input,
  Container,
} from "@chakra-ui/react";

export default function Footer1({ ...props }) {
  return (
    <Flex {...props} direction="column" as="footer">
      <Container
        w="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        maxW="1280px"
        px="0px"
        mx="auto"
      >
        <Flex w="90%" justifyContent="space-between" alignItems="center">
          <Flex gap="24px" w="31%" flexDirection="column" alignItems="center">
            <Flex gap="16px" w="100%" flexDirection="column" alignItems="start">
              <Flex gap="12px" alignItems="center" py="4px">
                <Image src="images/img_clip_path_group_white_a700.svg" h="32px" w="32px" />
                <Text size="xl" color="white.A700" mt="5px" mr="11px" letterSpacing="-0.28px">
                  Domingo
                </Text>
              </Flex>
              <Text size="s" color="gray.300" letterSpacing="-0.14px" fontWeight={400} lineHeight="24px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur maximus quam.
              </Text>
            </Flex>
            <Flex pt="3px" gap="11px" w="100%" flexDirection="column" alignItems="start">
              <Text size="s" color="white.A700" letterSpacing="-0.14px" fontWeight={400}>
                Subscribe to our Newsletter
              </Text>
              <Box h="48px" w="100%" position="relative">
                <InputGroup m="auto">
                  <InputLeftElement>
                    <Image src="images/img_heroiconsoutline_envelope.svg" />
                  </InputLeftElement>
                  <Input
                    placeholder="Email address.."
                    letterSpacing="-0.14px"
                    gap="16px"
                    position="absolute"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                  />
                </InputGroup>
                <Button
                  size="lg"
                  letterSpacing="-0.28px"
                  fontFamily="Manrope"
                  fontWeight={600}
                  minW="90px"
                  position="absolute"
                  right="1%"
                  bottom="0px"
                  top="0px"
                  m="auto"
                  borderRadius="8px"
                >
                  Subscribe
                </Button>
              </Box>
            </Flex>
          </Flex>
          <Flex w="49%" justifyContent="space-between">
            <Flex flexDirection="column" alignItems="start" justifyContent="center">
              <UnorderedList
                styleType="none"
                mt="2px"
                gap="31px"
                display="flex"
                flexDirection="column"
                alignItems="start"
                justifyContent="flex-start"
              >
                <ListItem>
                  <Link href="#">
                    <Text size="s" color="gray.300" letterSpacing="-0.28px" fontFamily="Onest">
                      Properties
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <Heading size="xs" as="h6" color="white.A700" letterSpacing="-0.14px" fontFamily="Onest">
                      List your property
                    </Heading>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <Heading size="xs" as="h6" color="white.A700" letterSpacing="-0.14px" fontFamily="Onest">
                      All properties
                    </Heading>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <Heading size="xs" as="h6" color="white.A700" letterSpacing="-0.14px" fontFamily="Onest">
                      Lorem Ipsum
                    </Heading>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <Heading size="xs" as="h6" color="white.A700" letterSpacing="-0.14px" fontFamily="Onest">
                      Lorem Ipsum
                    </Heading>
                  </Link>
                </ListItem>
              </UnorderedList>
            </Flex>
            <Flex flexDirection="column" alignItems="start" py="4px">
              <UnorderedList
                styleType="none"
                mb="44px"
                gap="31px"
                display="flex"
                flexDirection="column"
                alignItems="start"
                justifyContent="flex-start"
              >
                <ListItem>
                  <Link href="#">
                    <Text size="s" color="gray.300" letterSpacing="-0.28px" fontFamily="Onest">
                      Our Company
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <Heading size="xs" as="h6" color="white.A700" letterSpacing="-0.14px" fontFamily="Onest">
                      About us
                    </Heading>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <Heading size="xs" as="h6" color="white.A700" letterSpacing="-0.14px" fontFamily="Onest">
                      Terms of use
                    </Heading>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <Heading size="xs" as="h6" color="white.A700" letterSpacing="-0.14px" fontFamily="Onest">
                      Refund policy
                    </Heading>
                  </Link>
                </ListItem>
              </UnorderedList>
            </Flex>
            <Flex flexDirection="column" alignItems="start" py="3px">
              <UnorderedList
                styleType="none"
                mb="48px"
                gap="31px"
                display="flex"
                flexDirection="column"
                alignItems="start"
                justifyContent="flex-start"
              >
                <ListItem>
                  <Link href="#">
                    <Text size="s" color="gray.300" letterSpacing="-0.28px" fontFamily="Onest">
                      Account
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <Heading size="xs" as="h6" color="white.A700" letterSpacing="-0.14px" fontFamily="Onest">
                      Log in
                    </Heading>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <Heading size="xs" as="h6" color="white.A700" letterSpacing="-0.14px" fontFamily="Onest">
                      Interested properties
                    </Heading>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <Heading size="xs" as="h6" color="white.A700" letterSpacing="-0.14px" fontFamily="Onest">
                      Documentation
                    </Heading>
                  </Link>
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
        </Flex>
        <Box h="1px" mt="96px" bg="indigo.100" w="100%" />
        <Flex mt="31px" w="100%" justifyContent="space-between" alignItems="center">
          <Flex>
            <Text size="xs" color="white.A700" fontWeight={400}>
              Copyright ©Domingo.co
            </Text>
          </Flex>
          <Flex justifyContent="space-between" gap="16px">
            <IconButton
              colorScheme="gray_50_01"
              icon={<Image src="images/img_close_line_2.svg" />}
              aria-label="793:1394-closelinetwo"
              w="48px"
              borderRadius="50%"
            />
            <IconButton
              colorScheme="gray_50_01"
              icon={<Image src="images/img_close_line_2_indigo_900_02.svg" />}
              aria-label="793:1395-closelinetwo"
              w="48px"
              borderRadius="50%"
            />
            <IconButton
              colorScheme="gray_50_01"
              icon={<Image src="images/img_close_line_2_indigo_900_02_48x48.svg" />}
              aria-label="793:1396-closelinetwo"
              w="48px"
              borderRadius="50%"
            />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
