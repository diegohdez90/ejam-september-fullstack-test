import React from 'react'

interface Props {
  content: string;
}

const CommentDescription = ({
  content
}: Props) => {
  return (
    <div className='comment'><p>{content}</p></div>
  )
}

export default CommentDescription;
