"use client";

import { formatPrice } from "@/utils/formatPrice";
import { trucateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
    const router = useRouter()
  const productReviews =
    data.reviews.reduce((acc:number, itme:any) => itme.rating + acc, 0) /
    data.reviews.length;
  return (
    <div 
    onClick={() => router.push(`/product/${data.id}`)}
    className="col-span-1 cursor-pointer border-[1px] border-slate-200 bg-slate-50 rounded-xl p-2 transition hover:scale-105 text-center text-sm">
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            fill
            alt={data.name}
            src={data.images[0].image}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="mt-4 font-bold">{trucateText(data.name)}</div>
        <div>{<Rating value={productReviews} readOnly />}</div>
        <div>{data.reviews.length} reviews</div>
        <div>{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
