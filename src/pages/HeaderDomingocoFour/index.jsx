import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import {
  Image,
  SimpleGrid,
  Heading,
  Flex,
  Text,
  Box,
  Button,
  Container,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default function HeaderDomingocoFourPage() {
  return (
    <>
      <Helmet>
        <title>app real</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex bg="white.A700" w="100%" flexDirection="column" alignItems="center">
        <Flex bg="gray.50" w="100%" justifyContent="center" alignItems="center" p="20px" as="header">
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
          <Button
            size="2xl"
            variant="outline"
            ml="348px"
            mr="60px"
            letterSpacing="-0.32px"
            fontWeight={700}
            minW="133px"
            borderRadius="24px"
          >
            Contact Us
          </Button>
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
          <Flex w="100%" flexDirection="column" alignItems="start">
            <Image src="images/img_02.png" ml="2px" w="100%" borderRadius="12px" />
            <Flex mt="19px" w="100%" justifyContent="space-between" alignItems="start">
              <Heading as="h1" mt="6px">
                3 Bedroom Duplex
              </Heading>
              <Heading size="lg" color="indigo.900" fontWeight={600}>
                $3,187,200
              </Heading>
            </Flex>
            <Flex mt="11px" gap="8px" w="52%">
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
            <Flex mt="35px" gap="24px" w="100%" alignItems="center">
              <Flex gap="29px" w="67%" flexDirection="column" alignItems="center">
                <Flex gap="35px" w="98%" flexDirection="column" alignItems="center">
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
                <Flex gap="11px" w="97%" flexDirection="column" alignItems="start">
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
                <Box h="1px" bg="gray.300_01" w="98%" />
              </Flex>
              <Flex
                borderColor="indigo.50_01"
                borderWidth="1px"
                borderStyle="solid"
                bg="gray.50_02"
                w="32%"
                justifyContent="center"
                p="17px"
                borderRadius="3px"
              >
                <Flex mb="5px" w="76%" flexDirection="column" alignItems="center" mx="41px">
                  <Image src="images/img_tick_circle.svg" h="44px" w="44px" />
                  <Image src="images/img_house.svg" h="182px" mt="-1px" />
                  <Text size="s" color="gray.900" mt="6px" textAlign="center" fontWeight={400} w="72%">
                    You have indicated interest <br />
                    in this property
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex mt="35px" w="6%">
              <Flex w="100%">
                <Heading size="md" as="h5">
                  Gallery
                </Heading>
              </Flex>
            </Flex>
            <SimpleGrid mt="12px" w="65%" minH="auto" gap="2px" columns={3}>
              <Image src="images/img_rectangle_3327.png" w="100%" />
              <Image src="images/img_rectangle_3328.png" w="100%" />
              <Image src="images/img_rectangle_3329.png" w="100%" />
              <Image src="images/img_rectangle_3327_185x254.png" w="100%" />
              <Image src="images/img_rectangle_3328_185x254.png" w="100%" />
              <Image src="images/img_rectangle_3329_185x254.png" w="100%" />
            </SimpleGrid>
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
