import React from "react";
import { Modal, ModalContent, ModalOverlay, Image, Heading, Flex } from "@chakra-ui/react";

export default function HeaderDomingocoThree({ isOpen, onClose, ...props }) {
  return (
    <Modal {...props} isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent minW="545px">
        <Flex
          gap="34px"
          bg="white.A700"
          w="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          px="56px"
          py="59px"
          borderRadius="24px"
        >
          <Flex gap="9px" w="51%" flexDirection="column" alignItems="center">
            <Heading size="lg" as="h1" color="indigo.900" letterSpacing="-0.48px">
              Successful
            </Heading>
            <Heading size="md" color="gray.600" letterSpacing="-0.40px" textAlign="center" lineHeight="24px">
              Your interest has been
              <br />
              registered successfully{" "}
            </Heading>
          </Flex>
          <Image src="images/img_vector_indigo_900.svg" h="124px" mb="3px" w="124px" />
        </Flex>
      </ModalContent>
    </Modal>
  );
}
