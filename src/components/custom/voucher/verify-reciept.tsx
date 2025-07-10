import { toaster } from "@/components/ui/toaster";
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
import { toPng } from "html-to-image";
import { FaCircleCheck } from "react-icons/fa6";

export const VoucherReciept = ({
  setStep,
  voucherValid,
}: {
  setStep: (val: number) => void;
  voucherValid: IVoucherValid | null;
}) => {
  const downloadInvoiceAsImage = async () => {
    const node = document.getElementById("invoice");

    if (!node) return;

    try {
      // Wait for fonts and images to load
      await document.fonts.ready;

      // Wait for all images inside the container to load
      const images = node.getElementsByTagName("img");
      await Promise.all(
        Array.from(images).map(
          (img) =>
            new Promise((resolve) => {
              if (img.complete) resolve(true);
              else img.onload = img.onerror = () => resolve(true);
            })
        )
      );

      // Add a short delay to ensure all styles apply correctly
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Capture the image
      const dataUrl = await toPng(node, {
        quality: 1,
        cacheBust: true, // Helps to prevent caching issues
        backgroundColor: "#ffffff", // Ensures background color consistency
      });

      // Trigger download
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "invoice.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toaster.create({
        title: "Invoice Downloaded",
        description: "Invoice downloaded successfully.",
        type: "success",
        duration: 9000,
      });
    } catch (error) {
      console.error("❌ Failed to capture image", error);
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
      id="invoice"
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
              {voucherValid?.datetime || "N/A"}
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
          onClick={downloadInvoiceAsImage}
          _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
        >
          Print Receipt
        </Button>
      </Flex>
    </Box>
  );
};
