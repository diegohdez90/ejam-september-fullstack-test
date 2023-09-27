import Image from "next/image";

const Nav = () => {
  return <div className="flex flex-row w-full grid  grid-cols-12 justify-between">
    <div className="col-span-6">
      <img
        src="/clarifon.svg"
        alt="calrifon"
        className="object-contain"
      />
    </div>
    <div className="flex flex-row gap-2 col-span-6 justify-end">
      <img
        src="/mcafee.svg"
        alt="mcafee"
        className="object-contain"
      />
      <img
        src="/norton.svg"
        alt="norton"
        className="object-contain"
      />
    </div>
  </div>
}

export default Nav;
