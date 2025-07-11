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

  const [vouchers, setVouchers] = useState<IVoucherHistory[] | null>(null);

  const fetchVoucher = async () => {
    try {
      const res = await voucherServices.getVoucherHistory({
        list_history: brandid || "",
      });
      console.log({ res });
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

      <Tabs.Root defaultValue="vouchers" w={"full"} colorPalette={"purple"}>
        <Flex justifyContent={"space-between"} w="full" alignItems="center">
          <Box>
            <Image src="/images/logo.png" alt="Pyyr Logo" />
          </Box>
          <Spacer />
          <Tabs.List>
            <Tabs.Trigger value="vouchers">
              <PiReceiptBold />
              Redeem Voucher
            </Tabs.Trigger>
            <Tabs.Trigger value="history">
              <MdHistory />
              History
            </Tabs.Trigger>
          </Tabs.List>
          <Spacer />
          <HStack gap={3}>
            <Avatar
              size="sm"
              name="Gloryfoodstores"
              src="https://i.pravatar.cc/150?img=3"
            />
            <Text fontSize="sm" color="gray.700">
              Hello Gloryfoodstores!
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
