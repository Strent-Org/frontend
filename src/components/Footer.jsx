const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="h-fit w-full px-36 py-16 bg-[#201A6B]">
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-16 lg:flex lg:gap-14">
        <div className="max-w-[18rem]">
          <h3 className="text-2xl font-bold text-white mb-4 font-sora">LOGO</h3>
          {/* <img className="h-[8rem]" src="/strent-logo.svg" alt="Logo" /> */}
          <span className="w-full h-fit text-white">
            Strent is a trusted platform for renting and booking shortlets in
            Nigeria. We connect you with verified listings, flexible payment
            options, and a secure experience. Whether you're staying short-term
            or settling in for longer.
          </span>
        </div>
        <div className="max-w-[20rem]">
          <h3 className="text-xl font-bold text-white mb-4 font-sora">
            Quick Links
          </h3>
          <ul className="w-full h-fit text-white font-inter">
            <li className="mb-4">About Us</li>
            <li className="mb-4">Find an Agent</li>
            <li className="mb-4">Privacy Policy</li>
            <li className="whitespace-nowrap mb-4">Terms and Agreement</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="max-w-[20rem]">
          <h3 className="text-xl font-bold text-white mb-4 font-sora">
            Contact Us
          </h3>
          <div className="w-full h-fit flex flex-col gap-2">
            <span className="text-white mb-4 font-inter">
              support@strent.ng
            </span>
            <span className="text-white mb-4 font-inter whitespace-nowrap">
              3rd Floor, Civic Hub Building, <br /> Victoria Island, Lagos,
              Nigeria
            </span>
            <span className="text-white font-inter">
              +234 913 456 7890 <br /> (Mon–Fri, 9AM – 5PM)
            </span>
          </div>
        </div>
        <div className="max-w-[20rem]">
          <h3 className="text-xl font-bold text-white mb-4 font-sora">
            Newsletter
          </h3>
          <div className="flex mb-4">
            <input
              className="h-8 rounded-l-xl p-4 flex item-center flex-start font-inter"
              placeholder="Enter Email"
              type="text"
            />
            <img className="h-8" src="/arrow-right.png" alt="Right Arrow" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4 font-sora">
            Follow Us
          </h3>
          <div className="flex gap-2">
            <a className="font-inter cursor-pointer" href="#">
              <img src="/facebook.png" alt="Facebook Logo" />
            </a>
            <a className="font-inter cursor-pointer" href="#">
              <img src="/twitter.png" alt="Twitter Logo" />
            </a>
            <a className="font-inter cursor-pointer" href="#">
              <img src="/instagram.png" alt="Instagram Logo" />
            </a>
            <a className="font-inter cursor-pointer" href="#">
              <img src="/tiktok.png" alt="Tiktok Logo" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <hr className="w-[100%]" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
          <p className="text-white font-inter">
            © {year} Strent. All rights reserved.
          </p>
          <p className="text-white font-inter flex items-center gap-1 mt-2 sm:mt-0">
            Back to Top
            <a href="#">
              <img
                src="/oui_arrow-up.png"
                className="cursor-pointer"
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
