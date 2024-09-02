import React from 'react'
import Lander from './components/Lander'
import Info from './components/Info'
import Join from './components/Join'
import Footer from './components/Footer'
import Steps from './components/Steps'


function page() {
  return (
    <>
      <Lander />
      <Info />
      <Steps />
      <Join />
      <Footer />
    </>
  )
}

export default page