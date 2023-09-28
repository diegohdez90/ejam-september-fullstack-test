import Image from 'next/image'
import React from 'react'

const Guaranteed = () => {
  return (
    <div className='guarantee grid grid-cols-12 items-center gap-4'>
      <div className='col-span-3'>
        <Image
          src="/image 6.svg"
          alt="check"
            width={0}
            height={0}
            fill={false}
            style={{height: "100%", width:"100%", position: 'initial'}}
        />
      </div>
      <div className='col-span-9'>
        <p className='guarantee-descripiion'>
          If you are not completely thrilled with your Clarifion - We have a <span className='strong'>30 day satisfaction guarantee</span>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
        </p>
      </div>
    </div>
  )
}

export default Guaranteed