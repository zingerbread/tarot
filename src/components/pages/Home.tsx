import {
    Badge,
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverFooter,
    PopoverHeader,
    PopoverTrigger,
    Show,
    SimpleGrid,
    Text,
} from '@chakra-ui/react'
import Header from '../organisms/Header'
import { useEffect, useState } from 'react'
import { DeckCardType, useDeckShuffle } from '../molecules/DeckShuffle'
import tarotInfomation from '../atoms/TarotInfomation'
import cardNumberChanger from '../atoms/CardNumberChanger'

import TarotCardImageViewer from '../molecules/TarotCardImageViewer'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const { deckShuffle } = useDeckShuffle()
    const [deck, setDeck] = useState<Array<DeckCardType>>([])
    const shuffleDeck = () => {
        deckShuffle().then((deck) => {
            setDeck(deck)
        })
        setDrowCard(undefined)
        setDrowCardIndex(0)
        setDrowCardValue('')
        setIsDrowDisabled(false)
    }
    const [deckTop, setDeckTop] = useState<DeckCardType>()
    const [drowCard, setDrowCard] = useState<DeckCardType>()
    const [drowCardIndex, setDrowCardIndex] = useState<number>(0)
    const drow = () => {
        setDrowCard(deckTop)
        setDrowCardIndex(drowCardIndex + 1)
        console.log(drowCardIndex)
    }
    useEffect(() => {
        console.log(deck)
        const deckTop = deck[drowCardIndex]
        console.log(deckTop)
        setDeckTop(deckTop)
    }, [deck, drowCardIndex])
    const [drowCardName, setDrowCardName] = useState<string>()
    const [drowCardValue, setDrowCardValue] = useState<string>()
    useEffect(() => {
        if (drowCard === undefined) return
        const tarotCard = cardNumberChanger({
            number: drowCard.stackingOrder,
            position: drowCard.position,
        })
        setDrowCardValue(
            `${tarotCard.number} ${tarotCard.name}の${tarotCard.position}`
        )
        setDrowCardName(`${tarotCard.number} ${tarotCard.name}`)
    }, [drowCard])

    const [infomationText, setInfomationText] = useState<
        string | Array<string>
    >()
    const handleInfomation = () => {
        const infomation = tarotInfomation({ infoType: 'tarot' })
        if (infomation === undefined) return
        setInfomationText(infomation)
    }

    const [tarotCardInfomationText, setTarotCardInfomationText] = useState<
        string | Array<string>
    >()
    const handleTarotCardInfomation = () => {
        if (drowCard === undefined) return
        const infomation = tarotInfomation({
            infoType: 'card',
            cardNumber: drowCard.stackingOrder,
        })
        if (infomation === undefined) return
        setTarotCardInfomationText(infomation)
    }
    useEffect(() => {
        handleTarotCardInfomation()
    })
    const [isDrowDisabled, setIsDrowDisabled] = useState<boolean>(true)
    const [isOrderShow, setIsOrderShow] = useState<boolean>(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <>
            <Header />
            <Flex>
                <Heading ml={4}>Tarot</Heading>
                <Box ml={2}>
                    <Popover>
                        <PopoverTrigger>
                            <Badge
                                ml="1"
                                mt="6"
                                colorScheme="blue"
                                onClick={() => handleInfomation()}
                            >
                                ?
                            </Badge>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Tarot (タロット)とは</PopoverHeader>
                            {infomationText && (
                                <Box ml={2}>
                                    {typeof infomationText === 'string' ? (
                                        <Text>{infomationText}</Text>
                                    ) : (
                                        infomationText.map((text, index) => {
                                            return (
                                                <PopoverBody key={index}>
                                                    {text}
                                                </PopoverBody>
                                            )
                                        })
                                    )}
                                </Box>
                            )}
                            <PopoverFooter>
                                <Button onClick={() => navigate("/tarot/gallery")}>カード一覧</Button>
                            </PopoverFooter>
                        </PopoverContent>
                    </Popover>
                </Box>
            </Flex>
            <Box>
                <Box>
                    <Center>
                        {drowCard ? (
                            <TarotCardImageViewer
                                number={drowCard.stackingOrder}
                                position={drowCard.position}
                                imageWidthSize={300}
                            />
                        ) : (
                            <TarotCardImageViewer
                                number={-1}
                                imageWidthSize={300}
                                blank
                            />
                        )}
                    </Center>
                </Box>
                <Center>
                    <Flex>
                        {drowCard && <Text ml={2}>{drowCardValue}</Text>}
                        {drowCard && (
                            <Box ml={2}>
                                <Popover>
                                    <PopoverTrigger>
                                        <Badge
                                            ml="1"
                                            mt="1"
                                            colorScheme="blue"
                                            onClick={() => setIsModalOpen(true)}
                                        >
                                            ?
                                        </Badge>
                                    </PopoverTrigger>
                                </Popover>
                            </Box>
                        )}
                    </Flex>
                </Center>
                <Center>
                    <Button
                        onClick={() => drow()}
                        isDisabled={isDrowDisabled || drowCardIndex > 21}
                    >
                        ドロー
                    </Button>
                </Center>
                {isModalOpen && (
                    <Modal
                        isCentered
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                    >
                        <ModalOverlay />
                        <ModalContent mx="10">
                            <ModalHeader>{drowCardName}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>{tarotCardInfomationText}</ModalBody>
                        </ModalContent>
                    </Modal>
                )}
            </Box>
            <Box ml={1}>
                <Button onClick={() => shuffleDeck()}>シャッフル</Button>
            </Box>

            <Box ml={1} mt={4}>
                <Button onClick={() => setIsOrderShow(true)}>順番表示</Button>
                <Button onClick={() => setIsOrderShow(false)}>
                    順番非表示
                </Button>
            </Box>
            <Box>
                {isOrderShow && (
                    <SimpleGrid
                        columns={4}
                        spacing={1}
                        minChildWidth={{ base: '100px', md: '180px' }}
                    >
                        {deck.map((card, index) => {
                            const tarotCard = cardNumberChanger({
                                number: card.stackingOrder,
                                position: card.position,
                            })
                            if (index >= drowCardIndex) return <></>
                            return (
                                <Box key={index} ml={2} mb={1}>
                                    <Text
                                        m={0}
                                        fontSize={{ base: '8', md: '14' }}
                                    >
                                        {index + 1}枚目
                                    </Text>
                                    <Show above="md">
                                        <Text mt={0} ml={2} fontSize={14}>
                                            {tarotCard.number} {tarotCard.name}
                                            の{tarotCard.position}
                                        </Text>
                                    </Show>
                                    <Show below="md">
                                        <Text mt={0} ml={2} fontSize={8}>
                                            {tarotCard.number} {tarotCard.name}
                                        </Text>
                                        <Text mt={-3} ml={2} fontSize={8}>
                                            {tarotCard.position}
                                        </Text>
                                    </Show>
                                    <TarotCardImageViewer
                                        number={card.stackingOrder}
                                        imageWidthSize={{
                                            base: '100px',
                                            md: '180px',
                                        }}
                                        position={card.position}
                                    />
                                </Box>
                            )
                        })}
                    </SimpleGrid>
                )}
            </Box>
        </>
    )
}

export default Home
