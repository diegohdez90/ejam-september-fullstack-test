import Description from "../Description";
import Features from "../Features";
import Guaranteed from "../Guaranteed";
import Promotion from "../Promotion";

interface Props {
  productTitle: object | any;
  promotion: object | any | null;
  smallName: string;
  discountedPrice: number;
  productName: string;
  score: number;
  price: number;
  applyDiscountPrice: boolean
  amountInStock: number
  description: string
  thumbnailImage: string
  features: any[]
  isGuaranteed: boolean
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
  thumbnailImage,
  features,
  isGuaranteed
}: Props) => {
  return (
    <div className="flex flex-col w-full gap-8">
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
      <Features features={features} />
      {
        promotion && <Promotion promotion={promotion} />
      }
      {
        isGuaranteed && <Guaranteed />
      }
    </div>
  )
}

export default RightSide;
