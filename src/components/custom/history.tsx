import type {
  IVoucherHistory,
  IVoucherValid,
} from "@/interfaces/voucher-history";
import {
  Button,
  CloseButton,
  Dialog,
  Flex,
  Input,
  InputGroup,
  Menu,
  Portal,
  Stack,
  Table,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { VoucherReciept } from "./voucher/verify-reciept";

export const History = ({ vouchers }: { vouchers: IVoucherHistory[] }) => {
  const [filterText, setFilterText] = useState("");
  const [voucherValid, setVoucherValid] = useState<IVoucherValid | null>(null);
  const [open, setOpen] = useState(false);

  const handleView = (voucher: IVoucherValid) => {
    setOpen(true);
    setVoucherValid(voucher);
  };
  return (
    <Stack>
      <Stack>
        <Text fontSize="xl" fontWeight="bold">
          Voucher History
        </Text>
      </Stack>

      <Stack>
        <Flex justifyContent={"space-between"} alignItems="center">
          <InputGroup startElement={<HiMiniMagnifyingGlass />}>
            <Input
              placeholder="Search"
              width={"fit-content"}
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </InputGroup>

          {/* <Menu.Root>
            <Menu.Trigger asChild>
              <Button variant="outline" size="sm">
                <BiFilterAlt />
                Filter
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="date">Date</Menu.Item>
                  <Menu.Item value="claimed">Claimed</Menu.Item>
                  <Menu.Item value="unclaimed">UnClaimed</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root> */}
        </Flex>
        <Table.Root size="sm">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>S/N</Table.ColumnHeader>
              <Table.ColumnHeader>Date & Time</Table.ColumnHeader>
              <Table.ColumnHeader>Voucher Code</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
              <Table.ColumnHeader>Customer Name</Table.ColumnHeader>
              {/* <Table.ColumnHeader>Redeemed by</Table.ColumnHeader> */}
              <Table.ColumnHeader>Email</Table.ColumnHeader>
              <Table.ColumnHeader>Location</Table.ColumnHeader>
              <Table.ColumnHeader>Action</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {vouchers.length > 0 &&
              vouchers
                .filter(
                  (v) =>
                    v.email?.toLowerCase().includes(filterText.toLowerCase()) ||
                    v.customer_name
                      ?.toLowerCase()
                      .includes(filterText.toLowerCase()) ||
                    v.voucher_code
                      ?.toLowerCase()
                      .includes(filterText.toLowerCase()) ||
                    v?.location
                      ?.toLowerCase()
                      .includes(filterText.toLowerCase())
                )
                .map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>{item.datetime}</Table.Cell>
                    <Table.Cell>
                      {item.voucher_code?.length == 0
                        ? "Nil"
                        : item.voucher_code}
                    </Table.Cell>
                    <Table.Cell textAlign="end">{item.amount}</Table.Cell>
                    <Table.Cell>
                      {item.customer_name?.length == 0
                        ? "Nil"
                        : item.customer_name}
                    </Table.Cell>
                    <Table.Cell>
                      {item.email?.length == 0 ? "Nil" : item.email}
                    </Table.Cell>
                    <Table.Cell>
                      {item?.location == null ? "Nil" : item.location}
                    </Table.Cell>
                    {/* <Table.Cell>{"item.category"}</Table.Cell> */}
                    <Table.Cell>
                      <Menu.Root>
                        <Menu.Trigger asChild>
                          <Button variant="outline" size="sm">
                            <HiOutlineDotsHorizontal />
                          </Button>
                        </Menu.Trigger>
                        <Portal>
                          <Menu.Positioner>
                            <Menu.Content>
                              <Menu.Item
                                value="view"
                                onClick={() => handleView(item)}
                              >
                                <MdOutlineRemoveRedEye />
                                View
                              </Menu.Item>
                            </Menu.Content>
                          </Menu.Positioner>
                        </Portal>
                      </Menu.Root>
                    </Table.Cell>
                  </Table.Row>
                ))}
          </Table.Body>
        </Table.Root>
      </Stack>
      <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <VoucherReciept setOpen={setOpen} voucherValid={voucherValid} />
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Stack>
  );
};
