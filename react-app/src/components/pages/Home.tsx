import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import Header from '../organisms/Header'
import deckOrder from '../atoms/DeckOrder'
import { useEffect, useState } from 'react'
import { DeckCardType, useDeckShuffle } from '../molecules/DeckShuffle'

const Home = () => {
    const [deck, setDeck] = useState<Array<number>>([0])
    const [deckTop, setDeckTop] = useState(0)
    const [drowCard, setDrowCard] = useState<number>(0)
    const [drowCardIndex, setDrowCardIndex] = useState<number>(0)
    const drow = () => {
        setDrowCard(deckTop)
        setDrowCardIndex(drowCardIndex + 1)
        console.log(drowCardIndex)
    }
    const handleDeck = () => {
        const deckTop = deckOrder({ number: 22, min_num: 1, max_num: 22 })
        setDeck(deckTop)
    }
    useEffect(() => {
        console.log(deck)
        setDeckTop(deck[drowCardIndex])
    }, [deck, drowCardIndex])

    const [newDeck, setNewDeck] = useState<Array<DeckCardType>>([])
    const { deckShuffle } = useDeckShuffle()
    // const handleNewDeck = () => {
    //     const newDeck = deckShuffle()
    //     setNewDeck(newDeck)
    // }
    useEffect(() => {
        console.log(newDeck)
    }, [newDeck])
    return (
        <>
            <Header />
            <Heading ml={4}>Tarot</Heading>
            <Button onClick={() => handleDeck()}>シャッフル</Button>
            <Text>Deck Top:{deckTop}</Text>
            <Text mb={0}>Deck</Text>
            {deck.map((card, index) => {
                return (
                    <Box key={index} ml={2}>
                        <Text m={0}>
                            {index}: {card}
                        </Text>
                    </Box>
                )
            })}
            <Button onClick={() => drow()}>ドロー</Button>
            {drowCard && <Text ml={2}>{drowCard}</Text>}
            {/* <Button onClick={() => handleNewDeck()}>シャッフル(オブジェクト)</Button> */}
        </>
    )
}

export default Home
