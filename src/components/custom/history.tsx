import type { IVoucherHistory } from "@/interfaces/voucher-history";
import {
  Button,
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
import { BiFilterAlt } from "react-icons/bi";
import { FiPrinter } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export const History = ({ vouchers }: { vouchers: IVoucherHistory[] }) => {
  const [filterText, setFilterText] = useState("");
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

          <Menu.Root>
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
          </Menu.Root>
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
                              <Menu.Item value="view">
                                <MdOutlineRemoveRedEye />
                                View
                              </Menu.Item>
                              <Menu.Item value="claimed">
                                {" "}
                                <FiPrinter />
                                Print Reciept
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
    </Stack>
  );
};
