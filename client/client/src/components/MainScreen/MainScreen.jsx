import { Link } from "react-router-dom"
export default function MainScreen(){

return(
    <>


   <div>
      <h2>Select a course</h2>
      <div className="flex gap-4">
        <Link to="banking"><button>banking</button></Link>
           <Link to="crypto"><button>crypto</button></Link>
        <Link to="stocks"><button>stocks</button></Link>
      </div>
    </div>

    </>
)
    
}