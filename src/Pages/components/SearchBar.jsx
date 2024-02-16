/* eslint-disable react/prop-types */
import search from "./assets/search.png"
import setting from "./assets/setting.png";
import { useState } from "react";

function SearchBar({isOpen,setIsOpen,setSort,setSearch,searchval}) {

  const [active, setActive] = useState(null)
  const [filteractive, setFilterActive] = useState(0)

  const handleSort = (e) => {
    setSort(e.target.value)
    setActive(e.target.value)
    setIsOpen(false)
  }

  const handlefilter=(e) => {
    setFilterActive(e.target.value)
    setSort(e.target.value)
    setIsOpen(false)
  }
  
  return (
    <form className="tw-flex">
        <div className='tw-relative tw-h-max tw-flex tw-w-[80vw] xs:tw-w-[90vw] lg:tw-w-[500px] tw-justify-center tw-items-center tw-px-[14px] tw-py-1 tw-rounded-l-[28px] tw-bg-[#f6f6f6] tw-select-none'>
            <img className=' tw-h-[20px] tw-w-[20px] tw-object-contain' src={search}/>
            <input onChange={(e)=>{
              setSearch(e.target.value)
            }} value={searchval} type="search" placeholder='search projects' className=' lg:w-[500px] tw-h-full tw-text-[16px] tw-p-2 tw-bg-transparent tw-text-[#333333] tw-ml-[14px] tw-outline-none tw-border-none tw-flex-1'/>
        </div>
            <div id="menu-button" onClick={(e)=>{
              e.stopPropagation();
              setIsOpen(!isOpen)
            }} className="tw-bg-[#020049] tw-flex tw-justify-center tw-items-center tw-w-[43px] tw-rounded-r-[28px] hover:tw-bg-indigo-700 tw-cursor-pointer tw-text-white tw-relative">
              <img className=' tw-h-[20px] tw-w-[20px] tw-object-contain' src={setting}/>
              <ul onClick={(e)=>{
                e.stopPropagation();
              }} className={`tw-absolute tw-bg-[#e5d8ff] tw-bottom-0 tw-translate-y-full tw-right-0 tw-w-[250px] tw-z-50 ${isOpen?"tw-flex":"tw-hidden"} tw-flex-col tw-rounded-[8px] tw-text-black tw-font-semibold tw-shadow-xl tw-overflow-hidden tw-select-none`}>
                <li className="tw-h-[30px] tw-flex tw-items-center tw-bg-[#a47eeb] tw-cursor-default tw-px-5 tw-py-5">Sort By</li>
                <li onClick={handleSort} value={"1"} className={`tw-h-[30px] ${active==1?"tw-bg-[#c09ced]":""} tw-flex tw-items-center hover:tw-bg-[#f0e8ff] tw-px-5 tw-py-5`}>Rating</li>
                <li onClick={handleSort} value={"2"} className={`tw-h-[30px] ${active==2?"tw-bg-[#c09ced]":""} tw-flex tw-items-center hover:tw-bg-[#f0e8ff] tw-px-5 tw-py-5`}>A-Z</li>
                <li onClick={handleSort} value={"3"} className={`tw-h-[30px] ${active==3?"tw-bg-[#c09ced]":""} tw-flex tw-items-center hover:tw-bg-[#f0e8ff] tw-px-5 tw-py-5`}>Z-A</li>
                <li onClick={handleSort} value={"4"} className={`tw-h-[30px] ${active==4?"tw-bg-[#c09ced]":""} tw-flex tw-items-center hover:tw-bg-[#f0e8ff] tw-px-5 tw-py-5`}>Date</li>
                <li className="tw-h-[30px] tw-flex tw-items-center tw-bg-[#a47eeb] tw-cursor-default tw-px-5 tw-py-5">Filter</li>
                <li onClick={handlefilter} value={"0"} className={`tw-h-[30px] ${filteractive==0?"tw-bg-[#c09ced]":""} tw-flex tw-items-center hover:tw-bg-[#f0e8ff] tw-px-5 tw-py-5`}>All</li>
                <li onClick={handlefilter} value={"5"} className={`tw-h-[30px] ${filteractive==5?"tw-bg-[#c09ced]":""} tw-flex tw-items-center hover:tw-bg-[#f0e8ff] tw-px-5 tw-py-5`}>Bookmarks</li>
              </ul>
            </div>
    </form>
  )
}

export default SearchBar