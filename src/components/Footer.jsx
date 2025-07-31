const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="h-fit w-full px-[9.6rem] py-[4.5rem] bg-[#201A6B]">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 sm:gap-16 lg:flex lg:items-start lg:gap-14">
        <div className="max-w-[18rem]">
          {/* <h3 className="text-2xl font-bold text-white mb-4 font-sora">LOGO</h3> */}
          <img src="/strent-logo.svg" alt="Strent logo" className="h-16 sm:h-20 md:h-24 lg:h-26 w-auto m-0 p-0 block align-middle" />
          <span className="w-full h-fit text-white text-[14px] sm:text-[1rem] tracking-[0.4%]">
            Strent is a trusted platform for renting and booking shortlets in
            Nigeria. We connect you with verified listings, flexible payment
            options, and a secure experience. Whether you're staying short-term
            or settling in for longer.
          </span>
        </div>
        <div className="max-w-[20rem]">
          <h3 className="sm:text-xl text-lg font-bold text-white mb-4 font-sora whitespace-nowrap">
            Quick Links
          </h3>
          <ul className="w-full h-fit text-white font-inter text-[14px] sm:text-[1rem] tracking-[0.4%]">
            <li className="mb-4">About Us</li>
            <li className="mb-4 whitespace-nowrap">Find an Agent</li>
            <li className="mb-4 whitespace-nowrap">Privacy Policy</li>
            <li className="whitespace-nowrap mb-4">Terms and Agreement</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="max-w-[20rem]">
          <h3 className="sm:text-xl text-lg font-bold text-white mb-4 font-sora leading-7 tracking-[1.12%] whitespace-nowrap">
            Contact Us
          </h3>
          <div className="w-full h-fit flex flex-col gap-2">
            <span className="text-white mb-4 font-inter text-[14px] sm:text-[1rem] tracking-[0.4%]">
              support@strent.ng
            </span>
            <span className="text-white mb-4 font-inter whitespace-nowrap text-[14px] sm:text-[1rem] tracking-[0.4%]">
              3rd Floor, Civic Hub Building, <br /> Victoria Island, Lagos,
              Nigeria
            </span>
            <span className="text-white font-inter text-[14px] sm:text-[1rem] tracking-[0.4%] whitespace-nowrap">
              +234 913 456 7890 <br /> (Mon–Fri, 9AM – 5PM)
            </span>
          </div>
        </div>
        <div className="max-w-[20rem]">
          <h3 className="sm:text-xl text-lg font-bold text-white mb-4 font-sora leading-7 tracking-[1.12%]">
            Newsletter
          </h3>
          <div className="flex mb-4">
            <input
              className="sm:h-8 h-2 rounded-l-xl sm:w-[13rem] w-[8rem] p-4 flex item-center flex-start font-inter"
              placeholder="Enter Email"
              type="text"
            />
            <img className="h-8" src="/arrow-right.png" alt="Right Arrow" />
          </div>
          <h3 className="sm:text-xl text-lg font-bold text-white mb-4 font-sora leading-7 tracking-[1.12%] whitespace-nowrap">
            Follow Us
          </h3>
          <div className="sm:flex flex-cols sm:gap-4">
            <a className="font-inter cursor-pointer" href="#">
              <img className="sm:h-9 h-8 mb-4 transition-transform duration-300 ease-in-out hover:scale-110" src="/facebook.png" alt="Facebook Logo" />
            </a>
            <a className="font-inter cursor-pointer" href="#">
              <img className="sm:h-9 h-8 mb-4 transition-transform duration-300 ease-in-out hover:scale-110" src="/twitter.png" alt="Twitter Logo" />
            </a>
            <a className="font-inter cursor-pointer" href="#">
              <img className="sm:h-9 h-8 mb-4 transition-transform duration-300 ease-in-out hover:scale-110" src="/instagram.png" alt="Instagram Logo" />
            </a>
            <a className="font-inter cursor-pointer" href="#">
              <img className="sm:h-9 h-8 mb-4 transition-transform duration-300 ease-in-out hover:scale-110" src="/tiktok.png" alt="Tiktok Logo" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <hr className="w-[100%]" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
          <p className="text-white font-inter text-[14px] sm:text-[1rem] tracking-[0.4%]">
            © {year} Strent. All rights reserved.
          </p>
          <p className="text-white font-inter flex items-center text-[14px] sm:text-[16px] tracking-[0.4%] gap-1 mt-2 sm:mt-0">
            Back to Top
            <a href="#">
              <img
                src="/oui_arrow-up.png"
                className="cursor-pointer h-4 sm:h-6"
                alt="Back to Top Arrow"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
