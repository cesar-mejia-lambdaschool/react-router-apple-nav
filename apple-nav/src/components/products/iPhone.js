import React from 'react'
import iphoneData from '../data/iphoneData'
import SubNav from './SubNav'

const IPhone = () => {
  return (
    <SubNav subnav='subnav mac' container='iphonecontainer' data={iphoneData} />
  )
}

export default IPhone
