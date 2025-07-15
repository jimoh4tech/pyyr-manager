// components/VoucherWelcome.tsx
import { toaster } from "@/components/ui/toaster";
import voucherService from "@/services/voucher";
import {
  Box,
  Button,
  Center,
  Field,
  Flex,
  Icon,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";
import { FaHandshakeSimple } from "react-icons/fa6";

export const Claim = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      activate_voucher: "",
      afname: "",
      lname: "",
      gender: "",
      phone: "",
      email: "",
    },
    async onSubmit(values) {
      console.log(values);
      try {
        setLoading(true);

        const res = await voucherService.claimVoucher(values);

        if (res?.responseCode != "200") {
          toaster.create({
            title: "Error",
            description: res?.responseMessage || "Opps! Something went wrong.",
            type: "error",
          });
        } else {
          toaster.create({
            title: "Success",
            description: res?.responseMessage || "Voucher successfully cliam.",
            type: "success",
            duration: 9000,
          });

          formik.setValues({
            activate_voucher: "",
            afname: "",
            email: "",
            gender: "",
            lname: "",
            phone: "",
          });
        }
        console.log(res);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <Flex flexDir={"column"}>
      <Box
        p={2}
        bgGradient="to-r"
        gradientFrom="gray.100"
        gradientTo="purple.300"
      >
        <Image src="/images/logo.png" alt="Pyyr Logo" />
      </Box>
      <Box
        minH="92vh"
        bgGradient="to-r"
        gradientFrom="gray.100"
        gradientTo="purple.300"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={4}
      >
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
              p={3}
              borderRadius="full"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={FaHandshakeSimple} boxSize={5} color="gray.700" />
            </Box>
          </Center>

          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Claim Your Voucher Here
          </Text>

          <Text fontSize="sm" color="gray.600" mb={6}>
            Please enter your details below to claim a voucher on our platform
          </Text>
          <form onSubmit={formik.handleSubmit}>
            <Flex gap={2}>
              <Field.Root mb={2} required>
                <Field.Label>First Name</Field.Label>
                <Input
                  placeholder="Enter your name here"
                  name="afname"
                  value={formik.values.afname}
                  onChange={formik.handleChange}
                />
              </Field.Root>
              <Field.Root mb={2} required>
                <Field.Label>Last Name</Field.Label>
                <Input
                  placeholder="Enter your name here"
                  name="lname"
                  value={formik.values.lname}
                  onChange={formik.handleChange}
                />
              </Field.Root>
            </Flex>
            <Flex gap={2}></Flex>
            <Field.Root mb={2} required>
              <Field.Label>Voucher Code</Field.Label>
              <Input
                placeholder="e.g. PYYR-1234-ABCD"
                name="activate_voucher"
                value={formik.values.activate_voucher}
                onChange={formik.handleChange}
              />
            </Field.Root>
            <Field.Root mb={2} required>
              <Field.Label>Gender</Field.Label>
              <Input
                name="gender"
                placeholder="Enter your gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
              />
            </Field.Root>
            <Field.Root mb={2} required>
              <Field.Label>Email</Field.Label>
              <Input
                placeholder="Enter your email here"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </Field.Root>
            <Field.Root mb={4} required>
              <Field.Label>Phone Number</Field.Label>
              <Input
                placeholder="Enter your phone here"
                name="phone"
                type="tel"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
            </Field.Root>

            <Button
              colorPalette="purple"
              w="full"
              rounded={"lg"}
              type="submit"
              loading={loading}
            >
              Claim
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};
