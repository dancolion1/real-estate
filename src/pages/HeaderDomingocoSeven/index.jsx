import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import {
  Link,
  Text,
  Button,
  Image,
  Flex,
  Input,
  Heading,
  SimpleGrid,
  Box,
  Container,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default function HeaderDomingocoSevenPage() {
  return (
    <>
      <Helmet>
        <title>app real</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex bg="white.A700" w="100%" flexDirection="column" alignItems="center">
        <Flex bg="gray.50" w="100%" justifyContent="space-between" alignItems="center" p="20px" as="header">
          <Flex ml="60px" gap="12px" alignItems="center">
            <Image src="images/img_clip_path_group.svg" h="48px" w="48px" />
            <Text size="xl" color="indigo.900" letterSpacing="-0.28px">
              Domingo
            </Text>
          </Flex>
          <Flex mr="60px" w="57%" justifyContent="space-between" alignItems="center">
            <UnorderedList
              styleType="none"
              bg="white.A700"
              w="auto"
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              gap="40px"
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
            <Flex gap="20px" w="36%">
              <Button
                size="2xl"
                colorScheme="white_A700"
                letterSpacing="-0.32px"
                fontWeight={700}
                borderColor="indigo.900"
                borderWidth="1px"
                borderStyle="solid"
                minW="133px"
                borderRadius="24px"
              >
                Contact Us
              </Button>
              <Flex w="47%">
                <Button size="2xl" letterSpacing="-0.32px" fontWeight={700} w="100%" borderRadius="24px">
                  Log In
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Container
          mt="36px"
          w="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          maxW="1184px"
          px="0px"
        >
          <Flex gap="15px" w="100%" flexDirection="column" alignItems="center">
            <Image src="images/img_02.png" w="100%" borderRadius="12px" />
            <Flex w="100%" justifyContent="space-between" alignItems="start">
              <Heading as="h1" mt="6px">
                3 Bedroom Duplex
              </Heading>
              <Heading size="lg" color="indigo.900" fontWeight={600}>
                $3,187,200
              </Heading>
            </Flex>
            <Flex gap="39px" w="100%" alignItems="start">
              <Flex w="65%" flexDirection="column" alignItems="start">
                <Flex gap="8px" w="80%">
                  <Flex w="42%">
                    <Flex w="100%">
                      <Flex bg="gray.100_01" w="100%" justifyContent="center" p="6px" borderRadius="18px">
                        <Button size="xs" colorScheme="gray_100_01" ml="4px" fontWeight={600} minW="235px" my="2px">
                          Texas, United Staes of America
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Button
                    size="md"
                    colorScheme="gray_100_01"
                    leftIcon={<Image src="images/img_bed.svg" />}
                    fontWeight={600}
                    gap="3px"
                    minW="128px"
                    borderRadius="18px"
                  >
                    6 Bedrooms
                  </Button>
                  <Flex gap="8px" w="36%">
                    <Flex w="49%" justifyContent="center">
                      <Flex w="100%" justifyContent="center">
                        <Button
                          size="md"
                          colorScheme="gray_100_01"
                          leftIcon={<Image src="images/img_vuesax_bulk_routesquare.svg" />}
                          fontWeight={600}
                          gap="3px"
                          w="100%"
                          borderRadius="18px"
                        >
                          3 Toilets
                        </Button>
                      </Flex>
                    </Flex>
                    <Flex w="49%" justifyContent="center">
                      <Flex w="100%" justifyContent="center">
                        <Button
                          size="md"
                          colorScheme="gray_100_01"
                          leftIcon={<Image src="images/img_vector.svg" />}
                          fontWeight={600}
                          gap="3px"
                          w="100%"
                          borderRadius="18px"
                        >
                          1800m²
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex mt="35px" gap="35px" w="100%" flexDirection="column" alignItems="center">
                  <Flex gap="10px" w="96%" flexDirection="column" alignItems="start">
                    <Heading size="md" as="h3">
                      Description
                    </Heading>
                    <Text size="s" color="gray.600" letterSpacing="0.14px" fontWeight={400} lineHeight="140%">
                      Bonny creek is a 4 bedroom duplex nestled in a serene residential estate. This spacious home
                      features four bedrooms, providing ample space for both comfort and privacy. With two modern and
                      tastefully designed bathrooms, convenience meets style. The residence offers a harmonious blend of
                      contemporary aesthetics and functionality.
                    </Text>
                  </Flex>
                  <Box h="1px" bg="gray.300_01" w="100%" />
                </Flex>
                <Flex mt="28px" gap="30px" w="100%" flexDirection="column" alignItems="center">
                  <Flex gap="11px" w="99%" flexDirection="column" alignItems="start">
                    <Heading size="md" as="h4" color="black.900">
                      Features
                    </Heading>
                    <Flex w="100%">
                      <Flex gap="20px" w="100%" flexDirection="column" alignItems="start">
                        <Flex w="100%" justifyContent="space-between">
                          <Flex gap="115px" w="62%" justifyContent="space-between">
                            <Flex gap="4px" alignItems="center">
                              <Image src="images/img_verify.svg" h="24px" w="24px" />
                              <Text size="s" color="black.900">
                                Deed of Assignment
                              </Text>
                            </Flex>
                            <Flex gap="4px" alignItems="center">
                              <Image src="images/img_verify.svg" h="24px" w="24px" />
                              <Text size="s" color="black.900">
                                Deed of Contract
                              </Text>
                            </Flex>
                          </Flex>
                          <Flex gap="7px" alignItems="center">
                            <Image src="images/img_verify.svg" h="24px" w="24px" />
                            <Text size="s" color="black.900">
                              Perimeter Fencing
                            </Text>
                          </Flex>
                        </Flex>
                        <Flex w="95%" justifyContent="space-between">
                          <Flex w="50%" justifyContent="space-between">
                            <Flex gap="4px" alignItems="center">
                              <Image src="images/img_verify.svg" h="24px" w="24px" />
                              <Text size="s" color="black.900">
                                Perimeter Fencing
                              </Text>
                            </Flex>
                            <Flex gap="4px" alignItems="center">
                              <Image src="images/img_verify.svg" h="24px" w="24px" />
                              <Text size="s" color="black.900">
                                Lawn
                              </Text>
                            </Flex>
                          </Flex>
                          <Flex gap="4px" alignItems="center">
                            <Image src="images/img_verify.svg" h="24px" w="24px" />
                            <Text size="s" color="black.900">
                              Swimming Pool
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Box h="1px" bg="gray.300_01" w="100%" />
                </Flex>
                <Flex mt="35px" w="10%">
                  <Flex w="100%">
                    <Heading size="md" as="h5">
                      Gallery
                    </Heading>
                  </Flex>
                </Flex>
                <SimpleGrid mt="12px" w="100%" minH="auto" gap="2px" columns={3}>
                  <Image src="images/img_rectangle_3327.png" w="100%" />
                  <Image src="images/img_rectangle_3328.png" w="100%" />
                  <Image src="images/img_rectangle_3329.png" w="100%" />
                  <Image src="images/img_rectangle_3327_185x254.png" w="100%" />
                  <Image src="images/img_rectangle_3328_185x254.png" w="100%" />
                  <Image src="images/img_rectangle_3329_185x254.png" w="100%" />
                </SimpleGrid>
              </Flex>
              <Flex
                mt="81px"
                bg="white.A700"
                boxShadow="xs"
                w="32%"
                flexDirection="column"
                alignItems="start"
                p="19px"
                borderRadius="3px"
              >
                <Heading size="s" as="h6">
                  Show Interest
                </Heading>
                <Text size="xs" color="gray.600" mt="7px" fontWeight={400} w="87%" lineHeight="140%">
                  Complete this form to indicate your interest in the property and reserve an inspection spot
                </Text>
                <Flex mt="26px" mb="9px" gap="22px" w="100%" flexDirection="column" alignItems="center">
                  <Flex gap="14px" w="100%" flexDirection="column" alignItems="center">
                    <Input
                      placeholder="Full Name"
                      type="text"
                      color="gray.600"
                      borderColor="indigo.50"
                      borderWidth="1px"
                      borderRadius="3px"
                    />
                    <Input
                      placeholder="Email Address"
                      type="email"
                      color="gray.600"
                      borderColor="indigo.50"
                      borderWidth="1px"
                      borderRadius="3px"
                    />
                    <Input
                      placeholder="Phone Number"
                      type="number"
                      color="gray.600"
                      borderColor="indigo.50"
                      borderWidth="1px"
                      borderRadius="3px"
                    />
                  </Flex>
                  <Flex w="100%" justifyContent="center">
                    <Button size="2xl" letterSpacing="-0.32px" fontWeight={700} w="100%" borderRadius="24px">
                      Show Interest
                    </Button>
                  </Flex>
                  <Flex gap="6px" w="100%" flexDirection="column" alignItems="center">
                    <Button
                      size="2xl"
                      colorScheme="white_A700"
                      rightIcon={<Image src="images/img_frame_1618868191.svg" />}
                      letterSpacing="-0.32px"
                      fontWeight={700}
                      gap="8px"
                      borderColor="indigo.900"
                      borderWidth="1px"
                      borderStyle="solid"
                      w="100%"
                      borderRadius="24px"
                    >
                      Register with gmail
                    </Button>
                    <Link href="#">
                      <Text size="xs" color="gray.600" fontWeight={400}>
                        <Text size="xs" as="span" color="gray.600" fontWeight={500}>
                          Have an account?{" "}
                        </Text>
                        <Text size="xs" as="span" color="indigo.900" fontWeight={500}>
                          Log in
                        </Text>
                      </Text>
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Container>
        <Footer
          mt="151px"
          bg="black.900_01"
          w="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          px="56px"
          py="64px"
        />
      </Flex>
    </>
  );
}
