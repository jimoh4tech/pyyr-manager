import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { VerifyForm } from "./verify-form";
import { VoucherValid } from "./voucher-valid";
import { VoucherReciept } from "./verify-reciept";
import { useSearchParams } from "react-router-dom";
import voucherServices from "@/services/vouher";

export const Vouchers = () => {
  const [step, setStep] = useState(1);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  console.log("Token:", token);

  const fetchVoucher = async () => {
    const res = await voucherServices.getVoucherHistory({
      list_history: token || "",
    });
    console.log({ res });
  };

  useEffect(() => {
    if (token) {
      fetchVoucher();
      setStep(2); // Automatically go to VoucherValid step if token is present
    }
  }, [token]);

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
