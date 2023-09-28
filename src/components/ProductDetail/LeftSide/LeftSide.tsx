import Image from "next/image";
import Comment from "../Comment";

interface Props {
  comment: any;
}

const LeftSide = ({
  comment
}: Props) => {
  return (
    <div className="flex flex-col w-full justify-around xs:hidden sm:flex">
      <Image
        src='/product.svg'
        alt="product"
        width={0}
        height={0}
        fill={false}
        style={{height: "100%", width:"100%", position: 'initial'}}
      />
      <Comment
        comment={comment}
      />
    </div>
  )
}

export default LeftSide;
