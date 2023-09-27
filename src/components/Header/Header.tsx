import Image from "next/image";

const Header = () => {
  return (<div className="header w-full sticky top-0 flex flex-row justify-evenly">
    <div className="flex flex-row">
      <Image
        src='/satisfaction-guarantee.svg'
        alt="satisfaction-guarantee"
        width={16}
        height={16}
      />
      30-DAY SATISFACTION GUARANTEE
    </div>
    <div className="flex flex-row">
      <Image
        src='/transport.svg'
        alt="transport"
        width={16}
        height={16}
      />
      Free delivery on orders over $40.00
    </div>
    <div className="flex flex-row">
      <Image
        src='/happy-customers.svg'
        alt="happy-customers"
        width={16}
        height={16}
      />
      50.000+ HAPPY CUSTOMERS
    </div>
    <div className="flex flex-row">
      <Image
        src='/money-back.svg'
        alt="money-back"
        width={16}
        height={16}
      />
      100% Money Back Guarantee
    </div>
  </div>)
}

export default Header;
