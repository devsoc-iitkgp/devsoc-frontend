/* eslint-disable react/prop-types */
import {motion} from "framer-motion";
import like from "./assets/like.png";
import likedark from "./assets/like-dark.png";
import user from "./assets/user-dark.png";
import { useEffect, useState } from "react";
import bookmarkBlank from "./assets/bookmark-blank.png";
import bookmarkFilled from "./assets/bookmark.png";

function Modal({selected, setSelected}) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  useEffect(()=>{
    if(selected){
      setLikeCount(selected.LikeCount);
    }
  },[selected])
  const [bookmarked, setBookmarked] = useState(false);
  const [reqclick, setReqClick] = useState(false);
  if(!selected){
    return <></>
  }
  return(
    <div onClick={()=>{
      setSelected("")
    }} className="tw-fixed tw-inset-0 tw-bg-black/50 tw-z-50 tw-cursor-pointer tw-overflow-y-scroll tw-pt-[60px] tw-flex tw-justify-center tw-items-center">
      <div onClick={(e)=>{e.stopPropagation();}} className="tw-w-full tw-max-w-min sm:tw-max-w-max tw-mx-auto tw-my-8 tw-px-0 tw-cursor-default tw-shadow-2xl tw-rounded-xl tw-overflow-hidden tw-relative">
        <div className="tw-absolute tw-top-0 tw-right-0 tw-z-[45] tw-h-7 tw-m-3 hover:tw-scale-110 tw-duration-300 tw-cursor-pointer">
          <img onClick={(e)=>{
            e.stopPropagation();
            setBookmarked(!bookmarked);
          }} src={bookmarked?bookmarkFilled:bookmarkBlank} className="tw-h-full tw-w-full tw-object-contain"/>
        </div>
        <div className="tw-absolute tw-top-[31%] sm:tw-top-[47%] tw-right-0 tw-z-[45] tw-h-7 tw-m-3 hover:tw-scale-105 tw-duration-300">
          <button onClick={(e)=>{
            e.stopPropagation();
            setReqClick(!reqclick);
          }} className={` tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-sm tw-font-semibold hover:tw-bg-[#5d51e1] ${reqclick?"tw-scale-90 tw-bg-slate-500":"tw-bg-[#4338ca]"}`}>Request<span className={`${reqclick?"tw-inline":"tw-hidden"}`}>ed</span></button>
        </div>
        <motion.div layoutId={`card-${selected.ProjectID}`} className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <img src={selected.Thumbnail}/>
        </motion.div>
        <motion.div initial={{opacity:0,y:50}} animate={{
          opacity:1,
          y:0
        }} transition={{
          duration:0.5
        }} className="tw-bg-[#dfd2e1] tw-w-[300px] sm:tw-w-[500px] tw-px-4 tw-py-2">
          <div className="tw-text-2xl tw-font-bold">{selected.ProjectName}</div>
          <div className=" tw-text-sm tw-py-2 tw-h-[100px] tw-overflow-y-scroll">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {selected.ProjectDescription}
          </div>
          <div className="tw-h-[35px] sm:tw-h-[50px] tw-overflow-y-scroll tw-pt-3">
            {selected.Tags.map((tag)=>{
              return(
                <div className="tw-inline-block tw-mr-2 tw-bg-[#020049] tw-text-white tw-rounded-xl hover:tw-bg-[#2420ab] tw-text-[13px] tw-py-[1px] tw-px-[15px] tw-shadow-lg tw-cursor-pointer" key={tag}>{tag}</div>
              )
            })}
          </div>
          <div>
            <div className="tw-flex tw-justify-end tw-items-center tw-mt-2">
              <div className="tw-flex tw-items-center tw-relative tw-gap-2">
                <span className="tw-absolute tw-bg-[#81e8e8] tw-h-4 tw-font-bold tw-w-4 tw-flex tw-justify-center tw-items-center tw-rounded-full tw-bottom-0 tw-left-0 tw-translate-x-3 tw-translate-y-1 hover:tw-scale-110 tw-cursor-pointer">{selected.ActiveMembers}</span>
                <img src={user} className="tw-h-5 tw-w-5 tw-mr-2 tw-cursor-pointer"/>
                <div className="tw-text-sm tw-font-semibold">{selected.Author}</div>
              </div>
              <div className="tw-flex tw-items-center">
                <img onClick={(e)=>{
                    e.stopPropagation();
                    setLiked(!liked);
                    if(liked){
                      setLikeCount(likeCount-1);
                    }
                    else{
                      setLikeCount(likeCount+1);
                    }
                  }} src={liked?likedark:like} className="tw-h-5 tw-w-5 tw-mr-2 tw-cursor-pointer hover:tw-scale-125 tw-duration-300"/>
                <div className="tw-text-sm tw-font-semibold">{likeCount}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Modal