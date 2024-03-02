import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import {
  Text,
  Flex,
  Image,
  Heading,
  Button,
  SimpleGrid,
  InputLeftElement,
  InputGroup,
  Input,
  Container,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default function HeaderDomingocoFivePage() {
  return (
    <>
      <Helmet>
        <title>app real</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex bg="white.A700" w="100%" flexDirection="column" alignItems="center">
        <Flex bg="gray.50" w="100%" justifyContent="center" alignItems="center" p="20px" as="header">
          <Container
            w="100%"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            maxW="1280px"
            px="0px"
            mx="auto"
          >
            <Flex gap="12px" w="14%" alignItems="center">
              <Image src="images/img_clip_path_group.svg" h="48px" w="48px" />
              <Text size="xl" color="indigo.900" letterSpacing="-0.28px">
                Domingo
              </Text>
            </Flex>
            <UnorderedList
              styleType="none"
              ml="305px"
              bg="white.A700"
              w="25%"
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              p="16px"
              borderRadius="28px"
            >
              <ListItem>
                <Link href="#">
                  <Text color="gray.900_01" letterSpacing="-0.32px" ml="7px">
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
                <Link href="#" cursor="pointer" _hover={{ color: "gray.900_01" }}>
                  <Text letterSpacing="-0.32px" mr="7px">
                    Properties
                  </Text>
                </Link>
              </ListItem>
            </UnorderedList>
            <Flex ml="348px" w="11%" justifyContent="center">
              <Button size="2xl" letterSpacing="-0.32px" fontWeight={700} w="100%" borderRadius="24px">
                Contact Us
              </Button>
            </Flex>
          </Container>
        </Flex>
        <Flex gap="40px" w="100%" flexDirection="column" alignItems="center">
          <Flex
            h="666px"
            pl="80px"
            pr="56px"
            bgGradient="linear-gradient(to right #00000099,#00000000)"
            bgImage="url(/images/img_frame_1618868194.png)"
            bgSize="cover"
            bgRepeat="no-repeat"
            w="100%"
            flexDirection="column"
            alignItems="start"
            justifyContent="flex-end"
            py="80px"
          >
            <Flex mt="245px" mb="31px" gap="10px" flexDirection="column" alignItems="start">
              <Heading size="5xl" as="h1" color="white.A700" letterSpacing="0.64px" fontFamily="Onest" w="85%">
                <Heading size="5xl" as="span" color="white.A700">
                  Find Your Perfect <br />
                  Place To Call
                </Heading>
                <Heading size="5xl" as="span" color="white.A700">
                  Home
                </Heading>
              </Heading>
              <Text color="white.A700" letterSpacing="-0.16px" fontFamily="Onest" lineHeight="125%">
                Discover the perfect blend of comfort and luxury with Domingo. Explore our curated selection
                <br />
                of exquisite properties tailored to match your lifestyle aspirations. From cozy suburban retreats
                <br />
                urban havens boasting breathtaking views, we have the key to your ideal abode.
              </Text>
            </Flex>
          </Flex>
          <Container
            gap="64px"
            display="flex"
            w="100%"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            maxW="1280px"
            px="0px"
          >
            <Flex gap="40px" w="100%" flexDirection="column" alignItems="center">
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
              <Flex gap="15px" w="100%" flexDirection="column" alignItems="start">
                <Heading size="lg" letterSpacing="-0.24px">
                  Featured
                </Heading>
                <SimpleGrid w="100%" minH="auto" gap="40px" columns={3}>
                  <Flex
                    borderTopLeftRadius="26px"
                    borderTopRightRadius="26px"
                    borderBottomLeftRadius="27px"
                    borderBottomRightRadius="27px"
                    gap="16px"
                    bg="white.A700"
                    boxShadow="sm"
                    w="100%"
                    flexDirection="column"
                    alignItems="center"
                    p="16px"
                  >
                    <Flex
                      h="188px"
                      bgImage="url(/images/img_features_240x400.png)"
                      bgSize="cover"
                      bgRepeat="no-repeat"
                      w="100%"
                      alignItems="start"
                      p="16px"
                      borderRadius="14px"
                    >
                      <Image src="images/img_favourite.svg" h="32px" mb="124px" w="32px" />
                    </Flex>
                    <Flex mb="8px" gap="23px" w="100%" flexDirection="column" alignItems="center">
                      <Flex gap="8px" w="100%" flexDirection="column" alignItems="center">
                        <Flex pt="2px" w="100%" justifyContent="space-between" alignItems="end">
                          <Heading size="md" as="h3" letterSpacing="-0.20px">
                            Duplex
                          </Heading>
                          <Flex gap="2px" alignItems="center">
                            <Image src="images/img_location_01.svg" h="16px" w="16px" />
                            <Text size="xs" color="gray.900" letterSpacing="-0.12px" fontFamily="Poppins">
                              Boulder, Colorado
                            </Text>
                          </Flex>
                        </Flex>
                        <Flex w="100%" justifyContent="space-between" alignItems="center">
                          <Heading size="md" as="h4" color="indigo.900" mb="1px" letterSpacing="-0.20px">
                            $3,187,200
                          </Heading>
                          <Flex gap="4px" w="19%">
                            <Flex gap="2px" w="48%" alignItems="center">
                              <Image src="images/img_bed_single_01.svg" h="20px" w="20px" />
                              <Text color="gray.700" letterSpacing="-0.16px" fontFamily="Poppins">
                                4
                              </Text>
                            </Flex>
                            <Flex gap="2px" w="47%" alignItems="center">
                              <Image src="images/img_toilet_01.svg" h="20px" w="20px" />
                              <Text color="gray.700" letterSpacing="-0.16px" fontFamily="Poppins">
                                2
                              </Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Button size="sm" letterSpacing="-0.14px" fontWeight={600} w="100%" borderRadius="15px">
                        View listing
                      </Button>
                    </Flex>
                  </Flex>
                  <Flex
                    borderTopLeftRadius="26px"
                    borderTopRightRadius="26px"
                    borderBottomLeftRadius="27px"
                    borderBottomRightRadius="27px"
                    gap="16px"
                    bg="white.A700"
                    boxShadow="sm"
                    w="100%"
                    flexDirection="column"
                    alignItems="center"
                    p="16px"
                  >
                    <Flex
                      h="188px"
                      bgImage="url(/images/img_features_240x400.png)"
                      bgSize="cover"
                      bgRepeat="no-repeat"
                      w="100%"
                      alignItems="start"
                      p="16px"
                      borderRadius="14px"
                    >
                      <Image src="images/img_favourite.svg" h="32px" mb="124px" w="32px" />
                    </Flex>
                    <Flex mb="8px" gap="23px" w="100%" flexDirection="column" alignItems="center">
                      <Flex gap="8px" w="100%" flexDirection="column" alignItems="center">
                        <Flex pt="2px" w="100%" justifyContent="space-between" alignItems="end">
                          <Heading size="md" as="h5" letterSpacing="-0.20px">
                            Duplex
                          </Heading>
                          <Flex gap="2px" alignItems="center">
                            <Image src="images/img_location_01.svg" h="16px" w="16px" />
                            <Text size="xs" color="gray.900" letterSpacing="-0.12px" fontFamily="Poppins">
                              Boulder, Colorado
                            </Text>
                          </Flex>
                        </Flex>
                        <Flex w="100%" justifyContent="space-between" alignItems="center">
                          <Heading size="md" as="h6" color="indigo.900" mb="1px" letterSpacing="-0.20px">
                            $3,187,200
                          </Heading>
                          <Flex gap="4px" w="19%">
                            <Flex gap="2px" w="48%" alignItems="center">
                              <Image src="images/img_bed_single_01.svg" h="20px" w="20px" />
                              <Text color="gray.700" letterSpacing="-0.16px" fontFamily="Poppins">
                                4
                              </Text>
                            </Flex>
                            <Flex gap="2px" w="47%" alignItems="center">
                              <Image src="images/img_toilet_01.svg" h="20px" w="20px" />
                              <Text color="gray.700" letterSpacing="-0.16px" fontFamily="Poppins">
                                2
                              </Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Button size="sm" letterSpacing="-0.14px" fontWeight={600} w="100%" borderRadius="15px">
                        View listing
                      </Button>
                    </Flex>
                  </Flex>
                  <Flex
                    borderTopLeftRadius="26px"
                    borderTopRightRadius="26px"
                    borderBottomLeftRadius="27px"
                    borderBottomRightRadius="27px"
                    gap="16px"
                    bg="white.A700"
                    boxShadow="sm"
                    w="100%"
                    flexDirection="column"
                    alignItems="center"
                    p="16px"
                  >
                    <Flex
                      h="188px"
                      bgImage="url(/images/img_features_240x400.png)"
                      bgSize="cover"
                      bgRepeat="no-repeat"
                      w="100%"
                      alignItems="start"
                      p="16px"
                      borderRadius="14px"
                    >
                      <Image src="images/img_favourite.svg" h="32px" mb="124px" w="32px" />
                    </Flex>
                    <Flex mb="8px" w="100%" justifyContent="center">
                      <Flex w="100%" flexDirection="column" alignItems="end">
                        <Flex zIndex={1} w="100%" justifyContent="flex-end">
                          <Flex w="100%" flexDirection="column" alignItems="end">
                            <Flex zIndex={1} w="100%" flexDirection="column" alignItems="end">
                              <Flex pt="2px" w="100%" justifyContent="space-between" alignItems="end">
                                <Heading size="md" as="h5" letterSpacing="-0.20px">
                                  Duplex
                                </Heading>
                                <Flex gap="2px" alignItems="center">
                                  <Image src="images/img_location_01.svg" h="16px" w="16px" />
                                  <Text size="xs" color="gray.900" letterSpacing="-0.12px" fontFamily="Poppins">
                                    Boulder, Colorado
                                  </Text>
                                </Flex>
                              </Flex>
                              <Flex mt="9px" zIndex={1} w="100%" justifyContent="space-between" alignItems="center">
                                <Heading size="md" as="h5" color="indigo.900" letterSpacing="-0.20px">
                                  $3,187,200
                                </Heading>
                                <Flex w="23%" justifyContent="center" alignItems="center">
                                  <Image src="images/img_vector_black_900_02_5x11.svg" h="5px" />
                                  <Flex ml="-1px" gap="4px" w="88%" alignItems="center">
                                    <Flex w="50%">
                                      <Flex w="100%" flexDirection="column" alignItems="start">
                                        <Flex ml="3px" gap="2px" zIndex={1} alignItems="center">
                                          <Image src="images/img_bed_single_01.svg" h="20px" w="20px" />
                                          <Text color="gray.700" letterSpacing="-0.16px" fontFamily="Poppins">
                                            4
                                          </Text>
                                        </Flex>
                                        <Flex mt="-3px" justifyContent="center" alignItems="center">
                                          <Image src="images/img_vector_black_900_02_5x11.svg" h="5px" zIndex={1} />
                                          <Image src="images/img_vector_black_900_02_5x11.svg" h="3px" ml="-4px" />
                                        </Flex>
                                      </Flex>
                                    </Flex>
                                    <Flex gap="2px" w="45%" alignItems="center">
                                      <Image src="images/img_toilet_01.svg" h="20px" w="20px" />
                                      <Text color="gray.700" letterSpacing="-0.16px" fontFamily="Poppins">
                                        2
                                      </Text>
                                    </Flex>
                                  </Flex>
                                </Flex>
                              </Flex>
                              <Image src="images/img_vector_black_900_02.svg" h="10px" mr="63px" w="11px" />
                            </Flex>
                            <Flex mt="-19px" mr="67px" w="4%" justifyContent="flex-end" alignItems="end">
                              <Image src="images/img_vector_black_900_02_19x9.svg" h="19px" zIndex={1} />
                              <Image src="images/img_vector_black_900_02_4x1.svg" h="4px" mb="7px" ml="-5px" />
                              <Image src="images/img_vector_black_900_02_5x11.svg" h="1px" mb="6px" ml="8px" w="1px" />
                            </Flex>
                          </Flex>
                        </Flex>
                        <Image src="images/img_vector_black_900_02_5x11.svg" h="4px" mt="-4px" mr="66px" />
                        <Button
                          size="sm"
                          mt="11px"
                          letterSpacing="-0.14px"
                          fontWeight={600}
                          w="100%"
                          borderRadius="15px"
                        >
                          View listing
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex
                    borderTopLeftRadius="26px"
                    borderTopRightRadius="26px"
                    borderBottomLeftRadius="27px"
                    borderBottomRightRadius="27px"
                    gap="16px"
                    bg="white.A700"
                    boxShadow="sm"
                    w="100%"
                    flexDirection="column"
                    alignItems="center"
                    p="16px"
                  >
                    <Flex
                      h="188px"
                      bgImage="url(/images/img_features_240x400.png)"
                      bgSize="cover"
                      bgRepeat="no-repeat"
                      w="100%"
                      alignItems="start"
                      p="16px"
                      borderRadius="14px"
                    >
                      <Image src="images/img_favourite.svg" h="32px" mb="124px" w="32px" />
                    </Flex>
                    <Flex mb="8px" gap="23px" w="100%" flexDirection="column" alignItems="center">
                      <Flex gap="8px" w="100%" flexDirection="column" alignItems="center">
                        <Flex pt="2px" w="100%" justifyContent="space-between" alignItems="end">
                          <Heading size="md" as="h5" letterSpacing="-0.20px">
                            Duplex
                          </Heading>
                          <Flex gap="2px" alignItems="center">
                            <Image src="images/img_location_01.svg" h="16px" w="16px" />
                            <Text size="xs" color="gray.900" letterSpacing="-0.12px" fontFamily="Poppins">
                              Boulder, Colorado
                            </Text>
                          </Flex>
                        </Flex>
                        <Flex w="100%" justifyContent="space-between" alignItems="center">
                          <Heading size="md" as="h5" color="indigo.900" mb="1px" letterSpacing="-0.20px">
                            $3,187,200
                          </Heading>
                          <Flex gap="4px" w="19%">
                            <Flex gap="2px" w="48%" alignItems="center">
                              <Image src="images/img_bed_single_01.svg" h="20px" w="20px" />
                              <Text color="gray.700" letterSpacing="-0.16px" fontFamily="Poppins">
                                4
                              </Text>
                            </Flex>
                            <Flex gap="2px" w="47%" alignItems="center">
                              <Image src="images/img_toilet_01.svg" h="20px" w="20px" />
                              <Text color="gray.700" letterSpacing="-0.16px" fontFamily="Poppins">
                                2
                              </Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Button size="sm" letterSpacing="-0.14px" fontWeight={600} w="100%" borderRadius="15px">
                        View listing
                      </Button>
                    </Flex>
                  </Flex>
                  <Flex
                    borderTopLeftRadius="26px"
                    borderTopRightRadius="26px"
                    borderBottomLeftRadius="27px"
                    borderBottomRightRadius="27px"
                    gap="16px"
                    bg="white.A700"
                    boxShadow="sm"
                    w="100%"
                    flexDirection="column"
                    alignItems="center"
                    p="16px"
                  >
                    <Flex
                      h="188px"
                      bgImage="url(/images/img_features_240x400.png)"
                      bgSize="cover"
                      bgRepeat="no-repeat"
                      w="100%"
                      alignItems="start"
                      p="16px"
                      borderRadius="14px"
                    >
                      <Image src="images/img_favourite.svg" h="32px" mb="124px" w="32px" />
                    </Flex>
                    <Flex mb="8px" gap="23px" w="100%" flexDirection="column" alignItems="center">
                      <Flex gap="8px" w="100%" flexDirection="column" alignItems="center">
                        <Flex pt="2px" w="100%" justifyContent="space-between" alignItems="end">
                          <Heading size="md" as="h5" letterSpacing="-0.20px">
                            Duplex
                          </Heading>
                          <Flex gap="2px" alignItems="center">
                            <Image src="images/img_location_01.svg" h="16px" w="16px" />
                            <Text size="xs" color="gray.900" letterSpacing="-0.12px" fontFamily="Poppins">
                              Boulder, Colorado
                            </Text>
                          </Flex>
                        </Flex>
                        <Flex w="100%" justifyContent="space-between" alignItems="center">
                          <Heading size="md" as="h5" color="indigo.900" mb="1px" letterSpacing="-0.20px">
                            $3,187,200
                          </Heading>
                          <Flex gap="4px" w="19%">
                            <Flex gap="2px" w="48%" alignItems="center">
                              <Image src="images/img_bed_single_01.svg" h="20px" w="20px" />
                              <Text color="gray.700" letterSpacing="-0.16px" fontFamily="Poppins">
                                4
                              </Text>
                            </Flex>
                            <Flex gap="2px" w="47%" alignItems="center">
                              <Image src="images/img_toilet_01.svg" h="20px" w="20px" />
                              <Text color="gray.700" letterSpacing="-0.16px" fontFamily="Poppins">
                                2
                              </Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Button size="sm" letterSpacing="-0.14px" fontWeight={600} w="100%" borderRadius="15px">
                        View listing
                      </Button>
                    </Flex>
                  </Flex>
                  <Flex
                    borderTopLeftRadius="26px"
                    borderTopRightRadius="26px"
                    borderBottomLeftRadius="27px"
                    borderBottomRightRadius="27px"
                    gap="16px"
                    bg="white.A700"
                    boxShadow="sm"
                    w="100%"
                    flexDirection="column"
                    alignItems="center"
                    p="16px"
                  >
                    <Flex
                      h="188px"
                      bgImage="url(/images/img_features_240x400.png)"
                      bgSize="cover"
                      bgRepeat="no-repeat"
                      w="100%"
                      alignItems="start"
                      p="16px"
                      borderRadius="14px"
                    >
                      <Image src="images/img_favourite.svg" h="32px" mb="124px" w="32px" />
                    </Flex>
                    <Flex mb="8px" gap="23px" w="100%" flexDirection="column" alignItems="center">
                      <Flex gap="8px" w="100%" flexDirection="column" alignItems="center">
                        <Flex pt="2px" w="100%" justifyContent="space-between" alignItems="end">
                          <Heading size="md" as="h5" letterSpacing="-0.20px">
                            Duplex
                          </Heading>
                          <Flex gap="2px" alignItems="center">
                            <Image src="images/img_location_01.svg" h="16px" w="16px" />
                            <Text size="xs" color="gray.900" letterSpacing="-0.12px" fontFamily="Poppins">
                              Boulder, Colorado
                            </Text>
                          </Flex>
                        </Flex>
                        <Flex w="100%" justifyContent="space-between" alignItems="center">
                          <Heading size="md" as="h5" color="indigo.900" mb="1px" letterSpacing="-0.20px">
                            $3,187,200
                          </Heading>
                          <Flex gap="4px" w="19%">
                            <Flex gap="2px" w="48%" alignItems="center">
                              <Image src="images/img_bed_single_01.svg" h="20px" w="20px" />
                              <Text color="gray.700" letterSpacing="-0.16px" fontFamily="Poppins">
                                4
                              </Text>
                            </Flex>
                            <Flex gap="2px" w="47%" alignItems="center">
                              <Image src="images/img_toilet_01.svg" h="20px" w="20px" />
                              <Text color="gray.700" letterSpacing="-0.16px" fontFamily="Poppins">
                                2
                              </Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Button size="sm" letterSpacing="-0.14px" fontWeight={600} w="100%" borderRadius="15px">
                        View listing
                      </Button>
                    </Flex>
                  </Flex>
                </SimpleGrid>
              </Flex>
            </Flex>
            <Flex w="100%" justifyContent="space-between" alignItems="center">
              <Image src="images/img_frame_1618868212.png" w="51%" borderRadius="12px" />
              <Flex pt="4px" gap="36px" w="42%" flexDirection="column" alignItems="start">
                <Heading size="2xl" as="h1" letterSpacing="-0.36px">
                  Why Domingo?
                </Heading>
                <Text color="gray.900" letterSpacing="-0.16px" lineHeight="125%">
                  <Text as="span" color="gray.900" fontWeight={400}>
                    With an extensive network of seasoned professionals with in-depth knowledge of the real estate
                    market. We leverage our expertise to guide you through every step of your property journey.
                    <br />
                    We are committed to excellence in all aspects of our business. From the quality of our services to
                    the professionalism of our team, we set high standards and continuously thrive to exceed
                    expectations.
                    <br />
                  </Text>
                  <Text as="span" color="gray.900" fontWeight={400}>
                    With an extensive network of seasoned professionals with in-depth knowledge of the real estate
                    market. We leverage our expertise to guide you through every step of your property journey.
                    <br />
                    We are committed to excellence in all aspects of our business. From the quality of our services to
                    the professionalism of our team, we set high standards and continuously thrive to exceed
                    expectations.
                  </Text>
                </Text>
              </Flex>
            </Flex>
            <Flex pt="2px" gap="13px" w="100%" flexDirection="column" alignItems="start">
              <Heading size="lg" as="h4" letterSpacing="-0.24px">
                Recently sold properties
              </Heading>
              <Flex gap="40px" w="100%">
                <Flex
                  borderTopLeftRadius="26px"
                  borderTopRightRadius="26px"
                  borderBottomLeftRadius="27px"
                  borderBottomRightRadius="27px"
                  bg="white.A700"
                  boxShadow="sm"
                  w="32%"
                  flexDirection="column"
                  alignItems="center"
                  p="16px"
                >
                  <Image src="images/img_features.png" w="100%" borderRadius="14px" />
                  <Flex mt="16px" w="100%" justifyContent="space-between">
                    <Heading size="md" as="h5" mt="1px" letterSpacing="-0.20px">
                      Duplex
                    </Heading>
                    <Heading size="md" as="h5" color="indigo.900" letterSpacing="-0.20px">
                      $3,187,200
                    </Heading>
                  </Flex>
                  <Text size="s" color="gray.700" mt="15px" letterSpacing="-0.14px" lineHeight="130%">
                    “Thanks to Domingo I found my dream home
                    <br />
                    effortlessly! The seamless interaction with agents streamlined the entire process”
                  </Text>
                  <Flex mt="7px" mb="12px" w="42%" justifyContent="center">
                    <Flex gap="14px" w="100%" alignItems="center">
                      <Flex h="32px" w="32px" flexDirection="column" alignItems="center">
                        <Flex h="32px" w="32px" flexDirection="column" alignItems="center">
                          <Image src="images/img_ellipse_1.png" borderRadius="50%" h="32px" w="32px" />
                          <Image src="images/img_ellipse_1.png" borderRadius="50%" h="32px" mt="-32px" w="32px" />
                        </Flex>
                      </Flex>
                      <Flex w="70%">
                        <Flex gap="3px" w="100%" flexDirection="column" alignItems="center">
                          <Flex w="70%" justifyContent="center">
                            <Flex w="100%" flexDirection="column" alignItems="center">
                              <Text size="xs" color="gray.900" letterSpacing="-0.12px">
                                Ayesha Craig
                              </Text>
                              <Text size="xs" color="gray.900" mt="-15px" letterSpacing="-0.12px">
                                Ayesha Craig
                              </Text>
                            </Flex>
                          </Flex>
                          <Flex w="100%" justifyContent="center">
                            <Flex w="100%" flexDirection="column" alignItems="center">
                              <Text size="xs" color="gray.700" letterSpacing="-0.12px">
                                Domingo customer
                              </Text>
                              <Text size="xs" color="gray.700" mt="-15px" letterSpacing="-0.12px">
                                Domingo customer
                              </Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  borderTopLeftRadius="26px"
                  borderTopRightRadius="26px"
                  borderBottomLeftRadius="27px"
                  borderBottomRightRadius="27px"
                  bg="white.A700"
                  boxShadow="sm"
                  w="32%"
                  flexDirection="column"
                  alignItems="center"
                  p="16px"
                >
                  <Image src="images/img_features_188x368.png" w="100%" borderRadius="14px" />
                  <Flex mt="16px" w="100%" justifyContent="space-between">
                    <Heading size="md" as="h5" mt="1px" letterSpacing="-0.20px">
                      Duplex
                    </Heading>
                    <Heading size="md" as="h5" color="indigo.900" letterSpacing="-0.20px">
                      $3,187,200
                    </Heading>
                  </Flex>
                  <Text size="s" color="gray.700" mt="15px" letterSpacing="-0.14px" lineHeight="130%">
                    “Thanks to Domingo I found my dream home
                    <br />
                    effortlessly! The seamless interaction with agents streamlined the entire process”
                  </Text>
                  <Flex mt="7px" mb="12px" gap="14px" w="42%" alignItems="center">
                    <Image src="images/img_ellipse_1.png" borderRadius="50%" h="32px" w="32px" />
                    <Flex gap="3px" w="70%" flexDirection="column" alignItems="center">
                      <Text size="xs" color="gray.900" letterSpacing="-0.12px">
                        Ayesha Craig
                      </Text>
                      <Text size="xs" color="gray.700" letterSpacing="-0.12px">
                        Domingo customer
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  borderTopLeftRadius="26px"
                  borderTopRightRadius="26px"
                  borderBottomLeftRadius="27px"
                  borderBottomRightRadius="27px"
                  bg="white.A700"
                  boxShadow="sm"
                  w="32%"
                  flexDirection="column"
                  alignItems="center"
                  p="16px"
                >
                  <Image src="images/img_features_1.png" w="100%" borderRadius="14px" />
                  <Flex mt="16px" w="100%" justifyContent="space-between">
                    <Heading size="md" as="h5" mt="1px" letterSpacing="-0.20px">
                      Duplex
                    </Heading>
                    <Heading size="md" as="h5" color="indigo.900" letterSpacing="-0.20px">
                      $3,187,200
                    </Heading>
                  </Flex>
                  <Text size="s" color="gray.700" mt="15px" letterSpacing="-0.14px" lineHeight="130%">
                    “Thanks to Domingo I found my dream home
                    <br />
                    effortlessly! The seamless interaction with agents streamlined the entire process”
                  </Text>
                  <Flex mt="7px" mb="12px" gap="14px" w="42%" alignItems="center">
                    <Image src="images/img_ellipse_1.png" borderRadius="50%" h="32px" w="32px" />
                    <Flex gap="3px" w="70%" flexDirection="column" alignItems="center">
                      <Text size="xs" color="gray.900" letterSpacing="-0.12px">
                        Ayesha Craig
                      </Text>
                      <Text size="xs" color="gray.700" letterSpacing="-0.12px">
                        Domingo customer
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Container>
        </Flex>
        <Footer
          mt="83px"
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
