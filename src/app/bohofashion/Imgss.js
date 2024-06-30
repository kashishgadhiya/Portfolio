import React from 'react'
import Image from 'next/image'

const Imgss = ({img}) => {
  return (
    <div>
      <Image
          src={img}
          width={800}
          height={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
    </div>
  )
}

export default Imgss
