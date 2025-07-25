import {
  Box,
  Flex,
  HStack,
  Text,
  Image,
  Tabs,
  Spacer,
  Center,
} from "@chakra-ui/react";
import { MdHistory } from "react-icons/md";
import { PiReceiptBold } from "react-icons/pi";
import { Avatar } from "../ui/avatar";
import { Vouchers } from "./voucher/vouchers";
import { History } from "./history";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { IVoucherHistory } from "@/interfaces/voucher-history";
import voucherServices from "@/services/voucher";
import LogRocket from "logrocket";

export const Navbar = () => {
  const [searchParams] = useSearchParams();
  const brandid = searchParams.get("brandid");
  const location = searchParams.get("location");
  const [brandName, setBrandName] = useState<string | null>(null);
  const [brandLogo, setBrandLogo] = useState<string | null>(null);

  const [vouchers, setVouchers] = useState<IVoucherHistory[] | null>(null);

  const fetchVoucher = async () => {
    try {
      const res = await voucherServices.getVoucherHistory({
        list_history: brandid || "",
      });
      console.log({ res });
      setBrandName(res[res?.length - 1]?.brand_name || null);
      setBrandLogo(res[res?.length - 1]?.logo || null);
      setVouchers(res);
    } catch (error) {
      console.error("Error fetching voucher history:", error);
    }
  };

  useEffect(() => {
    if (brandid) {
      LogRocket.identify(brandid, {
        brandid,
      });
      fetchVoucher();
    }
  }, [brandid]);
  return (
    <Flex
      as="nav"
      px={6}
      py={3}
      align="center"
      borderBottom="1px solid"
      borderColor="gray.200"
      bg="white"
      w="full"
    >
      {/* Navigation links */}

      <Tabs.Root defaultValue="history" w={"full"} colorPalette={"purple"}>
        <Flex
          justifyContent={"space-between"}
          w="full"
          alignItems="center"
          flexDir={{ base: "column", md: "row" }}
          gap={2}
        >
          <Box>
            <Image src="/images/logo.png" alt="Pyyr Logo" />
          </Box>
          <Spacer />
          <Tabs.List>
            {location && (
              <Tabs.Trigger value="vouchers">
                <PiReceiptBold />
                Redeem Voucher
              </Tabs.Trigger>
            )}
            <Tabs.Trigger value="history">
              <MdHistory />
              History
            </Tabs.Trigger>
          </Tabs.List>
          <Spacer />
          <HStack gap={3} display={{ base: "none", md: "flex" }}>
            <Avatar
              size="sm"
              name={brandName || "User"}
              src={brandLogo || ""}
            />
            <Text fontSize="sm" color="gray.700">
              {`Hello ${brandName || "User"}`}
            </Text>
          </HStack>
        </Flex>

        <Tabs.Content value="vouchers">
          <Vouchers />
        </Tabs.Content>
        <Tabs.Content value="history">
          {vouchers ? (
            <History vouchers={vouchers} />
          ) : (
            <Center minH={"70vh"}>
              <Image src="/images/loading.gif" />
            </Center>
          )}
        </Tabs.Content>
      </Tabs.Root>
    </Flex>
  );
};
