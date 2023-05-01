import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Card from './components/Card'
import Main from './components/Main'
import AddToCard from './components/AddToCard'
import CardDetails from './components/CardDetails'

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/addtocard" element={<AddToCard />} />
                <Route path="/card" element={<Card />} />
                <Route path="/carddetails" element={<CardDetails />} />
            </Routes>
        </>
    )
}
export default App