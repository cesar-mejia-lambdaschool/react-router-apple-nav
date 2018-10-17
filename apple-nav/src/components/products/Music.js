import React from 'react'
import SubNav from './SubNav'
import musicData from '../data/musicData'

const Music = () => {
  return (
    <SubNav subnav='subnav ipad' container='iphonecontainer' data={musicData} />
  )
}

export default Music
