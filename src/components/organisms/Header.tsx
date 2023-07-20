import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="tomato" p={4} color="white">
      <Heading as="h1" size="xl">
        Tarot Cards
      </Heading>
      <Box ml="16" mt="-8">
        <Text fontSize="md" as="b">
          version 0.1.0
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
