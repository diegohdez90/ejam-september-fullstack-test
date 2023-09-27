import Image from 'next/image';
import React from 'react'

interface Props {
  promotion: any
}

const display = (promotion: any): React.ReactNode => {
  const {text, strong} = promotion;
  let node = text;
  for(let k in strong) {    
    node = node.split(k).join(`<span class="strong">${strong[k]}</span>`)
  }
  return node;
}

const Promotion = ({
  promotion
} : Props) => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-row disccount mx-auto items-center'>
        <span className='icon'>
          <Image
            src="/percent.svg"
            alt="percent"
            width={32}
            height={32}
            priority
          />
        </span>
        <p className='promotion' dangerouslySetInnerHTML={{
          __html: 
          display(promotion)
        }} />
      </div>
      <button className='claim flex flex-row text-center justify-center items-center'>Yes - claim my disccount <span>
        <Image
            src="/right-arrow.svg"
            alt="check"
            width={16}
            height={16}
            priority
          />
        </span>
      </button>
      <div className="secure-payment grid grid-cols-3 divide-x">
        <div>Free Shipping</div>
        <div className='flex flex-row gap-x-2'><Image
            src="/lock.svg"
            alt="lock"
            width={12}
            height={12}
            priority
          />
        Secure 256-Bit SSL Encryption</div>
        <div className='flex flex-row gap-2'>
          <Image
            src="/visa.svg"
            alt="visa"
            width={0}
            height={0}
            fill={false}
            style={{height: "100%", width:"100%", position: 'initial'}}
          />
          <Image
            src="/shop-pay.svg"
            alt="shop-pay"
            width={0}
            height={0}
            fill={false}
            style={{height: "100%", width:"100%", position: 'initial'}}
          />
          <Image
            src="/paypal.svg"
            alt="paypal"
            width={0}
            height={0}
            fill={false}
            style={{height: "100%", width:"100%", position: 'initial'}}
          />
          <Image
            src="/mastercard.svg"
            alt="mastercard"
            width={0}
            height={0}
            fill={false}
            style={{height: "100%", width:"100%", position: 'initial'}}
          />
          <Image
            src="/google-pay.svg"
            alt="google-pay"
            width={0}
            height={0}
            fill={false}
            style={{height: "100%", width:"100%", position: 'initial'}}
          />
          <Image
            src="/apple-pay.svg"
            alt="apple-pay"
            width={0}
            height={0}
            fill={false}
            style={{height: "100%", width:"100%", position: 'initial'}}
          />
          <Image
            src="/amex.svg"
            alt="amex"
            width={0}
            height={0}
            fill={false}
            style={{height: "100%", width:"100%", position: 'initial'}}
          />
        </div>
      </div>
      <div className='no-thanks mx-auto'>
        <button className='skip'>No thanks, I don’t want this.</button>
      </div>
    </div>
  )
}

export default Promotion;
