import { StarIcon as RateStar } from '@heroicons/react/24/solid';
import { StarIcon as Star } from '@heroicons/react/24/outline';

interface Props {
  score: number
}

const Rate = ({
  score
}: Props) => {
  let jsx: React.ReactNode[] = [];
  let index = 1
  while (index <= 5) {
    if (index <= score) jsx.push(<RateStar width={16} color="#FFC000" />);
    else jsx.push(<Star width={16} />)
    index++
  }
  return jsx;
}

export default Rate;
