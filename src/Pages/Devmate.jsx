import { useState } from "react"
import List from "./components/List"
import Modal from "./components/Modal"

function Devmate() {
  const [selected, setSelected] = useState("")
  return (
    <div className="tw-h-full tw-w-full tw-mt-[100px]">
      <List setSelected={setSelected}/>
      <Modal selected={selected} setSelected={setSelected}/>
    </div>
  )
}

export default Devmate