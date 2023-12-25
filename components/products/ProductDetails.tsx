"use client";

import { Rating } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
  product: any;
}

export type CartProduct = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  qty: number;
  price: string;
};

export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [cartProduct, setCartProduct] = useState<CartProduct>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    qty: 1,
    price: product.price,
  });
  const productReviews =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;
  console.log({ productReviews });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div></div>
      <div className="flex flex-col gap-2 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className="flex gap-2 items-center">
          <Rating value={productReviews} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <hr className="w-[30%] my-2" />
        <div className="text-justify">{product.description}</div>
        <hr className="w-[30%] my-2" />
        <div>
          <span className="font-semibold">CATEGORY: </span>
          {product.category}
        </div>
        <div>
          <span className="font-semibold">BRAND: </span>
          {product.brand}
        </div>
        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
          {product?.inStock ? "In stock" : "Out of stock"}
        </div>
        <hr className="w-[30%] my-2" />
        <div className="font-semibold">Color</div>
        <hr className="w-[30%] my-2" />
        <div className="font-semibold">QUANTITY:</div>
        <hr className="w-[30%] my-2" />
        <button className="bg-neutral-800 text-white w-1/2 p-2 rounded-lg">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
