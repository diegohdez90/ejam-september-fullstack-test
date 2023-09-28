import Image from "next/image";

const Footer = () => {
  return <footer className="footer">
    <div className="content md:flex xs:grid xs:grid-cols-1">
      <div className="copyright divide-x">
        <span>Copyright &copy; 2023</span>
        <span>clarifionsupport@clarifion.com</span>
      </div>
      <div
        className="flex flex-row gap-4"
        ><Image
            src="/lock.svg"
            alt="lock"
            width={12}
            height={12}
            priority
          />
        <span>Secure 256-bit SSL encryption.</span></div>
    </div>
  </footer>
}

export default Footer;
