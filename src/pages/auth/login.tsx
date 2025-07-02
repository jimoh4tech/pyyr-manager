import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Text,
  Fieldset,
  Highlight,
  Image,
} from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import { useFormik } from "formik";
import { toaster } from "@/components/ui/toaster";
import { useNavigate } from "react-router-dom";
import { PasswordInput } from "@/components/ui/password-input";

export const LoginPage = () => {
  const navigate = useNavigate();
  //   const { setCurrentUser } = useCurrentUser();
  //   const formik = useFormik({
  //     initialValues: { email: "", password: "" },
  //     onSubmit: async (values) => {
  //       console.log(values);
  //       try {
  //         const response = await authServices.login(values);
  //         console.log(response, response?.data?.user?.role);

  //         if (
  //           response?.data?.user?.role !== "ADMIN" &&
  //           response?.data?.user?.role !== "TRAINER"
  //         ) {
  //           toaster.create({
  //             title: "Unauthorized Error",
  //             description: "You don't have access to this portal!",
  //             type: "error",
  //           });
  //           return;
  //         }
  //         if (response.success) {
  //           authServices.setToken(response?.data?.token);
  //           localStorage.setItem("X23APPY2ADMIN", response?.data?.token);
  //           setCurrentUser(response?.data?.user);
  //           toaster.create({
  //             title: "Success",
  //             description: response.message || "Login Successful",
  //             type: "success",
  //           });
  //           navigate("/");
  //         }
  //       } catch (error) {
  //         console.log(error);
  //         toaster.create({
  //           title: "Error",
  //           description:
  //             (error as any)?.response?.data?.error ||
  //             (error as any)?.message ||
  //             "Error processing request!",
  //           type: "error",
  //         });
  //       }
  //     },
  //   });
  // const handleRegisterWithGoogle = async () => {
  //   setLoading(true);
  //   window.location.href = `${baseUrl}/auth/google`;
  // };
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
      <Heading size="lg" mb={2}>
        <Highlight query="Lenzr" styles={{ color: "#12C88E" }}>
          Welcome to Lenzr
        </Highlight>
      </Heading>
      <Text color={"gray.400"} fontSize={"sm"} mb={4}>
        Login to your account to access the admin portal.
      </Text>
      {/* NOTE:onSubmit={formik.handleSubmit} */}
      <form>
        <Fieldset.Root>
          <Fieldset.Content>
            <Field label="Email" required>
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                bgColor={"gray.50"}
                size="sm"
                // onChange={formik.handleChange}
                // value={formik.values.email}
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
          </Fieldset.Content>
          <Flex justify="space-between" align="center">
            <Checkbox size={"sm"} colorPalette={"iris"} color={"gray"}>
              Remember me
            </Checkbox>
            <Link color="#12C88E" fontSize="sm" href="/forget-password">
              Forgot Password?
            </Link>
          </Flex>
          <Button
            colorPalette="iris"
            color="white"
            type="submit"
            size="sm"
            // loading={formik.isSubmitting}
          >
            Login
          </Button>
        </Fieldset.Root>
      </form>
    </Box>
  );
};
