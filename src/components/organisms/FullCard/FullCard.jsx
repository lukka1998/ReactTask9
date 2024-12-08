import React from 'react'
import Header from '../../atoms/Header/Header'
import MainContent from '../../atoms/MainContent/MainContent'
import StayProductive from '../../molecules/StayProductive/StayProductive'
import GetEarly from '../../molecules/GetEarly/GetEarly'
import Footer from '../../molecules/Footer/Footer'
function FullCard() {
    return (
        <div>
            <Header/>
            <MainContent/>
            <StayProductive/>
            <GetEarly/>
            <Footer/>
        </div>
    )
}

export default FullCard
