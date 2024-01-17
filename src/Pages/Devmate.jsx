import mock_data from "../assets/MOCK_DATA.json";

function Devmate() {
  return (
    <div className=" overflow-x-hidden">
      <div className="bg-[#FAFAFA] h-[80px] flex justify-between items-center m-auto px-4">
        <h1 className="text-4xl">Devmate</h1>
        <div>
          <input type="search" id="search" placeholder="Search Projects" />
        </div>
        <button className="bg-[#020049] text-white font-semibold py-3 px-2 rounded-xl">Create Project +</button>
      </div>
      <div className="h-auto w-screen flex flex-wrap justify-center items-center gap-10 mt-8 bg-[#FAFAFA]">
        {mock_data.map((item)=>{
          return (
            <div key={item.project_id} className=" h-[500px] max-h-[500px] w-1/4 overflow-hidden border-2 border-[#060b11] border-solid rounded-xl relative">
              <img src={item.thumbnail} alt="" className=" w-full object-contain absolute z-10 top-0"/>
              <section className="absolute bottom-0 h-[40%] bg-[#dfd2e1] px-4 py-2 z-20 overflow-hidden">
                <h1 className=" text-2xl mb-2">{item.project_name}</h1>
                <p className="">{item.project_description}</p>
                <section className="h-[50%] bg-black text-white w-full">
                  {item.tags.map((tag)=>{
                    return (
                      <span key={tag}>{tag}</span>
                    )
                  })}
                </section>
              </section>
            </div>
          )
        })}
      </div>
      <div className="h-[100px] w-full bg-[#FAFAFA]"></div>
    </div>
  )
}

export default Devmate