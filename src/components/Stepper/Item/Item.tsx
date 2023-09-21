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
  return <div className="flex flex-row item">
    <Status status={status} step={step} /><span className={`label ${isCurrent ? 'current' : null}`}>Step {step}: {label}</span>
  </div>
}

export default Item;
