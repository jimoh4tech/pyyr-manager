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

export const VoucherReciept = ({
  setStep,
  voucherValid,
}: {
  setStep: (val: number) => void;
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
        Print Receipt
      </Text>

      <Text fontSize="sm" color="gray.600" mb={4}>
        Print and hand this receipt to the customer as proof of redemption
      </Text>
      <Stack
        border={"1px solid"}
        borderColor="gray.200"
        bg={"gray.100"}
        p={2}
        mb={4}
        rounded={"md"}
      >
        <Text fontSize={"sm"} fontWeight={"black"}>
          Voucher Redeemed Successfully
        </Text>
        <Text fontSize="sm" color="gray.600" mb={4}>
          Enter the customer’s voucher code to verify its validity before
          redeeming
        </Text>

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
              {voucherValid?.voucher_code || "N/A"}
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
      </Stack>

      <Flex justifyContent={"space-between"} mt={4}>
        <Button
          colorPalette="purple"
          variant={"subtle"}
          rounded={"lg"}
          w={"2/5"}
          onClick={() => setStep(1)}
          _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
        >
          Redeem Another
        </Button>
        <Button
          colorPalette="purple"
          rounded={"lg"}
          w={"2/5"}
          onClick={() => setStep(2)}
          _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
        >
          Print Receipt
        </Button>
      </Flex>
    </Box>
  );
};
