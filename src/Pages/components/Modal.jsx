/* eslint-disable react/prop-types */
import {motion} from "framer-motion";

function Modal({selected, setSelected}) {
  if(!selected){
    return <></>
  }
  return(
    <div onClick={()=>{
      setSelected("")
    }} className="tw-fixed tw-inset-0 tw-bg-black/50 tw-z-50 tw-cursor-pointer tw-overflow-y-scroll tw-pt-[100px]">
      <div onClick={(e)=>{e.stopPropagation();}} className="tw-w-full tw-max-w-[700px] tw-mx-auto tw-my-8 tw-px-8 tw-cursor-default">
        <motion.div layoutId={`card-${selected.ProjectID}`} className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <img src={selected.Thumbnail}/>
        </motion.div>
        <motion.div initial={{opacity:0,y:50}} animate={{
          opacity:1,
          y:0
        }} transition={{
          duration:0.5
        }} className="tw-bg-white tw-p-4">
          <div className="tw-text-2xl tw-font-bold tw-mb-2">
            {selected.Tags.join(", ")}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Modal