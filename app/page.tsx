import React from 'react'
import Lander from './components/Lander'
import Info from './components/Info'
import Join from './components/Join'
import Steps from './components/Steps'


function page() {
  return (
    <>
      <Lander />
      <Info />
      <Steps />
      <Join />
    </>
  )
}

export default page