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
            <SimpleGrid columns={4} spacing={1} minChildWidth="100px">
                {[...Array(22)].map((_, i) => {
                    return (
                        <Box key={i} width="60px">
                            <TarotCardImageViewer
                                number={i}
                                imageWidthSize={'100px'}
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
