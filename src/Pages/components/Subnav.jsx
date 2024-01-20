/* eslint-disable react/prop-types */
import SearchBar from './SearchBar'

function Subnav({isOpen,setIsOpen,setSort,setSearch,searchval}) {
  return (
    <nav className='tw-flex tw-flex-col tw-gap-5 lg:tw-gap-0 lg:tw-flex-row tw-justify-between tw-items-center tw-px-[0px] sm:tw-px-5 tw-mb-8 pb-3 tw-shadow-2xl'>
        <div className='tw-flex tw-justify-between tw-w-full tw-px-8 lg:tw-flex-none lg:tw-w-max'>
            <h1 className='tw-text-lg sm:tw-text-3xl tw-text-slate-600 tw-font-extrabold tw-border-slate-600 tw-border-b-4 hover:tw-pr-6 hover:tw-mr-[-24px] tw-duration-500 tw-cursor-pointer tw-flex tw-items-end'>Dev-Mate</h1>
            <div><button className='tw-bg-[#020049] tw-text-white tw-flex tw-justify-center tw-items-center tw-px-3 tw-py-2 tw-rounded-lg hover:tw-bg-indigo-700 lg:tw-hidden
        '>Create Project +</button></div>
        </div>
        <SearchBar isOpen={isOpen} setIsOpen={setIsOpen} setSort={setSort} setSearch={setSearch} search={searchval}/>
        <div><button className='tw-bg-[#020049] tw-text-white lg:tw-flex tw-justify-center tw-items-center tw-px-3 tw-py-2 tw-rounded-lg hover:tw-bg-indigo-700 tw-hidden
        '>Create Project +</button></div>
    </nav>
  )
}

export default Subnav