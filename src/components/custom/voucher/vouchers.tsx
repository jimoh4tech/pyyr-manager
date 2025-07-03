import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { VerifyForm } from "./verify-form";
import { VoucherValid } from "./voucher-valid";
import { VoucherReciept } from "./verify-reciept";

export const Vouchers = () => {
  const [step, setStep] = useState(1);
  return (
    <Flex
      bg="white"
      p={4}
      justifyContent={"center"}
      alignItems="center"
      w={"full"}
    >
      {step === 1 ? (
        <VerifyForm setStep={setStep} />
      ) : step === 2 ? (
        <VoucherValid setStep={setStep} />
      ) : (
        <VoucherReciept setStep={setStep} />
      )}
    </Flex>
  );
};
