import Image from "next/image";
import Comment from "../Comment";

const LeftSide = () => {
  return (
    <div className="flex grid grid-col w-full">
      <Image
        src='/product.svg'
        alt="product"
        width={0}
        height={0}
        fill={false}
        style={{height: "100%", width:"100%", position: 'initial'}}
      />
      <Comment />
    </div>
  )
}

export default LeftSide;
