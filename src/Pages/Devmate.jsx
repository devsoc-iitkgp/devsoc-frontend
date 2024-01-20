import { useEffect, useState } from "react"
import List from "./components/List"
import Modal from "./components/Modal"
import Subnav from "./components/Subnav";
import datas from "./components/data.json";

function Devmate() {
  const [selected, setSelected] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState(datas)
  const [sorrt,setSort] = useState(null);
  const [searchval, setSearch] = useState("");
  useEffect(()=>{
    if(sorrt === 1){
      const sortedData = [...data].sort((a,b)=>{
        return b.ButtonClicks - a.ButtonClicks
      })
      setData(sortedData)
    }
    if(sorrt === 2){
      const sortedData = [...data].sort((a,b)=>{
        return a.ProjectName.localeCompare(b.ProjectName)
      })
      setData(sortedData)
    }
    if(sorrt === 3){
      const sortedData = [...data].sort((a,b)=>{
        return b.ProjectName.localeCompare(a.ProjectName)
      })
      setData(sortedData)
    }
    if(sorrt === 4){
      const sortedData = [...data].sort((a,b)=>{
        return new Date(b.Date) - new Date(a.Date)
      })
      setData(sortedData)
    }
    if(sorrt === 5){
      const sortedData = [...data].filter((item)=>item.Bookmarked === true)
      setData(sortedData)
    }
    if(sorrt === 0){
      setData(datas)
    }
  },[sorrt,data])

  useEffect(()=>{
    if(searchval){
      const filteredData = datas.filter((item)=>{
        let nameFlag = false;
        let tagFlag = false;
        if(item.ProjectName.toLowerCase().includes(searchval.toLowerCase())){
          nameFlag = true;
        }
        if(item.Tags.forEach((tag)=>{
          if(tag.toLowerCase().includes(searchval.toLowerCase())){
            tagFlag = true;
            return;
          }
        }));
        if(nameFlag || tagFlag){
          return true;
        }
      })
      setData(filteredData)
    }else{
      setData(datas)
    }
  },[searchval])

  return (
    <div onClick={()=>{
      setIsOpen(false)
    }} className="tw-h-full tw-w-full tw-mt-[100px]">
      <Subnav isOpen={isOpen} setIsOpen={setIsOpen} setSort={setSort} setSearch={setSearch} searchval={searchval}/>
      <List setSelected={setSelected} data={data}/>
      <Modal selected={selected} setSelected={setSelected}/>
    </div>
  )
}

export default Devmate