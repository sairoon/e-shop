import React from 'react'
import Container from '../layouts/Container'
import LeftSide from './topBarComp/LeftSide'
import RightSide from './topBarComp/RightSide'

const TopBar = () => {
  return (
    <div className="border-b border-solid border-[#cbcbcb] py-5">
      <Container>
        <div className="flex justify-between items-center font-Montserrat text-sm font-normal">
          <LeftSide />
          <RightSide />
        </div>
      </Container>
    </div>
  )
}

export default TopBar
