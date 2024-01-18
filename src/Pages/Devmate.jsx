import mock_data from "../assets/MOCK_DATA.json";

function Devmate() {
  return (
    <div className="overflow-x-hidden">
      <div className="d-flex justify-content-around">
        <h1 className="p-2 flex-fill">Devmate</h1>
        <div className = "p-2 flex-fill">
          <input type="search" id="search" placeholder="Search Projects" />
        </div>
        <button className="p-2 flex-fill btn btn-primary">Create Project +</button>
      </div>
      <div className="container">
        {mock_data.map((item)=>{
          return (
            <div className="col">
             {/* <div className="col"> */}
            <div key={item.project_id} className="card" style = {{width:'33%'}}>
              <img src={item.thumbnail} alt="" className="card-img-top"/>
              <section className="card-body">
                <h1 className="card-title">{item.project_name}</h1>
                <p className="card-text">{item.project_description}</p>
                <section className="h-[50%] bg-black text-white w-full">
                  {item.tags.map((tag)=>{
                    return (
                      <span key={tag}>{tag}</span>
                    )
                  })}
                </section>
              </section>
            </div>
            {/* </div>  */}
            </div>
          )
        })}
      </div>
      
      <div className="h-[100px] w-full bg-[#FAFAFA]"></div>
    </div>
  )
}

export default Devmate