import {
    Box,
    Heading,
    SimpleGrid,
} from '@chakra-ui/react'
import Header from '../organisms/Header'
import TarotCardImageViewer from '../molecules/TarotCardImageViewer'

const Gallery = () => {
    return (
        <>
            <Header />
            <Heading ml={4}>Gallery</Heading>
            <SimpleGrid columns={4} spacing={1} minChildWidth={{ base: '100px', md: '180px' }}>
                {[...Array(22)].map((_, i) => {
                    return (
                        <Box key={i} width={{ base: '100px', md: '200px' }}>
                            <TarotCardImageViewer
                                number={i}
                                imageWidthSize={{ base: '100px', md: '180px' }}
                                position={0}
                            />
                        </Box>
                    )
                })}
            </SimpleGrid>
        </>
    )
}

export default Gallery
