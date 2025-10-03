import React from "react";
import { HomeIcon } from "@heroicons/react/16/solid";
import MessageIcon from "../assets/icons/message-text.svg";
import ColoredMessageIcon from "../assets/icons/message-colored.svg";
import MessageAdd from "../assets/icons/message-add.svg";
import ChatIcon from "../assets/icons/chat.svg";
import Cross from "../assets/icons/cross.svg";

const Chatbox = () => {
    const [Ai, setAi] =React.useState(false)
    const [Convo, setConvo] =React.useState(false)
    const handleAi = () => {
        setAi(!Ai)
    }
  return (
    < div className="z-50">
      <div className={`${Ai ? 'flex' : 'hidden'} flex-col fixed bottom-20 right-6 h-[488px] bg-white rounded-lg shadow-lg w-[315px]`}>
        {/* Home Active Section */}
        <div>
            <section className="rounded-t-lg bg-[linear-gradient(to_right,#352BB4,#4438E7,#4B3DFE,#6F64FE,#867DFE)] pt-[25%] h-[290px]">
          <div className="text-left px-6 flex flex-col gap-4 text-white">
            <h2 className="text-2xl font-semibold font-sora">Hey!</h2>
            <p className="text-sm font-inter">
              Need help? I’m your Strent AI Agent here to help you rent smarter.
            </p>
          </div>
        </section>
        <section className="h-[108px] absolute bottom-[130px] rounded-lg bg-white left-6 w-[267px] shadow-lg flex justify-center items-center">
          <div className="flex gap-2 items-center justify-center bg-primary rounded-lg h-10 w-[235px]">
            <img src={MessageAdd} alt="add-message-icon" />
            <p className="text-sm text-white">Start New Chat</p>
          </div>
        </section>
        </div>
        
        {/* Conversation Active Section */}
        <section className="h-16 border-t flex text-left mt-auto">
          <div onClick={() => setConvo(false)} className="w-1/2 gap-2 flex flex-col items-center justify-center">
            <HomeIcon className={`${Convo ? 'hidden' : 'text-primary block'} h-7 w-7`} />
            {/* <HomeOutline className={`${Convo ? 'text-primary' : 'hidden'} h-7 w-7`} /> */}
            <p className={`${!Convo ? 'text-primary' : 'text-[#939496]'} text-xs font-inter`}>Home</p>
          </div>
          <div onClick={() => setConvo(true)} className="w-1/2 flex flex-col gap-2 items-center justify-center ">
            <img src={Convo ? ColoredMessageIcon : MessageIcon} alt="MessageIcon" />
            <p className= {`text-xs ${Convo ? 'text-primary' : 'text-[#939496]'} font-inter`}>Conversation</p>
          </div>
        </section>
      </div>
      <div>
        <img
            className={`hidden lg:block fixed right-6 bottom-6 w-12 h-12 z-50 cursor-pointer`}
            onClick={handleAi}
            src={`${Ai ? Cross : ChatIcon}`}
            alt="chat icon"
          />
      </div>
    </div>
  );
};

export default Chatbox;