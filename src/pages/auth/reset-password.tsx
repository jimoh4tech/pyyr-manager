import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  Fieldset,
  Image,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useFormik } from "formik";
// import authServices from "@/services/auth.services";
import { toaster } from "@/components/ui/toaster";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PinInput } from "@/components/ui/pin-input";
import { PasswordInput } from "@/components/ui/password-input";

export const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  // const formik = useFormik({
  //   initialValues: { confirmPassword: "", password: "", verificationCode: [] },
  //   onSubmit: async (values) => {
  //     console.log(values);
  //     try {
  //       const response = await authServices.resetPassword({
  //         ...values,
  //         verificationCode: values.verificationCode.join(""),
  //         email: params.get("email") || "",
  //       });
  //       console.log(response);

  //       if (response.success) {
  //         toaster.create({
  //           title: "Success",
  //           description: response.message || "Password Reset Successful",
  //           type: "success",
  //         });
  //         navigate("/");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       toaster.create({
  //         title: "Error",
  //         // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //         description: (error as any).response?.data?.error,
  //         type: "error",
  //       });
  //     }
  //   },
  // });
  return (
    <Box
      maxW="400px"
      mx="auto"
      mt={10}
      p={8}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
      textAlign="center"
    >
      <Box mb={6}>
        <Image src="/images/logo.svg" alt="Lenzr Logo" mx="auto" />
      </Box>
      <Heading size="lg" mb={6}>
        Forgot Password
      </Heading>
      <Text color={"gray.400"} fontSize={"sm"} mb={4}>
        Enter your email and we'll send you instructions to reset your password
      </Text>
      {/* NOTE: onSubmit={formik.handleSubmit} */}
      <form>
        <Fieldset.Root>
          <Fieldset.Content>
            <Field label="Verification Code" required>
              <PinInput
                name="verificationCode"
                otp
                count={6}
                size={"lg"}
                // onValueChange={(e: { value: any }) =>
                //   formik.setFieldValue("verificationCode", e.value)
                // }
              />
            </Field>
            <Field label="Password" required>
              <PasswordInput
                name="password"
                placeholder="Enter your password ( 6+ characters)"
                bgColor={"gray.50"}
                size="sm"
                // onChange={formik.handleChange}
                // value={formik.values.password}
                minLength={6}
              />
            </Field>
            <Field label="Confirm Password" required>
              <PasswordInput
                name="confirmPassword"
                placeholder="Enter your password ( 6+ characters)"
                bgColor={"gray.50"}
                size="sm"
                // onChange={formik.handleChange}
                // value={formik.values.confirmPassword}
                minLength={6}
              />
            </Field>
          </Fieldset.Content>

          <Button
            colorPalette="iris"
            color={"white"}
            type="submit"
            size="sm"
            // loading={formik.isSubmitting}
          >
            Submit
          </Button>
        </Fieldset.Root>
      </form>
      <Flex justifyContent={"center"} mt={6} align="center" gap={1}>
        <Text color="gray.500" fontSize={"sm"}>
          Proceed to
        </Text>

        <Link color="#5A4FCF" fontSize="sm" href="/login">
          Login
        </Link>
      </Flex>
    </Box>
  );
};
