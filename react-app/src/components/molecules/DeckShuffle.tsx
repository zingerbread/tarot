import { useEffect, useState } from 'react'
import deckOrder from '../atoms/DeckOrder'
import deckPosition from '../atoms/DeckPosition'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import cardNumberChanger from '../atoms/CardNumberChanger'
import tarotInfomation from '../atoms/TarotInfomation'

export type DeckCardType = {
    stackingOrder: number
    position: number
}
export const useDeckShuffle = () => {
    const deckShuffle = async () => {
        const deckStackingOrder = await deckOrder({ number: 22, min_num: 0, max_num: 21 })
        const deckPositionOrder = await deckPosition({ number: 22, min_num: 0, max_num: 1 })
        const numberOfDeck = [...Array(22)].map((_, i) => i)
        const shuffleDeck = numberOfDeck.map((index) => {
            return {
                stackingOrder: deckStackingOrder[index],
                position: deckPositionOrder[index],
            }
        })

        return shuffleDeck
    }

    return { deckShuffle }
}
const DeckShuffle = () => {
    const { deckShuffle } = useDeckShuffle()
    const [deck, setDeck] = useState<Array<DeckCardType>>([])
    const shuffleDeck = () => {
        deckShuffle().then((deck) => {
            setDeck(deck)
        })
    }
    useEffect(() => {
        console.log(deck)
    }, [deck[0]])
    return (
        <>
            <Heading ml={4}>デバッグ</Heading>
            <Button onClick={() => shuffleDeck()}>シャッフル</Button>
            {deck.map((card, index) => {
                const tarotCard = cardNumberChanger({ number: card.stackingOrder, position: card.position })
                const tarotCardInfo = tarotInfomation({ infoType: "card", cardNumber: card.stackingOrder })
                return (
                    // <div key={index}>
                    //     <div>stackingOrder: {card.stackingOrder}</div>
                    //     <div>position: {card.position}</div>
                    //     <div>{tarotCard.number} {tarotCard.name}の{tarotCard.position}</div>
                    // </div>
                    <Box key={index} ml={2} mb={1}>
                        <Text m={0}>
                            {tarotCard.number} {tarotCard.name}の{tarotCard.position}
                        </Text>
                        <Text my={0} ml={2}>
                            {tarotCardInfo}
                        </Text>
                    </Box>
                )
            })}
        </>
    )
}
export default DeckShuffle
