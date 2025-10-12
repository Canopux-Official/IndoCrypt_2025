import React from 'react'
import HeroSection from '../components/HeroSection'
import ConferencePage from '../components/ConferencePage'
import AcceptedPapersPopup from '../components/AcceptedPapersPopUp'
const HomePage = () => {
  return (
    <>
      <AcceptedPapersPopup />
      <HeroSection />
      <ConferencePage />
    </>
  )
}

export default HomePage
