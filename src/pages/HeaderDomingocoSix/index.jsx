import React from "react";
import { Helmet } from "react-helmet";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import {
  Button,
  Image,
  Text,
  Container,
  Heading,
  Flex,
  InputLeftElement,
  InputGroup,
  Input,
  TabPanels,
  TabPanel,
  Tabs,
} from "@chakra-ui/react";

export default function HeaderDomingocoSixPage() {
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
        <Tabs as={Flex} mt="32px" w="89%" display="flex" flexDirection="row" justifyContent="center">
          <TabPanels display="flex" w="100%" justifyContent="flex-start" alignItems="center">
            {[...Array(1)].map((_, index) => (
              <TabPanel key={`tab-panel${index}`} w="100%">
                <Flex flexDirection="column">
                  <Flex gap="86px" w="100%" flexDirection="column" alignItems="center">
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
                            <Input
                              placeholder=""
                              gap="35px"
                              borderColor="gray.500"
                              borderWidth="1px"
                              borderRadius="6px"
                            />
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
                    <Flex gap="40px" w="38%" flexDirection="column" alignItems="center">
                      <Flex gap="21px" w="100%" flexDirection="column" alignItems="center">
                        <Image src="images/img_house_searching_bro.svg" h="388px" />
                        <Heading size="2xl" as="h1" color="black.900" letterSpacing="0.36px" fontWeight={600}>
                          No property found
                        </Heading>
                      </Flex>
                      <Container
                        gap="21px"
                        display="flex"
                        w="100%"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="flex-start"
                        maxW="427px"
                        px="0px"
                      >
                        <Text size="lg" color="gray.600" letterSpacing="0.24px" textAlign="center">
                          There is currently no listed property.
                          <br />
                          As an admin you can create one
                        </Text>
                        <Button
                          size="2xl"
                          rightIcon={<Image src="images/img_plussign.svg" />}
                          letterSpacing="0.16px"
                          fontWeight={500}
                          gap="4px"
                          w="100%"
                          borderRadius="24px"
                        >
                          Create Listing
                        </Button>
                      </Container>
                    </Flex>
                  </Flex>
                </Flex>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
        <Footer1
          mt="87px"
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
