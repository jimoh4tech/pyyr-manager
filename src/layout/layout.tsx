import { Footer } from "@/components/custom/footer";
import { Navbar } from "@/components/custom/navbar";
import { Flex } from "@chakra-ui/react";

export const Layout = () => {
  //   const { currentUser, isLoading } = useCurrentUser();

  //   if (isLoading) {
  //     return (
  //       <Center h="100vh" bg="gray.50">
  //         <Box
  //           animationDuration="slow"
  //           animationStyle={{
  //             _open: "slide-fade-in",
  //             _closed: "slide-fade-out",
  //           }}
  //         >
  //           <Image src="/images/loading.gif" alt="Logo" boxSize="50px" />
  //         </Box>
  //       </Center>
  //     );
  //   }
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
  //   : (
  //     <Navigate to="/login" replace />
  //   );
};
