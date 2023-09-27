import Image from 'next/image'
import React from 'react'
import Rate from '../Rate'

interface Props {
  user: string;
  score: number;
  isVerified: boolean;
  profileImg: string;
}

const UserProfile = ({
  user,
  score,
  isVerified,
  profileImg
}: Props) => {
  return (
    <div className='flex flex-row user-profile'>
      <Image
        src={profileImg}
        alt="profile-img"
        width={48}
        height={48}
        priority
      />
      <div className='flex flex-col justify-around'>
        <div className="flex flex-row">
          <Rate score={score} />
        </div>
        <div className="flex flex-row items-center user-description">
          <span className='user'>{user}</span> {isVerified && <span className='verified flex flex-row items-center'><Image
            src='/verified.svg'
            alt="verifief"
            width={16}
            height={16}
            priority
          />Verified Customer</span>}
        </div>
        
      </div>
    </div>
  )
}

export default UserProfile