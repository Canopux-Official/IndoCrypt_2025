import React from 'react'
import HeroSection from '../Home/HeroSection'
import ConferencePage from '../Home/ConferencePage'
import AcceptedPapersListPopup from '../Authors/AcceptedPapersListPopup'
const HomePage = () => {
  return (
    <>
      <AcceptedPapersListPopup />
      <HeroSection />
      <ConferencePage />
    </>
  )
}

export default HomePage
