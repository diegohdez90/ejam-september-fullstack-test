import { Fragment } from 'react';
import Image from "next/image";
import { StarIcon as RateStar } from '@heroicons/react/24/solid';
import { StarIcon as Star } from '@heroicons/react/24/outline';

interface Props {
  productName: string;
  score: number
  price: number
  discountedPrice: number
  applyDiscountPrice: boolean
  amountInStock: number;
  description: string
  thumbnailImage: string
}


const Description = ({
  productName,
  score,
  price,
  discountedPrice,
  applyDiscountPrice,
  amountInStock,
  description,
  thumbnailImage
}: Props) => {

  const Rate = () => {
    let jsx: React.ReactNode[] = [];
    let index = 1
    while (index <= 5) {
      if (index <= score) jsx.push(<RateStar width={16} color="#FFC000" />);
      else jsx.push(<Star width={16} />)
      index++
    }
    return jsx;
  }
  return (
    <div className="grid grid-cols-2">
      <div>
        <Image
        src={thumbnailImage}
        alt="product"
        width={134}
        height={134}
        fill={false}
        style={{height: "100%", width:"100%", position: 'initial'}}
      />
      </div>
      <div className="flex flex-col gap-8 place-content-evenly">
        <div className="flex flex-col place-content-evenly">
          <div className="grid grid-cols-2">
            <h3 className="product-title">{productName}</h3>
            <div className="flex flex-row justify-end items-center gap-4">
              {applyDiscountPrice ? <Fragment><span className="original-price">{Intl.NumberFormat('en', {
                style: 'currency',
                currency: 'usd',
              }).format(price)}</span><span className="discounted-price">{Intl.NumberFormat('en', {
                style: 'currency',
                currency: 'usd'
              }).format(discountedPrice)}</span></Fragment> : <span className="price">{Intl.NumberFormat('en', {
                style: 'currency',
                currency: 'usd'
              }).format(price)}</span> }
            </div>
          </div>
          <div className="flex flex-row">
            <Rate />
          </div>
          <div className="flex flex-row items-center stock">
            <div className="flex flex-row w-fit h-fit">
              <span className="outer">
              </span>
              <span className="inner"></span>
            </div>
            {amountInStock > 0 ? <span style={{
              position: 'relative'
            }}>{amountInStock} left in Stock</span> : <span style={{
              position: 'relative'
            }}>Sold out</span>}
          </div>
        </div>
        <div className="flex flex-row">
          <p className='product-description'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Description;
