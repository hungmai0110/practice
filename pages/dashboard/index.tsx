import React from 'react'
import Image from 'next/image'


export default function About() {
  return (
    <div className="menu-horizontal">
      <div className="menu-horizontal__container">
        <div className="menu-horizontal__item mainnet">
          <Image src="/my-app//public/image/mainnet.png" alt="mainnet"  width={32} height={30}/>
          <p>Unisat Mainnet</p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="menu-horizontal__item walllet">
          <p>bvt34566612</p>
        </div>
      </div>
    </div>
  )
}
