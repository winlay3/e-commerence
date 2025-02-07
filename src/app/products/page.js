import Image from 'next/image'
import React from 'react'


 async function Products() {
    const data = await fetch('https://api.vercel.app/blog')
    const posts = await data.json()
    return (
        <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
            <Image src='https://images.pexels.com/photos/29090361/pexels-photo-29090361/free-photo-of-autumn-birch-forest-with-golden-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='img' width={500} height={500}/>
</>
    )
  }


export default Products
