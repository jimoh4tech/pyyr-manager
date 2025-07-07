import type { IVoucherValid } from "@/interfaces/voucher-history";
import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaCircleCheck } from "react-icons/fa6";

export const VoucherValid = ({
  handleRedeemVoucher,
  voucherValid,
}: {
  handleRedeemVoucher: () => void;
  voucherValid: IVoucherValid | null;
}) => {
  return (
    <Box
      bg="white"
      p={4}
      borderRadius="lg"
      boxShadow="md"
      maxW="sm"
      textAlign="center"
    >
      <Center mb={4}>
        <Box
          bg="gray.100"
          p={2}
          borderRadius="full"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={FaCircleCheck} boxSize={5} color="green.700" />
        </Box>
      </Center>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Voucher Valid
      </Text>
      <Text fontSize="sm" color="gray.600" mb={4}>
        Verified successfully. Proceed to redeem for the customer
      </Text>
      <Text fontSize={"sm"}>Voucher Details</Text>

      <Stack
        border={"1px solid"}
        borderColor="gray.200"
        bg={"gray.50"}
        p={2}
        mb={4}
        rounded={"md"}
      >
        <Flex justifyContent="space-between">
          <Text fontSize={"xs"} fontWeight={"medium"}>
            Code:
          </Text>
          <Text fontSize={"xs"} fontWeight={"medium"}>
            {voucherValid?.voucher_code || null}
          </Text>
        </Flex>
        <Separator />
        <Flex justifyContent="space-between">
          <Text fontSize={"xs"} fontWeight={"medium"}>
            Amount:
          </Text>
          <Text fontSize={"xs"} fontWeight={"medium"}>
            ₦{voucherValid?.amount || 0}
          </Text>
        </Flex>
        <Separator />
        <Flex justifyContent="space-between">
          <Text fontSize={"xs"} fontWeight={"medium"}>
            Expires:
          </Text>
          <Text fontSize={"xs"} fontWeight={"medium"}>
            N/A
          </Text>
        </Flex>
        <Separator />
        <Flex justifyContent="space-between">
          <Text fontSize={"xs"} fontWeight={"medium"}>
            Customer name:
          </Text>
          <Text fontSize={"xs"} fontWeight={"medium"}>
            {voucherValid?.customer_name || "N/A"}
          </Text>
        </Flex>
        <Separator />
        <Flex justifyContent="space-between">
          <Text fontSize={"xs"} fontWeight={"medium"}>
            Type:
          </Text>
          <Text fontSize={"xs"} fontWeight={"medium"}>
            {voucherValid?.type || "N/A"}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorPalette="purple"
        w="full"
        rounded={"lg"}
        onClick={handleRedeemVoucher}
        _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
      >
        Redeem Voucher
      </Button>
    </Box>
  );
};
