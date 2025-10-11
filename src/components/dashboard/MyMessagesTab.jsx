import { CircleCheck } from 'lucide-react'
import { Inbox } from 'lucide-react'
import { Trash2 } from 'lucide-react'
import { RefreshCcw } from 'lucide-react'
import React from 'react'

const MyMessagesTab = () => {
  const [activeTab, setActiveTab] = React.useState("inbox")
  return (
    <div className='w-full space-y-4'>
      <section className='flex gap-4 font-semibold font-inter '>
        <div className='max-w-[184px] w-full cursor-pointer flex gap-2 border border-[#565658] p-4 rounded-lg items-center justify-center'>
          <RefreshCcw size={19}/>
          <p>Refresh</p>
        </div>
        <div className='max-w-[184px] w-full cursor-pointer flex gap-2 border border-[#565658] p-4 rounded-lg items-center justify-center'>
          <CircleCheck size={19} />
          <p>Mark as Read</p>
        </div>
        <div className='max-w-[184px] w-full cursor-pointer flex gap-2 border border-[#565658] p-4 rounded-lg items-center justify-center'>
          <Trash2 size={19} color='red'/>
          <p>Trash</p>
        </div>
      </section>
      <section className='w-full'>
        <label htmlFor="email" className='w-full'>
          <input type="email" name="email" id="email" placeholder='Search Email' className='rounded-l-lg p-4 w-[80%]'/>
          <button className='p-4 rounded-r-lg bg-[#4B3DFE] w-[20%] text-white'>Submit</button>
        </label>
      </section>
      <section>
        <div className='font-inter text-sm flex gap-2 font-semibold' >
        <p className={`${activeTab === "inbox" ? 'bg-white' : 'bg-[#F7F8FA]'} cursor-pointer max-w-[150px] w-full  shadow-md p-4 rounded-t-2xl flex items-center justify-center gap-2`} onClick={() => setActiveTab("inbox")}><Inbox size={18}/>Inbox (0)</p>
        <p className={`${activeTab === "trash" ? 'bg-white' : 'bg-[#F7F8FA]'} cursor-pointer max-w-[150px] w-full flex items-center justify-center gap-2 shadow-md p-4 rounded-t-2xl`} onClick={() => setActiveTab("trash")}><Trash2 size={18}/> Trash (0)</p>
      </div>
      {activeTab === "inbox" && <div className='rounded-r-2xl rounded-b-2xl flex items-center justify between px-4 bg-white shadow-md h-[120px]'>
        <p className='w-1/3 p-4 border-b text-center border-[#DDDDE1]'>Sender</p>
        <p className='w-1/3 p-4 border-b text-center border-[#DDDDE1]'>Subject</p>
        <p className='w-1/3 p-4 border-b text-center border-[#DDDDE1]'>Date</p>
        </div>}
      {activeTab === "trash" && <div className='rounded-r-2xl rounded-b-2xl flex items-center px-4 justify between bg-white shadow-md h-[120px]'>
        <p className='w-1/3 p-4 border-b text-center border-[#DDDDE1]'>Sender</p>
        <p className='w-1/3 p-4 border-b text-center border-[#DDDDE1]'>Subject</p>
        <p className='w-1/3 p-4 border-b text-center border-[#DDDDE1]'>Date</p>
        </div>}
      </section>
    </div>
  )
}

export default MyMessagesTab