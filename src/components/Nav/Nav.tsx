import Image from "next/image";

const Nav = () => {
  return <div className="flex flex-row w-full justify-between">
    <div>
      <Image
        src="/clarifon.svg"
        alt="calrifon"
        width={0}
        height={0}
        fill={false}
        style={{height: "100%", width:"100%", position: 'initial'}}
      />
    </div>
    <div className="flex flex-row gap-8">
      <Image
        src="/mcafee.svg"
        alt="mcafee"
        width={0}
        height={0}
        fill={false}
        style={{height: "100%", width:"100%", position: 'initial'}}
      />
      <Image
        src="/norton.svg"
        alt="norton"
        width={0}
        height={0}
        fill={false}
        style={{height: "100%", width:"100%", position: 'initial'}}
      />
    </div>
  </div>
}

export default Nav;
