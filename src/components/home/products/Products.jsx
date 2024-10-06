import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch(`https://fakestoreapi.com/products`)
        .then( (res) => res.json())
        .then( (data) => {
            setProducts(data);
        })
    },)
  return (
    <>
    <div className="mx-auto py-4 px-8 my-[80px] border-2 border-teal-400 rounded-lg w-fit text-center">
    <h1 className="text-teal-700 font-semibold text-[35px]">Our Latest Products</h1>
    </div>
    <div className="flex flex-wrap gap-4 md:gap-9 items-center justify-center">
      {products.map( (item) => {
        return(
            <>
            <div>
              <ProductItem key={item.id} product={item} />
            </div>
            </>
        )
      })}
    </div>
    </>
  )
}

export default Products
