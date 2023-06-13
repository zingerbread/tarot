import { useEffect, useState } from 'react'
import deckOrder from '../atoms/DeckOrder'
import deckPosition from '../atoms/DeckPosition'
import { Button, Heading } from '@chakra-ui/react'

export type DeckCardType = {
    stackingOrder: number
    position: number
}
export const useDeckShuffle = () => {
    const deckShuffle = async () => {
        const deckStackingOrder = await deckOrder({ number: 22, min_num: 1, max_num: 22 })
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
        </>
    )
}
export default DeckShuffle
