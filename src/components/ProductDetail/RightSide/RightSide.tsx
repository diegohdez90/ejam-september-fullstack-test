interface Props {
  productTitle: object | any;
  promotion: object | any;
  smallName: string;
  discountedPrice: number;
}


const RightSide = ({
  productTitle,
  promotion,
  smallName,
  discountedPrice
}: Props) => {
  return (
    <div className="w-full">
      <h2><span className='ocurrence'>{productTitle.occurrence}</span> {productTitle.offer} {promotion.earn} {smallName} for only <span className="price">{promotion.amount} {promotion.numberOfItems}</span> ({Intl.NumberFormat('en', {
    currency: 'usd'
  }).format(discountedPrice)} total) </h2>
    </div>
  )
}

export default RightSide;
