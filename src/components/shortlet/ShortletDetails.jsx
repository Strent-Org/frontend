import { useState } from "react";
import ShortletCards from "./ShortletCards";
import { Link } from "react-router-dom";

const latestProperties = [
  {
    id: 1,
    title: "3 Bedroom Apartment in lekki",
    img: "/latest property1.png",
    price: "NGN 15,000,000",
  },
  {
    id: 2,
    title: "3 Bedroom Apartment in lekki",
    img: "/latest property2.png",
    price: "NGN 15,000,000",
  },
  {
    id: 3,
    title: "3 Bedroom Apartment in lekki",
    img: "/latest property3.png",
    price: "NGN 15,000,000",
  },
  {
    id: 4,
    title: "3 Bedroom Apartment in lekki",
    img: "/latest property4.png",
    price: "NGN 15,000,000",
  },
];

const selectFields = [
  {
    label: "Location",
    name: "location",
    id: "location",
    options: [
      "Agege",
      "Ajeromi-Ifelodun",
      "Alimosho",
      "Amuwo-Odofin",
      "Apapa",
      "Badagry",
      "Epe",
      "Eti-Osa",
      "Ibeju-Lekki",
      "Ifako-Ijaiye",
      "Ikeja",
      "Ikorodu",
      "Kosofe",
      "Lagos Island (Isale Eko)",
      "Lagos Mainland",
      "Mushin",
      "Ojo",
      "Oshodi-Isolo",
      "Shomolu",
      "Surulere",
    ],
  },
  {
    label: "Category",
    name: "category",
    id: "category",
    options: ["Apartment", "Bungalow"],
  },
  {
    label: "Property Type",
    name: "property-type",
    id: "property-type",
    options: ["Rent", "Sale"],
  },
  {
    label: "Number of Beds",
    name: "number-of-beds",
    id: "number-of-beds",
    options: ["1", "2", "3"],
  },
];

const shortletData = [
  { id: 1, href: "/innershortlet/1" },
  { id: 2, href: "/innershortlet/2" },
  { id: 3, href: "/innershortlet/3" },
  { id: 4, href: "/innershortlet/4" },
  { id: 5, href: "/innershortlet/5" },
  { id: 6, href: "/innershortlet/6" },
  { id: 7, href: "/innershortlet/7" },
  { id: 8, href: "/innershortlet/8" },
  { id: 9, href: "/innershortlet/9" },
  { id: 10, href: "/innershortlet/10" },
];

const ShortletDetails = () => {
  const [price, setPrice] = useState(0);
  return (
    <section className="relative w-full h-fit flex flex-col lg:flex-row gap-2 px-4 sm:px-8 md:px-16 lg:px-[10.5rem] py-10 mt-10 my-20">
      <img
        className="hidden lg:block absolute right-4 bottom-[142rem] w-16 h-16"
        src="/chat.png"
        alt="chat icon"
      />
      <div className="flex flex-col flex-[1] gap-5">
        {/* Advanced Search */}
        <div className="w-full border-2 border-gray-300 rounded-lg px-4 py-5">
          <h1 className="text-xl font-bold">Advanced Search</h1>
          <form className="flex flex-col gap-3 mt-6">
            {/* Dropdowns */}
            {selectFields.map((field, index) => (
              <div
                key={index}
                className="border-2 w-full border-gray-400 p-2 rounded-lg cursor-pointer"
              >
                <select
                  className="w-full cursor-pointer border-none outline-none bg-transparent text-gray-400"
                  name={field.name}
                  id={field.id}
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    {field.label}
                  </option>
                  {field.options.map((option, i) => (
                    <option
                      key={i}
                      value={option.toLowerCase().replace(/ /g, "-")}
                      className="text-black"
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            {/* Price Range */}
            <div className="w-full px-2">
              <p className="text-center text-sm mb-2">
                From <span className="font-bold">NGN</span> 0 to 5,000,000,000
              </p>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#565658] rounded-sm shrink-0"></div>
                <input
                  type="range"
                  className="w-full accent-[#4B3DFE] cursor-pointer"
                  min="0"
                  max="5000000000"
                  step="1000000"
                  value={price}
                  onChange={(e) => setPrice(parseInt(e.target.value))}
                />
                <div className="w-4 h-4 bg-[#565658] rounded-sm shrink-0"></div>
              </div>
              <span>{price.toLocaleString()}</span>
            </div>

            {/* Dots + Button */}
            <div className="flex items-center gap-4">
              <span className="font-semibold">Advanced</span>
              <div className="flex flex-col items-center space-y-0.5 cursor-pointer">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-black rounded-full" />
                ))}
              </div>
            </div>

            <button
              className="bg-[#4B3DFE] hover:bg-[#3A2EDB] transition-colors w-full px-6 py-3 rounded-lg text-white font-semibold"
              type="submit"
            >
              Find Property
            </button>
          </form>
        </div>

        {/* Latest Properties */}
        <div className="w-full border-2 border-gray-300 rounded-lg px-4 py-5">
          <h1 className="text-xl font-bold">Latest Properties</h1>
          <div className="flex flex-col gap-4 mt-6">
            {latestProperties.map((property) => (
              <div key={property.id} className="flex items-start gap-4">
                <img
                  className="w-20 h-20 object-cover rounded"
                  src={property.img}
                  alt="Latest property"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-sm md:text-xs font-semibold">
                    {property.title}
                  </p>
                  <p className="text-sm md:text-xs text-[#FF6B57]">
                    {property.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ad Banner */}
        <div className="w-full">
          <img
            className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md"
            src="/shortletAdBanner.png"
            alt="Shortlet Ad Banner"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex-[2.6] w-full mt-6 sm:mt-0">
        <div className="flex flex-col gap-5 w-full lg:ml-6">
          <div className="border-2 border-gray-300 rounded-lg px-4 w-full flex items-center justify-between text-sm text-gray-700">
            <p>Showing 1 – 10 of 150 results</p>
            <select className="border border-gray-300 rounded px-3 py-2 text-gray-700 border-none outline-none bg-white cursor-pointer">
              <option>Sort by: Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          <div className="w-full flex flex-col gap-4">
            {shortletData.map((shortlet) => (
              <Link
                key={shortlet.id}
                to={shortlet.href}
                className="block hover:scale-[1.01] transition-transform duration-200"
              >
                <ShortletCards />
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className="w-9 h-9 rounded-md border border-[#DDDDE1] bg-white text-sm text-[#333] hover:bg-[#F2F2F2]"
              >
                {n}
              </button>
            ))}
            <button className="w-9 h-9 rounded-md border border-[#DDDDE1] bg-white text-sm text-[#333]">
              ...
            </button>
            <button className="h-9 px-4 rounded-md border border-[#DDDDE1] bg-white text-sm text-[#333]">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortletDetails;
