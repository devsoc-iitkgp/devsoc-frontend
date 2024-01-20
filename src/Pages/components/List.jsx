/* eslint-disable react/prop-types */
import {motion} from "framer-motion";
import { useEffect, useState } from "react";
import "./styles.css";
import like from "./assets/like.png"
import likedark from "./assets/like-dark.png"
import user from "./assets/user-dark.png"
import bookmarkBlank from "./assets/bookmark-blank.png";
import bookmarkFilled from "./assets/bookmark.png";

const Card = ({setSelected,card}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(card.LikeCount);
  const [bookmarked, setBookmarked] = useState(false);
  const [reqclick, setReqClick] = useState(false);
  return(
    <motion.div className="tw-bg-[#dfd2e1] tw-pb-0 tw-cursor-pointer tw-rounded-md tw-shadow-2xl"
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
      <div className="tw-w-[250px] tw-h-[350px] sm:tw-w-[350px] sm:tw-h-[400px] tw-bg-[#dfd2e] tw-mb-4 tw-relative">
        <div className="tw-absolute tw-top-0 tw-right-0 tw-z-[45] tw-h-7 tw-m-3 hover:tw-scale-110 tw-duration-300">
          <img onClick={(e)=>{
            e.stopPropagation();
            setBookmarked(!bookmarked);
          }} src={bookmarked?bookmarkFilled:bookmarkBlank} className="tw-h-full tw-w-full tw-object-contain"/>
        </div>
        <div className="tw-absolute tw-top-[42%] tw-right-0 tw-z-[45] tw-h-7 tw-m-3 hover:tw-scale-105 tw-duration-300">
          <button onClick={(e)=>{
            e.stopPropagation();
            setReqClick(!reqclick);
          }} className={` tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-sm tw-font-semibold hover:tw-bg-[#5d51e1] ${reqclick?"tw-scale-90 tw-bg-slate-500":"tw-bg-[#4338ca]"}`}>Request<span className={`${reqclick?"tw-inline":"tw-hidden"}`}>ed</span></button>
        </div>
        <div className=" tw-bg-slate-100 tw-absolute tw-top-0 tw-z-10 tw-h-[55%] tw-overflow-hidden tw-w-full tw-rounded-t-md tw-flex tw-justify-center tw-items-center">
          <motion.img layoutId={`card-${card.ProjectID}`}
          src={card.Thumbnail} className=" tw-h-full tw-bg-red-400 tw-shadow-xl tw-rounded-sm tw-object-cover"/>
        </div>
        <div className="tw-absolute tw-bottom-0 tw-h-[45%] tw-w-full tw-flex tw-flex-col">
          <div className="tw-pt-2 tw-px-4 tw-text-2xl tw-font-bold">{card.ProjectName}</div>
          <div className="tw-px-4 tw-text-sm cutoff tw-text-ellipsis">{card.ProjectDescription}<div className="tw-absolute tw-right-0 tw-top-0 tw-translate-y-[398%] tw-translate-x-[-20%] tw-bg-[#dfd2e1] tw-pl-5 tw-text-[#020049] tw-font-bold hover:tw-text-[#4338CA]">more details</div>
          </div>
          <div className="tw-bg-[#dfd2e1] tw-flex tw-flex-wrap tw-gap-2 tw-px-4 tw-pb-5 tw-py-3 tw-rounded-b-sm tw-w-full tw-h-[70%] tw-relative tw-overflow-y-scroll">
            {card.Tags.map((tag)=>{
              return (
                <div onClick={(e)=>{e.stopPropagation();}} className=" tw-h-min tw-bg-[#020049] tw-text-white tw-rounded-xl hover:tw-bg-[#2420ab] tw-text-[13px] tw-py-[1px] tw-px-[15px] tw-shadow-lg" key={tag}>{tag}</div>
              )
            })}
          </div>
        </div>
        <div className="tw-absolute tw-bottom-0 tw-right-0 tw-h-6 tw-flex tw-gap-2 tw-mr-4 tw-z-50">
          <span className="tw-absolute tw-bg-[#81e8e8] tw-h-4 tw-font-bold tw-w-4 tw-flex tw-justify-center tw-items-center tw-rounded-full tw-bottom-0 tw-left-0 tw-translate-x-3 tw-translate-y-1 hover:tw-scale-110">{card.ActiveMembers}</span>
          <img src={user} className="tw-h-full tw-w-full tw-object-contain"/>
          <img onClick={(e)=>{
            e.stopPropagation();
            setLiked(!liked);
            if(liked){
              setLikeCount(likeCount-1);
              }
            else{
              setLikeCount(likeCount+1);
            }
          }} src={liked?likedark:like} className="tw-h-full tw-w-full tw-object-contain hover:tw-scale-125 tw-duration-200 scrollbar tw-ml-2"/>
          <span className=" tw-font-extrabold">{likeCount}</span>
        </div>
      </div>
    </motion.div>
  )
}

function List({setSelected,data}) {
  useEffect(()=>{
  },[data])
  return (
    <div className="tw-p-4">
      <div className="tw-flex tw-flex-wrap tw-gap-16 tw-justify-center tw-items-center">
        {data.map((card)=>(
          <Card key={card.ProjectID} setSelected={setSelected} card={card}/>
        ))}
      </div>
    </div>
  )
}

export default List