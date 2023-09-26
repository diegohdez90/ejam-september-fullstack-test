import Description from "../Description";

interface Props {
  productTitle: object | any;
  promotion: object | any;
  smallName: string;
  discountedPrice: number;
  productName: string;
  score: number;
  price: number;
  applyDiscountPrice: boolean
  amountInStock: number
  description: string
  thumbnailImage: string
}


const RightSide = ({
  productTitle,
  promotion,
  smallName,
  discountedPrice,
  productName,
  score,
  price,
  amountInStock,
  applyDiscountPrice,
  description,
  thumbnailImage
}: Props) => {
  return (
    <div className="w-full">
      <h2><span className='ocurrence'>{productTitle.occurrence}</span> {productTitle.offer} {promotion.earn} {smallName} for only <span className="price">{promotion.amount} {promotion.numberOfItems}</span> ({Intl.NumberFormat('en', {
        style: 'currency',
    currency: 'usd'
  }).format(discountedPrice)} total) </h2>
    <Description
      amountInStock={amountInStock}
      productName={productName}
      score={score}
      price={price}
      discountedPrice={discountedPrice}
      applyDiscountPrice={applyDiscountPrice}
      description={description}
      thumbnailImage={thumbnailImage}
    />
    </div>
  )
}

export default RightSide;
