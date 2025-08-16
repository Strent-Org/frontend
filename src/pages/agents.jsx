import { useState } from "react";
import Forward from "../assets/icons/forward.svg";
import Forward2 from "../assets/icons/colored-forward.svg";
import Down from "../assets/icons/down.svg";
import { newAgentsList as agents } from "../data/agentpagedata";
import { Link } from "react-router-dom";
import Pagination from "../components/agentpage-components/pagination";


export default function Agents() {
  const [currentPage, SetCurrentPage] = useState(1)
    const [postPerPage] = useState(6) 
  
    const indexOfLastPost = currentPage * postPerPage
      const indexOfFirstPost = indexOfLastPost - postPerPage
      const currentAgents = agents.slice(indexOfFirstPost, indexOfLastPost)
  
    const paginate = (pageNumber) => {
      SetCurrentPage(pageNumber)
    }
  return (
    <main className="font-inter px-[15%] flex flex-col gap-8 py-8">
      <section id="header">
        <div className="flex gap-2 items-center">
          <Link to={'/'}><p>Home</p></Link>
          <img src={Forward} alt="Forward-arrow" className="h-4 w-4" />
          <p className="text-secondary-500">Agents</p>
        </div>
        <h1 className="font-sora font-bold text-[32px]">Agents</h1>
      </section>
      <section id="agents">
        <div className="flex justify-between items-center text-sm border border-neutral2 rounded-lg py-4 px-8 mb-8">
          <p>Showing 1-6 of 20 results</p>
          <div className="flex relative items-center ">
          <p>
            Sort by:{" "}
          </p>
          <select
              name="filters"
              id="agent-filters"
              className="appearance-none flex-grow w-[80px] cursor-pointer px-1"
            >
              <option value="Newest">Newest</option>
            </select>
          <img
            src={Down}
            alt="Down-icon"
            className="absolute right-0 pointer-events-none"
          />
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,304px))] gap-4 justify-center mb-8">
          {currentAgents.map((agent) => {
            return (
              <article
                key={agent.id}
                className="w-[304px] rounded-lg border border-neutral2 pt-2"
              >
                <section className="flex justify-center">
                  <div className="relative">
                    <p className="p-2 text-white bg-secondary text-xs rounded-md w-[98px] absolute top-2 left-2">
                      {agent.numberOfProperties} Properties
                    </p>
                    <img
                      src={agent.imageUrl}
                      alt={agent.name}
                      className="rounded-t"
                    />
                  </div>
                </section>
                <section className="text-sm">
                  <div className="pl-4 py-4 border-b border-neutral2">
                    <h3 className="font-sora font-semibold text-xl">
                      {agent.name}
                    </h3>
                    <p>Email: {agent.email}</p>
                    <p>Phone: {agent.phoneNumber}</p>
                  </div>
                  <div className="flex justify-end items-center gap-2 text-secondary p-4 cursor-pointer">
                    <Link to={`/agents/${agent.id}`} className="flex items-center gap-2">
                        <p>{agent.listings}</p>
                        <img
                            src={Forward2}
                            alt="Forward-icon"
                            className=" filter"
                        />
                    </Link>
                  </div>
                </section>
              </article>
            );
          })}
        </div>
      </section>
      <Pagination postPerPage={postPerPage} totalPosts={agents.length} paginate={paginate} currentPage={currentPage} visiblePages={3}/>

    </main>
  );
}
