import { toaster } from "@/components/ui/toaster";
import voucherService from "@/services/voucher";
import {
  Box,
  Button,
  Center,
  Field,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaTicketAlt } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

export const VerifyForm = ({ setStep }: { setStep: (val: number) => void }) => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [voucherCode, _setVoucherCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerifyVoucher = async () => {
    try {
      console.log("Verifying voucher:", voucherCode);
      setLoading(true);
      const res = await voucherService.checkVoucher({
        web_redemption: voucherCode,
        brandid: token || "",
      });
      console.log({ res });

      if (res.responseCode !== "200") {
        toaster.create({
          title: "Error",
          description: res.responseMessage || "Opps! Something went wrong.",
          type: "error",
        });
      } else {
        toaster.create({
          title: "Success",
          description: res.responseMessage || "Successfully verified voucher.",
          type: "success",
        });
        setStep(2); // Move to the next step if verification is successful
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
        loading={loading}
        onClick={handleVerifyVoucher}
        _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
      >
        Verify Voucher
      </Button>
    </Box>
  );
};
