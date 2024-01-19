/* eslint-disable react/prop-types */
import data from "./data.json";
import {motion} from "framer-motion";

const Card = ({setSelected,card}) => {
  return(
    <motion.div className="tw-bg-slate-400 tw-p-3 tw-pb-0 tw-cursor-pointer tw-border-4 tw-border-solid tw-border-slate-700 tw-rounded-md"
      whileHover={{
        scale:1.025,
        transition:{
          duration:0.2,
        }
      }}
      whileTap={{
        scale:0.95,
      }}
      onClick={()=>{
        card.ButtonClicks += 1;
        setSelected(card)
      }}
    >
      <div className="tw-w-[350px] tw-h-[500px] tw-bg-slate-400 tw-mb-4 tw-relative">
        <div className="tw-absolute tw-top-0 tw-z-10 tw-h-[50%] tw-overflow-hidden tw-w-full tw-border-4 tw-border-solid tw-border-slate-700 tw-rounded-md tw-flex tw-justify-center tw-items-center">
          <motion.img layoutId={`card-${card.ProjectID}`}
          src={card.Thumbnail} className=" tw-h-full tw-bg-red-400 tw-shadow-xl tw-rounded-sm tw-object-cover"/>
        </div>
        <div className="tw-absolute tw-bottom-0 tw-h-[50%] tw-w-full">
          <div className="tw-flex tw-flex-wrap tw-pt-4 tw-gap-2 tw-bg-slate-400 tw-px-2 tw-py-2 tw-rounded-b-sm">
            {card.Tags.map((tag)=>{
              return (
                <div onClick={(e)=>{e.stopPropagation();}} className=" tw-bg-slate-700 tw-text-white tw-px-2 tw-py-1 tw-rounded-md tw-min-h-max tw-h-[35px] hover:tw-bg-slate-200 hover:tw-text-slate-900" key={tag}>{tag}</div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function List({setSelected}) {
  return (
    <div className="tw-p-4">
      <h1 className="tw-text-center tw-font-bold tw-text-4xl tw-mb-8">All Projects</h1>
      <div className="tw-flex tw-flex-wrap tw-gap-6 tw-justify-center tw-items-center">
        {data.map((card)=>(
          <Card key={card.ProjectID} setSelected={setSelected} card={card}/>
        ))}
      </div>
    </div>
  )
}

export default List