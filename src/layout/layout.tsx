import { Footer } from "@/components/custom/footer";
import { Navbar } from "@/components/custom/navbar";
import { Flex } from "@chakra-ui/react";

export const Layout = () => {
  return (
    <>
      <Flex
        flexDir={"column"}
        minH={"100vh"}
        bg="gray.50"
        w="full"
        justifyContent={"space-between"}
      >
        <Navbar />
        <Footer />
      </Flex>
    </>
  );
};
