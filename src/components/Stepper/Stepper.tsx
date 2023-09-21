import Item from "./Item";

interface Props {
  current: number
}

const Stepper = ({
  current
}: Props) => {
  return <div className="flex flex-row w-full justify-between stepper">
    <Item
      step={1}
      label='Cart Review'
      status='completed'
      isCurrent={ 1 === current}
    />
    <Item
      step={2}
      label='Checkout'
      status='completed'
      isCurrent={ 2 === current}
    />
    <Item
      step={3}
      label='Special Offer'
      status='in_progress'
      isCurrent={ 3 === current}
    />
    <Item
      step={4}
      label='Confirmation'
      status='pending'
      isCurrent={ 4 === current}
    />
  </div>
}

export default Stepper;
