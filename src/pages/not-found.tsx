import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      bg="gray.100"
      px={6}
    >
      <VStack gap={6} maxW="md">
        {/* 404 Heading */}
        <Heading size="2xl" fontWeight="bold">
          404 - Page Not Found
        </Heading>

        {/* Subtext */}
        <Text fontSize="lg" color="gray.600">
          Oops! The page you are looking for doesn't exist or has been moved.
        </Text>

        {/* Go Back Button */}
        <Button
          colorPalette="purple"
          color={"white"}
          size="lg"
          onClick={() => navigate("/")}
          _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
        >
          Go Back Home
        </Button>
      </VStack>
    </Box>
  );
}
