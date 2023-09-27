import React from 'react';

interface Props {
  features: any[]
}

const format = (p: any): React.ReactNode => {
  const s: string = 'sadasdasd';
  const {strong, text} = p;

  return text.split(strong).join(`<span class="strong">${strong}</span>`)
}

const Features = ({
  features
}: Props) => {
  return (
    <div className='flex flex-row'>
      <ul className='features flex flex-col'>
        {
          features.map((feat, index) => (
            <li key={index} className="feat">
              <span dangerouslySetInnerHTML={{
                __html: format(feat)
              }}/>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Features;
