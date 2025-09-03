import React from 'react'

const Logo = ({width = '100px'}) => {
  return (
    <div className={`text-2xl font-bold`} style={{ width }}>
      Rai Blog
    </div>
  )
}

export default Logo
