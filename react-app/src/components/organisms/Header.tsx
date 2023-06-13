import { Box, Heading } from '@chakra-ui/react'

const Header = () => {
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      <Heading as="h1" size="xl">
        Chakra UI
      </Heading>
    </Box>
  )
}

export default Header