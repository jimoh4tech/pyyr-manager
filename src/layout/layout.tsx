import { Header } from "@/components/custom/header";
import { Sidebar } from "@/components/custom/sidebar";
// import { useCurrentUser } from "@/hooks/user.hooks";
import { Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

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
      <Flex display={{ base: "none", md: "flex" }}>
        <Sidebar />
        <Stack w={"full"} flex="1">
          <Header />
          <Outlet />
        </Stack>
      </Flex>
      <Center
        h="100vh"
        bg="gray.50"
        display={{ base: "flex", md: "none" }}
        flexDir={"column"}
        gap={3}
      >
        {" "}
        <Image src="/images/loading.gif" alt="Logo" boxSize="50px" />
        <Text fontSize="lg" color="iris.500" textAlign={"center"}>
          Kindly use your laptop or tablet for a better experience!
        </Text>
      </Center>
    </>
  );
  //   : (
  //     <Navigate to="/login" replace />
  //   );
};
