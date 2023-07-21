import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import DeckShuffle from './components/molecules/DeckShuffle'
import Gallery from './components/pages/Gallery'

const App: React.FC = () => {
    return (
        <ChakraProvider resetCSS={false}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/tarot/" element={<Home />} />
                    <Route path="/tarot/gallery" element={<Gallery />} />
                    <Route path="/tarot/debug" element={<DeckShuffle />} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App
