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
import { BiFilterAlt } from "react-icons/bi";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export const History = () => {
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
            <Input placeholder="Search" width={"fit-content"} />
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
              <Table.ColumnHeader>Customwer Name</Table.ColumnHeader>
              <Table.ColumnHeader>Redeemed by</Table.ColumnHeader>
              <Table.ColumnHeader>Email</Table.ColumnHeader>
              <Table.ColumnHeader>Action</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row key={2}>
              <Table.Cell>{1}</Table.Cell>
              <Table.Cell>{"item.name"}</Table.Cell>
              <Table.Cell>{"item.category"}</Table.Cell>
              <Table.Cell textAlign="end">{2678}</Table.Cell>
              <Table.Cell>{"item.category"}</Table.Cell>
              <Table.Cell>{"item.category"}</Table.Cell>
              <Table.Cell>{"item.category"}</Table.Cell>
              <Table.Cell>{"..."}</Table.Cell>
            </Table.Row>
            <Table.Row key={2}>
              <Table.Cell>{3}</Table.Cell>
              <Table.Cell>{"item.name"}</Table.Cell>
              <Table.Cell>{"item.category"}</Table.Cell>
              <Table.Cell textAlign="end">{2678}</Table.Cell>
              <Table.Cell>{"item.category"}</Table.Cell>
              <Table.Cell>{"item.category"}</Table.Cell>
              <Table.Cell>{"item.category"}</Table.Cell>
              <Table.Cell>{"..."}</Table.Cell>
            </Table.Row>
            <Table.Row key={2}>
              <Table.Cell>{2}</Table.Cell>
              <Table.Cell>{"item.name"}</Table.Cell>
              <Table.Cell>{"item.category"}</Table.Cell>
              <Table.Cell textAlign="end">{2678}</Table.Cell>
              <Table.Cell>{"item.category"}</Table.Cell>
              <Table.Cell>{"item.category"}</Table.Cell>
              <Table.Cell>{"item.category"}</Table.Cell>
              <Table.Cell>{"..."}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Stack>
    </Stack>
  );
};
