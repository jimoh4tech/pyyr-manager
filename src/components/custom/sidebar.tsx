// import { useCurrentUser } from "@/hooks/user.hooks";
import {
  Box,
  Text,
  Image,
  Stack,
  Button,
  Separator,
  Collapsible,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaBookOpen, FaDatabase } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward, IoMdLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import {
  MdDashboard,
  MdOutlineAttachMoney,
  MdOutlinePeopleAlt,
} from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const [open, onOpenChange] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  //   const { setCurrentUser } = useCurrentUser();
  const handleLogout = () => {
    localStorage.removeItem("X23APPY2ADMIN");
    // setCurrentUser(null);
    navigate("/login");
  };
  return (
    <Box
      w="250px"
      bgColor="#FDFDFF"
      h="100vh"
      p="4"
      borderRight="1px solid #FDFDFF"
      position="sticky"
      top="0"
      overflowY="auto"
      css={{
        /* Hide scrollbar for Webkit browsers */
        "::-webkit-scrollbar": { display: "none" },
        /* Hide scrollbar for Firefox */
        scrollbarWidth: "none",
        /* Hide scrollbar for Edge & IE */
        "-ms-overflow-style": "none",
      }}
    >
      {/* Logo */}
      <Image
        src="/images/logo.svg"
        alt="Login Image"
        // w={"100px"}
        borderRadius="lg"
        onClick={() => navigate("/")}
        cursor={"pointer"}
        mb={4}
      />
      <Flex justifyContent={"space-between"} flexDir={"column"} h={"90%"}>
        <Stack gap={1}>
          <Button
            justifyContent={"start"}
            colorPalette={location.pathname === "/" ? "lemon" : "black"}
            color={location.pathname === "/" ? "white" : "black"}
            variant={location.pathname === "/" ? "solid" : "plain"}
            onClick={() => navigate("/")}
          >
            <MdDashboard /> Overview
          </Button>
          <Separator mt={1} />
          <Text fontSize="sm" color="gray.500" px="4">
            Management
          </Text>
          <Collapsible.Root open={open}>
            <Button
              colorPalette={
                location.pathname === "/trainers" ||
                location.pathname === "/learners"
                  ? "iris"
                  : "black"
              }
              variant={
                location.pathname === "/trainers" ||
                location.pathname === "/learners"
                  ? "solid"
                  : "plain"
              }
              w={"full"}
              justifyContent={"start"}
              onClick={() => onOpenChange(!open)}
            >
              <MdOutlinePeopleAlt />
              Users
              <Flex mx={"24"}>
                {open ? <IoIosArrowForward /> : <IoIosArrowDown />}
              </Flex>
            </Button>
            <Collapsible.Content gap={2}>
              <Stack pl={4} mt={2}>
                <Button
                  colorPalette={"iris"}
                  variant={
                    location.pathname === "/learners" ? "subtle" : "plain"
                  }
                  onClick={() => navigate("/learners")}
                  justifyContent={"start"}
                >
                  <MdOutlinePeopleAlt />
                  Learners
                </Button>
                <Button
                  colorPalette={"iris"}
                  variant={
                    location.pathname === "/trainers" ? "subtle" : "plain"
                  }
                  onClick={() => navigate("/trainers")}
                  justifyContent={"start"}
                >
                  <MdOutlinePeopleAlt />
                  Trainers
                </Button>
              </Stack>
            </Collapsible.Content>
          </Collapsible.Root>

          <Button
            colorPalette={location.pathname === "/courses" ? "iris" : "black"}
            color={location.pathname === "/courses" ? "white" : "black"}
            variant={location.pathname === "/courses" ? "solid" : "plain"}
            onClick={() => navigate("/courses")}
            justifyContent={"start"}
          >
            <FaBookOpen /> Courses
          </Button>
          <Button
            colorPalette={
              location.pathname === "/categories" ? "iris" : "black"
            }
            color={location.pathname === "/categories" ? "white" : "black"}
            variant={location.pathname === "/categories" ? "solid" : "plain"}
            onClick={() => navigate("/categories")}
            justifyContent={"start"}
          >
            <FaDatabase /> Categories
          </Button>
          <Button
            colorPalette={location.pathname === "/finance" ? "iris" : "black"}
            color={location.pathname === "/finance" ? "white" : "black"}
            variant={location.pathname === "/finance" ? "solid" : "plain"}
            onClick={() => navigate("/finance")}
            justifyContent={"start"}
          >
            <MdOutlineAttachMoney /> Subscriptions
          </Button>
          <Separator mt={1} />
          <Text fontSize="sm" color="gray.500" px="4">
            Reports
          </Text>
          <Button
            colorPalette={location.pathname === "/reports" ? "iris" : "black"}
            color={location.pathname === "/reports" ? "white" : "black"}
            variant={location.pathname === "/reports" ? "solid" : "plain"}
            onClick={() => navigate("/reports")}
            justifyContent={"start"}
          >
            <TbReportAnalytics /> Reports & Analytics
          </Button>
          <Separator mt={1} />
          <Text fontSize="sm" color="gray.500" px="4">
            Settings & Configurations
          </Text>

          <Button
            colorPalette={location.pathname === "/settings" ? "iris" : "black"}
            color={location.pathname === "/settings" ? "white" : "black"}
            variant={location.pathname === "/settings" ? "solid" : "plain"}
            onClick={() => navigate("/settings")}
            justifyContent={"start"}
          >
            <IoSettingsOutline /> Settings and Privacy
          </Button>
        </Stack>
        <Button variant="plain" justifyContent={"start"} onClick={handleLogout}>
          <IoMdLogOut />
          Logout
        </Button>
      </Flex>
    </Box>
  );
};
