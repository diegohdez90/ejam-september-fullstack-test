
interface Props {
  title: string;
  subtitle?: string
}

const Title = ({
  title,
  subtitle
}: Props) => {
  return <div className="title">
    <h1>{title}{subtitle ? <small>{subtitle}</small>: null}</h1>
  </div>
}

export default Title;
