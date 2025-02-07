import Image from 'next/image'
import React from 'react'

function CustomImage() {
  return (
    <>
        <Image src='https://images.pexels.com/photos/29090361/pexels-photo-29090361/free-photo-of-autumn-birch-forest-with-golden-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='img' width={500} height={500} style={{width:400,height:400,objectFit:"cover"}}/>
        <Image src='https://images.pexels.com/photos/29090361/pexels-photo-29090361/free-photo-of-autumn-birch-forest-with-golden-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='img' width={1000} height={1000} style={{width:400,height:400,objectFit:"cover"}}/>

    </>
  )
}

export default CustomImage
