import React from "react";
import { Helmet } from "react-helmet";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import {
  Text,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Button,
  InputLeftElement,
  InputGroup,
  Input,
  Container,
} from "@chakra-ui/react";

export default function HeaderDomingocoTwoPage() {
  return (
    <>
      <Helmet>
        <title>app real</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex bg="white.A700" w="100%" flexDirection="column" alignItems="center">
        <Header
          flexDirection="row"
          display="flex"
          bg="gray.50"
          w="100%"
          justifyContent="center"
          alignItems="center"
          p="20px"
        />
        <Container
          mt="32px"
          gap="48px"
          display="flex"
          w="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          maxW="1280px"
          px="0px"
        >
          <Flex gap="40px" w="100%" alignItems="center">
            <Flex gap="24px" w="84%">
              <Flex gap="4px" w="24%" flexDirection="column" alignItems="start">
                <Text size="s" color="gray.900" letterSpacing="-0.14px">
                  Location
                </Text>
                <InputGroup size="md">
                  <InputLeftElement>
                    <Image src="images/img_frame_1618868197.svg" />
                  </InputLeftElement>
                  <Input placeholder="" gap="35px" borderColor="gray.500" borderWidth="1px" borderRadius="6px" />
                </InputGroup>
              </Flex>
              <Flex gap="3px" w="24%" flexDirection="column" alignItems="start">
                <Text size="s" color="gray.900" letterSpacing="-0.14px">
                  Property Type
                </Text>
                <Image src="images/img_frame_1618868198.svg" h="48px" borderRadius="6px" />
              </Flex>
              <Flex gap="4px" w="11%" flexDirection="column" alignItems="start">
                <Text size="s" color="gray.900" letterSpacing="-0.14px">
                  Bed
                </Text>
                <Image src="images/img_frame_1618868198_white_a700.svg" h="48px" borderRadius="6px" />
              </Flex>
              <Flex gap="4px" w="11%" flexDirection="column" alignItems="start">
                <Text size="s" color="gray.900" letterSpacing="-0.14px">
                  Toilet
                </Text>
                <Image src="images/img_frame_1618868198_white_a700_48x112.svg" h="48px" borderRadius="6px" />
              </Flex>
              <Flex gap="3px" w="24%" flexDirection="column" alignItems="start">
                <Text size="s" color="gray.900" letterSpacing="-0.14px">
                  Price range
                </Text>
                <Image src="images/img_frame_1618868198_white_a700_48x250.svg" h="48px" borderRadius="6px" />
              </Flex>
            </Flex>
            <Button size="2xl" letterSpacing="-0.32px" fontWeight={700} minW="170px" borderRadius="24px">
              Search
            </Button>
          </Flex>
          <Flex w="100%" justifyContent="center">
            <Flex w="100%" flexDirection="column" alignItems="center">
              <SimpleGrid w="100%" minH="auto" gap="40px" columns={3} justifyContent="center">
                <Flex
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  borderRadius="14px"
                >
                  <Flex
                    h="240px"
                    borderTopLeftRadius="14px"
                    borderTopRightRadius="14px"
                    boxShadow="xs"
                    bgImage="url(/images/img_features_240x400.png)"
                    bgSize="cover"
                    bgRepeat="no-repeat"
                    w="100%"
                    alignItems="start"
                    p="22px"
                  >
                    <Image src="images/img_favourite.svg" h="32px" mb="164px" w="32px" />
                  </Flex>
                  <Flex gap="12px" w="100%" flexDirection="column" alignItems="center" p="20px">
                    <Flex w="95%" justifyContent="center">
                      <Flex pt="2px" w="100%">
                        <Heading as="h1" letterSpacing="-0.28px">
                          $5,200,000
                        </Heading>
                      </Flex>
                    </Flex>
                    <Flex w="95%" justifyContent="center">
                      <Flex pt="2px" w="100%">
                        <Text>4 Bedroom Bungalow in Georgia</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  borderRadius="14px"
                >
                  <Flex
                    h="240px"
                    borderTopLeftRadius="14px"
                    borderTopRightRadius="14px"
                    boxShadow="xs"
                    bgImage="url(/images/img_features_2.png)"
                    bgSize="cover"
                    bgRepeat="no-repeat"
                    w="100%"
                    alignItems="start"
                    p="18px"
                  >
                    <Image src="images/img_favourite.svg" h="32px" mb="172px" w="32px" />
                  </Flex>
                  <Flex gap="12px" w="100%" flexDirection="column" alignItems="center" p="20px">
                    <Flex w="95%" justifyContent="center">
                      <Flex pt="2px" w="100%">
                        <Heading letterSpacing="-0.28px">$3,187,200</Heading>
                      </Flex>
                    </Flex>
                    <Flex w="95%" justifyContent="center">
                      <Flex pt="2px" w="100%">
                        <Text>4 Bedroom Bungalow in Georgia</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  borderRadius="14px"
                >
                  <Flex
                    h="240px"
                    borderTopLeftRadius="14px"
                    borderTopRightRadius="14px"
                    boxShadow="xs"
                    bgImage="url(/images/img_features_3.png)"
                    bgSize="cover"
                    bgRepeat="no-repeat"
                    w="100%"
                    alignItems="start"
                    p="18px"
                  >
                    <Image src="images/img_favourite.svg" h="32px" mb="172px" w="32px" />
                  </Flex>
                  <Flex gap="12px" w="100%" flexDirection="column" alignItems="center" p="20px">
                    <Flex w="95%" justifyContent="center">
                      <Flex pt="2px" w="100%">
                        <Heading as="h3" letterSpacing="-0.28px">
                          $1,200,000
                        </Heading>
                      </Flex>
                    </Flex>
                    <Flex w="95%" justifyContent="center">
                      <Flex pt="2px" w="100%">
                        <Text>4 Bedroom Bungalow in Georgia</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  borderRadius="14px"
                >
                  <Flex
                    h="240px"
                    borderTopLeftRadius="14px"
                    borderTopRightRadius="14px"
                    boxShadow="xs"
                    bgImage="url(/images/img_features_240x400.png)"
                    bgSize="cover"
                    bgRepeat="no-repeat"
                    w="100%"
                    alignItems="start"
                    p="22px"
                  >
                    <Image src="images/img_favourite.svg" h="32px" mb="164px" w="32px" />
                  </Flex>
                  <Flex gap="12px" w="100%" flexDirection="column" alignItems="center" p="20px">
                    <Flex w="95%" justifyContent="center">
                      <Flex pt="2px" w="100%">
                        <Heading as="h4" letterSpacing="-0.28px">
                          $5,200,000
                        </Heading>
                      </Flex>
                    </Flex>
                    <Flex w="95%" justifyContent="center">
                      <Flex pt="2px" w="100%">
                        <Text>4 Bedroom Bungalow in Georgia</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  borderRadius="14px"
                >
                  <Flex
                    h="240px"
                    borderTopLeftRadius="14px"
                    borderTopRightRadius="14px"
                    boxShadow="xs"
                    bgImage="url(/images/img_features_2.png)"
                    bgSize="cover"
                    bgRepeat="no-repeat"
                    w="100%"
                    alignItems="start"
                    p="18px"
                  >
                    <Image src="images/img_favourite.svg" h="32px" mb="172px" w="32px" />
                  </Flex>
                  <Flex gap="12px" w="100%" flexDirection="column" alignItems="center" p="20px">
                    <Flex w="95%" justifyContent="center">
                      <Flex pt="2px" w="100%">
                        <Heading as="h5" letterSpacing="-0.28px">
                          $3,187,200
                        </Heading>
                      </Flex>
                    </Flex>
                    <Flex w="95%" justifyContent="center">
                      <Flex pt="2px" w="100%">
                        <Text>4 Bedroom Bungalow in Georgia</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  borderRadius="14px"
                >
                  <Flex
                    h="240px"
                    borderTopLeftRadius="14px"
                    borderTopRightRadius="14px"
                    boxShadow="xs"
                    bgImage="url(/images/img_features_3.png)"
                    bgSize="cover"
                    bgRepeat="no-repeat"
                    w="100%"
                    alignItems="start"
                    p="18px"
                  >
                    <Image src="images/img_favourite.svg" h="32px" mb="172px" w="32px" />
                  </Flex>
                  <Flex gap="12px" w="100%" flexDirection="column" alignItems="center" p="20px">
                    <Flex w="95%" justifyContent="center">
                      <Flex pt="2px" w="100%">
                        <Heading as="h6" letterSpacing="-0.28px">
                          $1,200,000
                        </Heading>
                      </Flex>
                    </Flex>
                    <Flex w="95%" justifyContent="center">
                      <Flex pt="2px" w="100%">
                        <Text>4 Bedroom Bungalow in Georgia</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  borderRadius="14px"
                >
                  <Flex
                    h="240px"
                    borderTopLeftRadius="14px"
                    borderTopRightRadius="14px"
                    boxShadow="xs"
                    bgImage="url(/images/img_features_240x400.png)"
                    bgSize="cover"
                    bgRepeat="no-repeat"
                    w="100%"
                    alignItems="start"
                    p="22px"
                  >
                    <Image src="images/img_favourite.svg" h="32px" mb="164px" w="32px" />
                  </Flex>
                  <Flex gap="12px" w="100%" flexDirection="column" alignItems="center" p="20px">
                    <Flex w="95%" justifyContent="center">
                      <Flex pt="2px" w="100%">
                        <Heading as="h3" letterSpacing="-0.28px">
                          $5,200,000
                        </Heading>
                      </Flex>
                    </Flex>
                    <Flex w="95%" justifyContent="center">
                      <Flex pt="2px" w="100%">
                        <Text>4 Bedroom Bungalow in Georgia</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  borderRadius="14px"
                >
                  <Flex
                    h="240px"
                    borderTopLeftRadius="14px"
                    borderTopRightRadius="14px"
                    boxShadow="xs"
                    bgImage="url(/images/img_features_2.png)"
                    bgSize="cover"
                    bgRepeat="no-repeat"
                    w="100%"
                    alignItems="start"
                    p="18px"
                  >
                    <Image src="images/img_favourite.svg" h="32px" mb="172px" w="32px" />
                  </Flex>
                  <Flex gap="12px" w="100%" flexDirection="column" alignItems="center" p="20px">
                    <Flex w="95%" justifyContent="center">
                      <Flex pt="2px" w="100%">
                        <Heading as="h3" letterSpacing="-0.28px">
                          $3,187,200
                        </Heading>
                      </Flex>
                    </Flex>
                    <Flex w="95%" justifyContent="center">
                      <Flex pt="2px" w="100%">
                        <Text>4 Bedroom Bungalow in Georgia</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  bg="white.A700"
                  boxShadow="xs"
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  borderRadius="14px"
                >
                  <Flex
                    h="240px"
                    borderTopLeftRadius="14px"
                    borderTopRightRadius="14px"
                    boxShadow="xs"
                    bgImage="url(/images/img_features_3.png)"
                    bgSize="cover"
                    bgRepeat="no-repeat"
                    w="100%"
                    alignItems="start"
                    p="18px"
                  >
                    <Image src="images/img_favourite.svg" h="32px" mb="172px" w="32px" />
                  </Flex>
                  <Flex gap="12px" w="100%" flexDirection="column" alignItems="center" p="20px">
                    <Flex w="95%" justifyContent="center">
                      <Flex pt="2px" w="100%">
                        <Heading as="h3" letterSpacing="-0.28px">
                          $1,200,000
                        </Heading>
                      </Flex>
                    </Flex>
                    <Flex w="95%" justifyContent="center">
                      <Flex pt="2px" w="100%">
                        <Text>4 Bedroom Bungalow in Georgia</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </SimpleGrid>
            </Flex>
          </Flex>
        </Container>
        <Footer1
          mt="86px"
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
