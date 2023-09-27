import CommentDescription from "../CommentDescription";
import UserProfile from "../UserProfile";

interface Props {
  comment: any;
}

const Comment = ({
  comment
}: Props) => {

  const {
    user,
    profileImg,
    score,
    isVerified,
    content,
  } = comment;
  return (
    <div className="flex flex-col">
      <UserProfile
        user={user}
        profileImg={profileImg}
        score={score}
        isVerified={isVerified}
      />
      <CommentDescription
        content={content}
      />
    </div>
  )
}

export default Comment;
