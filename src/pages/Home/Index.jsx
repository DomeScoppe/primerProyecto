import React from 'react'
import Recommendations from "../../components/Recommendations"
import Hero from "../../components/Hero"
import MainLayout from '../../layouts/MainLayout'

const Index = () => {
    return (
        <MainLayout>
            <Hero />
            <Recommendations />
        </MainLayout>
    )
}

export default Index