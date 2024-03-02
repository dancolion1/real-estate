import React from "react";
import { Helmet } from "react-helmet";
import { Image, Text, Button, Link, Input, Flex, Heading, Container } from "@chakra-ui/react";

export default function MacBookPro14OnePage() {
  return (
    <>
      <Helmet>
        <title>app real</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex bg="white.A700" w="100%" justifyContent="flex-end">
        <Container
          w="100%"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="start"
          maxW="1432px"
          px="0px"
          mx="auto"
        >
          <Flex mt="48px" gap="99px" w="37%" flexDirection="column" alignItems="start">
            <Flex gap="12px" alignItems="center">
              <Image src="images/img_clip_path_group.svg" h="32px" w="32px" />
              <Text size="xl" color="indigo.900" letterSpacing="-0.28px">
                Domingo
              </Text>
            </Flex>
            <Flex ml="46px" w="92%" flexDirection="column" alignItems="start">
              <Flex gap="32px" w="100%" flexDirection="column" alignItems="center">
                <Flex pt="5px" gap="3px" w="50%" flexDirection="column" alignItems="center">
                  <Link href="#">
                    <Heading size="4xl" as="h1" letterSpacing="-0.40px">
                      Log in
                    </Heading>
                  </Link>
                  <Text color="gray.700" letterSpacing="-0.16px">
                    <Text as="span" color="gray.700">
                      Login to your{" "}
                    </Text>
                    <Text as="span" color="indigo.900">
                      Domingo{" "}
                    </Text>
                    <Text as="span" color="gray.700">
                      account{" "}
                    </Text>
                  </Text>
                </Flex>
                <Flex gap="24px" w="100%" flexDirection="column" alignItems="center">
                  <Flex gap="7px" w="100%" flexDirection="column" alignItems="start">
                    <Text color="gray.900" letterSpacing="0.16px">
                      Email address
                    </Text>
                    <Input
                      size="xs"
                      colorScheme="gray_100"
                      placeholder="Enter your mail address"
                      letterSpacing="0.14px"
                      borderRadius="6px"
                    />
                  </Flex>
                  <Flex gap="8px" w="100%" flexDirection="column" alignItems="start">
                    <Flex gap="7px" w="100%" flexDirection="column" alignItems="start">
                      <Text color="gray.900" letterSpacing="0.16px">
                        Password
                      </Text>
                      <Input
                        size="xs"
                        colorScheme="gray_100"
                        placeholder="Enter your password"
                        type="password"
                        letterSpacing="0.14px"
                        borderRadius="6px"
                      />
                    </Flex>
                    <Link href="#">
                      <Text size="xs" color="indigo.900" letterSpacing="0.12px" textDecoration="underline">
                        Forgot your password?
                      </Text>
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
              <Button size="2xl" mt="47px" letterSpacing="-0.16px" fontWeight={700} w="100%" borderRadius="24px">
                Log in
              </Button>
              <Button
                size="2xl"
                colorScheme="white_A700"
                rightIcon={<Image src="images/img_frame_1618868191.svg" />}
                mt="16px"
                letterSpacing="-0.32px"
                fontWeight={700}
                gap="8px"
                borderColor="indigo.900"
                borderWidth="1px"
                borderStyle="solid"
                w="100%"
                borderRadius="24px"
              >
                Log in with gmail
              </Button>
              <Text size="xs" color="gray.600" mt="8px" fontWeight={400}>
                <Text size="xs" as="span" color="gray.600" fontWeight={500}>
                  Don’t have an account?{" "}
                </Text>
                <Text size="xs" as="span" color="indigo.900" fontWeight={500}>
                  Sign up
                </Text>
              </Text>
            </Flex>
          </Flex>
          <Image src="images/img_frame_1618868128.png" w="51%" />
        </Container>
      </Flex>
    </>
  );
}
