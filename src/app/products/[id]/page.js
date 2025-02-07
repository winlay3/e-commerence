"use client"
import { useParams } from 'next/navigation'
import React from 'react'

function ProductDetails() {
    const {id} = useParams()
  return (
    <div>
      THis is ProductDetail Page {id}
    </div>
  )
}

export default ProductDetails
