import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { VerifyForm } from "./verify-form";
import { VoucherValid } from "./voucher-valid";
import { VoucherReciept } from "./verify-reciept";
import { useSearchParams } from "react-router-dom";
import { toaster } from "@/components/ui/toaster";
import voucherService from "@/services/voucher";
import type { IVoucherValid } from "@/interfaces/voucher-history";

export const Vouchers = () => {
  const [step, setStep] = useState(1);

  const [searchParams] = useSearchParams();
  const brandid = searchParams.get("brandid");
  const location = searchParams.get("location");
  const [voucherCode, setVoucherCode] = useState("");
  const [voucherValid, setVoucherValid] = useState<IVoucherValid | null>(null);
  const [loading, setLoading] = useState(false);

  console.log("Brand ID:", brandid);
  console.log("Location:", location);

  const handleVerifyVoucher = async () => {
    if (voucherCode.length === 0) {
      toaster.create({
        title: "Error",
        description: "Please enter a voucher code.",
        type: "error",
      });
      return;
    }
    try {
      console.log("Verifying voucher:", voucherCode);
      setLoading(true);
      const res = await voucherService.checkVoucher({
        web_redemption: voucherCode,
        brandid: brandid || "",
      });
      console.log({ res });

      if (res.responseCode) {
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
        setVoucherValid(res);
        setStep(2); // Move to the next step if verification is successful
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleRedeemVoucher = async () => {
    try {
      setLoading(true);
      const res = await voucherService.processVoucher({
        web_redemption_voucher: voucherValid?.voucher_code || "",
        brandid: brandid || "",
        location: location || "",
      });
      console.log({ res });

      if (res.responseCode != "200") {
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
        setVoucherValid(res);
        setStep(3);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      bg="white"
      p={4}
      justifyContent={"center"}
      alignItems="center"
      w={"full"}
    >
      {step === 1 ? (
        <VerifyForm
          voucherCode={voucherCode}
          setVoucherCode={setVoucherCode}
          handleVerifyVoucher={handleVerifyVoucher}
          loading={loading}
        />
      ) : step === 2 ? (
        <VoucherValid
          handleRedeemVoucher={handleRedeemVoucher}
          voucherValid={voucherValid}
          loading={loading}
          location={location || ""}
        />
      ) : (
        <VoucherReciept setStep={setStep} voucherValid={voucherValid} />
      )}
    </Flex>
  );
};
