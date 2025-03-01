"use client"
import { setProducts } from '@/redux/productsSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './ProductCard';

function ProductCards({products}) {
    const storeProduct = useSelector((state) => state.productItems.products);
    const dispatch = useDispatch();

    useEffect(() => {
        if (products.length > 0) {
            dispatch(setProducts(products));
        }

    },[products, dispatch])
  return (
    <>
        {storeProduct.map((product) => (
            
            <React.Fragment key={product.id}>
                <ProductCard product={product}/>
            </React.Fragment>
            )
        )}
    </>
  )
}

export default ProductCards
