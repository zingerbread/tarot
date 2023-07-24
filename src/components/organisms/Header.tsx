import { Box, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <Box bg="tomato" p={4} color="white" onClick={() => navigate("/")}>
      <Heading as="h1" size="xl">
        Tarot Cards
      </Heading>
      <Box ml="16" mt="-8">
        <Text fontSize="md" as="b">
          version 0.2.0
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
