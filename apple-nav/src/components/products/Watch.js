import React from 'react'
import SubNav from './SubNav'
import watchData from '../data/watchData'

const Watch = () => {
  return (
    <SubNav subnav='subnav watch' container='watchcontainer' data={watchData} />
  )
}
export default Watch
