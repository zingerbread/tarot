import {
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react'

import foolImage from '../../tarot_temp_image/o.png'
import magicianImage from '../../tarot_temp_image/I.png'
import highPriestessImage from '../../tarot_temp_image/II.png'
import empressImage from '../../tarot_temp_image/III.png'
import emperorImage from '../../tarot_temp_image/IV.png'
import hierophantImage from '../../tarot_temp_image/V.png'
import loversImage from '../../tarot_temp_image/VI.png'
import chariotImage from '../../tarot_temp_image/VII.png'
import strengthImage from '../../tarot_temp_image/VIII.png'
import hermitImage from '../../tarot_temp_image/IX.png'
import wheelOfFortuneImage from '../../tarot_temp_image/X.png'
import justiceImage from '../../tarot_temp_image/XI.png'
import hangedManImage from '../../tarot_temp_image/XII.png'
import deathImage from '../../tarot_temp_image/XIII.png'
import temperanceImage from '../../tarot_temp_image/XIV.png'
import devilImage from '../../tarot_temp_image/XV.png'
import towerImage from '../../tarot_temp_image/XVI.png'
import starImage from '../../tarot_temp_image/XVII.png'
import moonImage from '../../tarot_temp_image/XVIII.png'
import sunImage from '../../tarot_temp_image/XIX.png'
import judgementImage from '../../tarot_temp_image/XX.png'
import worldImage from '../../tarot_temp_image/XXI.png'
import blankImage from '../../tarot_temp_image/Blank.png'
import { useState } from 'react'
import tarotInfomation from '../atoms/TarotInfomation'
import cardNumberChanger from '../atoms/CardNumberChanger'

const TarotCardImages = [
    { src: foolImage, alt: 'The Fool' },
    { src: magicianImage, alt: 'The Magician' },
    { src: highPriestessImage, alt: 'The High Priestess' },
    { src: empressImage, alt: 'The Empress' },
    { src: emperorImage, alt: 'The Emperor' },
    { src: hierophantImage, alt: 'The Hierophant' },
    { src: loversImage, alt: 'The Lovers' },
    { src: chariotImage, alt: 'The Chariot' },
    { src: strengthImage, alt: 'Strength' },
    { src: hermitImage, alt: 'The Hermit' },
    { src: wheelOfFortuneImage, alt: 'Wheel of Fortune' },
    { src: justiceImage, alt: 'Justice' },
    { src: hangedManImage, alt: 'The Hanged Man' },
    { src: deathImage, alt: 'Death' },
    { src: temperanceImage, alt: 'Temperance' },
    { src: devilImage, alt: 'The Devil' },
    { src: towerImage, alt: 'The Tower' },
    { src: starImage, alt: 'The Star' },
    { src: moonImage, alt: 'The Moon' },
    { src: sunImage, alt: 'The Sun' },
    { src: judgementImage, alt: 'Judgement' },
    { src: worldImage, alt: 'The World' },
]
const BlankCardImage = { src: blankImage, alt: 'Blank' }

type TarotCardImageViewerProps = {
    number: number
    position?: number
    blank?: boolean
    imageWidthSize: number | string | object
}
export const TarotCardImageViewer = (props: TarotCardImageViewerProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const cardInfomation = tarotInfomation({
        infoType: 'card',
        cardNumber: props.number,
    })
    const tarotCard = cardNumberChanger({
        number: props.number,
    })
    const cardName = `${tarotCard.number} ${tarotCard.name}`

    if (props.blank)
        return (
            <Image
                width={props.imageWidthSize}
                src={BlankCardImage.src}
                alt={BlankCardImage.alt}
            />
        )

    return (
        <>
            {props.position === 0 ? (
                <Image
                    width={props.imageWidthSize}
                    src={TarotCardImages[props.number].src}
                    alt={TarotCardImages[props.number].alt}
                    onClick={() => setIsModalOpen(true)}
                />
            ) : (
                <Image
                    width={props.imageWidthSize}
                    src={TarotCardImages[props.number].src}
                    alt={TarotCardImages[props.number].alt}
                    sx={{ transform: 'rotate(180deg);' }}
                    onClick={() => setIsModalOpen(true)}
                />
            )}
            {isModalOpen && (
                <Modal
                    isCentered
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                >
                    <ModalOverlay />
                    <ModalContent mx="10">
                        <ModalHeader>{cardName}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>{cardInfomation}</ModalBody>
                    </ModalContent>
                </Modal>
            )}
        </>
    )
}
export default TarotCardImageViewer
