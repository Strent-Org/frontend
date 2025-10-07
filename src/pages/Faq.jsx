import FaqHero from "../components/faqs/FaqsHero"
import FaqMain from "../components/faqs/FaqsMain"
import { useState } from "react"
import ArrowUp from "../assets/icons/arrow_upward_alt_40dp_FFF_FILL0_wght100_GRAD0_opsz40.svg";
import ArrowDown from "../assets/icons/arrow_downward_alt_40dp_1F1F1F_FILL0_wght100_GRAD0_opsz40.svg";
import CloseIcon from "../assets/icons/close.svg"
import { questions } from "../data/faqs";

const Faqs = () => {
  return (
    <div className="flex flex-col justify-center items-center relative">
        <section className="w-full">
            <FaqHero/>
        </section>
        <section className="px-[10%] w-full mt-[5%] mb-[5%] px-[4rem] sm:px-[9.6rem] my-16">
            <div className="flex flex-col gap-2 text-center mb-4">
          <h2 className="text-2xl font-semibold tracking-[0.02em] font-sora">Frequently Asked Questions</h2>
          <p className="text-base font-inter">Get answers about renting with Strent</p>
          </div>
            {questions.map((faq) => {
                return (
                    <FaqMain key={faq.id} faq={faq} useState={useState} ArrowDown={ArrowDown} ArrowUp={ArrowUp} CloseIcon={CloseIcon}/>
                )
            })}   
        </section>
    </div>
  )
}

export default Faqs
