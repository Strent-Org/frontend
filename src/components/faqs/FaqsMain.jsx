
export default function FaqMain({ faq, ArrowDown, ArrowUp, CloseIcon, useState }) {
  const [isOpen, setIsOpen] = useState(faq.isOpen);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="grid grid-cols-1">
      <article
        key={faq.id}
        className="border-b  cursor-pointer  w-full  border-neutral2 m-2"
      >
        <h3 className="text-xl w-full font-semibold flex justify-between items-center font-sora" style={isOpen? {color: 'blue'} : {color: 'black'}} onClick={toggleOpen}>
          {faq.question}{" "}
          <span>
            {" "}
            {isOpen ? (
              <img src={ArrowUp} className=" rounded-lg mb-2 text-white p-1 min-w-[48px] bg-primary" />
            ) : (
              <img
                src={ArrowDown}
                className="text-neutral-darker mb-2 rounded-lg p-1 min-w-[48px] bg-neutral-normal"
              />
            )}{" "}
          </span>
        </h3>
        {isOpen &&
        <div>
         <p className="text-left text-gray-700  text-base p-[3%] font-inter">{faq.answer} </p>
        <h3 className="flex justify-end font-semibold items-center" onClick={toggleOpen}>Close <img src= {CloseIcon}  className="w-3 ml-2 " /></h3>
        </div>}
      </article>
    </div>
  );
}
