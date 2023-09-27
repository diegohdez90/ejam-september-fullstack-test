import { features } from "process";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

interface Props {
  productTitle: object;
  productName: string;
  smallName: string;
  featuredComment: object;
  score: number;
  price: number;
  discountedPrice: number;
  applyDiscountPrice: boolean;
  amountInStock: number;
  description: string
  thumbnailImage: string;
  features: any[];
  promotion: object | null;
  isGuaranteed: boolean
}


const ProductDetail = ({
  productTitle,
  productName,
  promotion,
  smallName,
  score,
  price,
  discountedPrice,
  applyDiscountPrice,
  amountInStock,
  description,
  thumbnailImage,
  features,
  isGuaranteed
}: Props) => {
  return <div className="w-full grid grid-cols-2 p-4 gap-8">
    <LeftSide/>
    <RightSide
      productTitle={productTitle}
      promotion={promotion}
      smallName={smallName}
      discountedPrice={discountedPrice}
      productName={productName}
      score={score}
      price={price}
      applyDiscountPrice={applyDiscountPrice}
      amountInStock={amountInStock}
      description={description}
      thumbnailImage={thumbnailImage}
      features={features}
      isGuaranteed={isGuaranteed }
    />
  </div>
}

export default ProductDetail;
