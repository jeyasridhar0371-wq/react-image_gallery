import ReactDOM from "react-dom/client"
import Imagecard from "./imagecard"
import { item } from "./imagecard"

const root = ReactDOM.createRoot(document.getElementById("root"))



root.render(
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",backgroundColor:"gray"}}>
      {
        item.map(function(els) {
         return (<Imagecard imgName={els.imgName} imgSrc={els.imgSrc}></Imagecard>)
      })
      }
    </div>

)