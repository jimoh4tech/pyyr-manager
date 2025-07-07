import {
  Box,
  Button,
  Center,
  Field,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { FaTicketAlt } from "react-icons/fa";

export const VerifyForm = ({ setStep }: { setStep: (val: number) => void }) => {
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
          <Icon as={FaTicketAlt} boxSize={5} color="gray.700" />
        </Box>
      </Center>

      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Verify a Voucher
      </Text>

      <Text fontSize="sm" color="gray.600" mb={4}>
        Enter the customer's voucher code to verify its validity before
        redeeming
      </Text>
      <Field.Root mb={4}>
        <Field.Label>Voucher Code</Field.Label>
        <Input placeholder="e.g. PYYR-1234-ABCD" />
      </Field.Root>

      <Button
        colorPalette="purple"
        w="full"
        rounded={"lg"}
        onClick={() => setStep(2)}
        _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
      >
        Verify Voucher
      </Button>
    </Box>
  );
};
