import { STATUS } from "@/app/helpers/enums"
import Image from "next/image"

interface Props {
  status: STATUS
  step: number
}
const Status = ({
  status,
  step
}: Props) => {
  return <div className={`status ${status}`}>{status === 'completed' ? <Image
          src="/tick-circle.svg"
          alt="check"
          width={20}
          height={16}
          priority
        /> : step}</div>
}

export default Status;
