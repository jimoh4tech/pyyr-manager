// components/VoucherWelcome.tsx
import { Box, Button, Center, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { FaTicketAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <Flex flexDir={"column"}>
      <Box
        p={2}
        bgGradient="to-r"
        gradientFrom="gray.100"
        gradientTo="purple.300"
      >
        <Image src="/images/logo.png" alt="Pyyr Logo" />
      </Box>
      <Box
        minH="92vh"
        bgGradient="to-r"
        gradientFrom="gray.100"
        gradientTo="purple.300"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={4}
      >
        <Box
          bg="white"
          p={8}
          borderRadius="lg"
          boxShadow="md"
          maxW="sm"
          textAlign="center"
        >
          <Center mb={4}>
            <Box
              bg="gray.100"
              p={3}
              borderRadius="full"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={FaTicketAlt} boxSize={5} color="gray.700" />
            </Box>
          </Center>

          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Welcome to the Voucher <br />
            Redemption Portal
          </Text>

          <Text fontSize="sm" color="gray.600" mb={6}>
            Verify, redeem, and print customer vouchers securely and instantly.
          </Text>

          <Button
            colorPalette="purple"
            w="full"
            rounded={"lg"}
            onClick={() => navigate("/dashboard")}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};
