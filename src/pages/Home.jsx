import {
  topRental,
  bestRental,
  neighbourhoods,
  faqs,
} from "../data/homepagedata.js";
import BgImg from "../assets/images/pexels-ben-iwara-1033992193-27741697 1.png";
import ArrowUp from "../assets/icons/arrow_upward_alt_40dp_FFF_FILL0_wght100_GRAD0_opsz40.svg";
import ArrowDown from "../assets/icons/arrow_downward_alt_40dp_1F1F1F_FILL0_wght100_GRAD0_opsz40.svg";
import CloseIcon from "../assets/icons/close.svg"
import { useState } from "react";

function FaqList({ faq }) {
  const [isOpen, setIsOpen] = useState(faq.isOpen);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="grid grid-cols-1">
      <article
        key={faq.id}
        className="border-b  cursor-pointer  w-full  border-neutral2 m-2"
      >
        <h3 className="text-xs w-full flex justify-between items-center " onClick={toggleOpen}>
          {faq.question}{" "}
          <span>
            {" "}
            {isOpen ? (
              <img src={ArrowUp} className="text-white p-1 text-2xl bg-primary" />
            ) : (
              <img
                src={ArrowDown}
                className="text-neutral-darker p-1 bg-neutral-normal"
              />
            )}{" "}
          </span>
        </h3>
        {isOpen &&
        <div>
         <p className="text-left text-gray-700  text-2xs p-[3%]">{faq.answer} </p>
        <h3 className="flex justify-end font-semibold items-center" onClick={toggleOpen}>Close <img src= {CloseIcon}  className="w-3 ml-2 " /></h3>
        </div>}
      </article>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center text-center h-auto w-full overflow-x-hidden">
        <section
          id="hero-section"
          className="h-auto flex flex-col items-center w-full p-[4%] mb-[3%] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BgImg})` }}
        >
          <div className="pb-1">
            <h1 className="text-white font-bold text-base pb-1">
              Renting Made Simple, Safe, and Stress-Free
            </h1>
            <h3 className="text-white font-semibold text-xs">
              Find Your Perfect Home With Zero Hassles.
            </h3>
          </div>
          <div className="flex  w-fit text-xs my-3">
            <button className="text-white bg-primary py-2 px-6 text-2xs rounded-md mr-2">
              Rent
            </button>
            <button className="bg-white py-2 px-6 rounded-md text-2xs">
              Shortlet
            </button>
          </div>

          <div className="bg-black p-2 rounded-md">
            <form action="">
              <div className="px-0 flex flex-wrap items-center justify-center" >
                <input type="text" id="search" className="h-[26px] mt-[2%]"/>
                <button className="bg-primary text-white text-2xs h-[26px] mt-[2%]  px-6 rounded-r-lg">
                  Find property
                </button>
              </div>

              <div>
                <select
                  id="property-type"
                  className="text-white bg-transparent text-xxs"
                >
                  <option value="#">Property type</option>
                </select>
                <select
                  id="Bedrooms"
                  className="text-white bg-transparent text-xxs"
                >
                  <option value="#">Bedrooms</option>
                </select>
                <select
                  id="min-price"
                  className="text-white bg-transparent text-xxs"
                >
                  <option value="#">Min Price</option>
                </select>
                <select
                  id="max-price"
                  className="text-white bg-transparent text-xxs"
                >
                  <option value="#">Max Price</option>
                </select>
              </div>
            </form>
          </div>
        </section>

        <section id="luxury-listings" className="py-2 px-[10%] text-sm bg-neutral w-full mb-[3%]">
          <h2>Top Rental Properties in the Market</h2>
          <p className="text-2xs">
            Explore some of the best properties with verified agents
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3 mt-2 text-left mb-[3%]">
            {topRental.map((apt) => {
              return (
                <article key={apt.id} className=" mb-2 mx-auto">
                  <img
                    src={apt.imageUrl}
                    alt={apt.title}
                    className=" rounded-lg"
                  />
                  <p className="text-2xs text-secondary">{apt.title}</p>
                  <h3 className="font-semibold">{apt.price}</h3>
                  <p className="text-xs">{apt.location}</p>
                </article>
              );
            })}
          </div>
          <h2>Best Luxury Listings in Lagos</h2>
          <p className="text-2xs">
            Some of the finest luxury listings, selected for you
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3 mt-2 text-left">
            {bestRental.map((apt) => {
              return (
                <article key={apt.id} className="mb-2 mx-auto">
                  <img
                    src={apt.imageUrl}
                    alt={apt.title}
                    className=" rounded-lg"
                  />
                  <p className="text-2xs text-secondary">{apt.title}</p>
                  <h3 className="font-semibold">{apt.price}</h3>
                  <p className="text-xs">{apt.location}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="neighbourhood" className="py-2 px-[10%] text-sm w-full mb-[3%]">
          <h2>Find Properties by Neighbourhood</h2>
          <p className="text-2xs">Choose where you live and find your peace</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] mt-2 gap-3 w-full">
            {neighbourhoods.map((neighbourhood) => {
              return (
                <article
                  key={neighbourhood.id}
                  className="mb-2 shadow-md border-t border-r border-l border-neutral rounded-b-lg rounded-bl-lg mx-auto"
                >
                  <img
                    src={neighbourhood.imageUrl}
                    alt={`${neighbourhood.location} Neighbourhood`}
                    className="rounded-t-lg rounded-tr-lg mb-4"
                  />
                  <h3 className="font-semibold">{neighbourhood.location}</h3>
                  <p className="text-xs mb-4">
                    {neighbourhood.property} Properties
                  </p>
                </article>
              );
            })}
          </div>
        </section>
        <section id="faqs" className="text-sm w-full px-[10%]">
          <h2>Frequently Asked Questions</h2>
          <p className="text-2xs">Get answers about renting with Strent</p>
          {faqs.map((faq) => {
            return <FaqList key={faq.id} faq={faq} />;
          })}
        </section>
      </main>
    </>
  );
}
