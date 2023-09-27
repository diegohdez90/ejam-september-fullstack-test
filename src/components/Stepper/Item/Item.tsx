import { STATUS } from "@/app/helpers/enums";
import Status from "./Status";

interface Props {
  step: number;
  label: string;
  status: STATUS
  isCurrent: boolean
}

const Item = ({
  step,
  label,
  status,
  isCurrent
}: Props) => {
  return <div className="flex flex-col md:flex-row item">
    <Status status={status} step={step} /><span className={`flex flex-row label ${isCurrent ? 'current' : ''}`}><span className="xs:hidden md:block">Step {step}: </span>{label}</span>
  </div>
}

export default Item;
