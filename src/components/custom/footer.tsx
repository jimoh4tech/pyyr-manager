import { Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      as="footer"
      px={6}
      py={3}
      align="center"
      borderTop="1px solid"
      borderColor="gray.200"
      bg="white"
      w="full"
      justifyContent={"space-between"}
    >
      <Text fontSize="sm" color="gray.600">
        Pyy­r © {new Date().getFullYear()}
      </Text>
      <Text fontSize="sm" color="gray.600">
        Need help? Contact Support: support@pyyrapp.com
      </Text>
      <Text fontSize="sm" color="gray.600">
        Terms of Use | Privacy Policy
      </Text>
    </Flex>
  );
};
