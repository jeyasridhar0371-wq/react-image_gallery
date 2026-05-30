import one from "./assets/img1.png"
import two from "./assets/img2.png"
import three from "./assets/img3.png"
import four from "./assets/img4.png"
import five from "./assets/img5.png"
import six from "./assets/img6.png"
import seven from "./assets/img7.png"
import eight from "./assets/img8.png"
var item = [
  {
    imgName:"julie's Rabbit Ears",
    imgSrc:one
  },
   {
    imgName:"The Innocent Look",
    imgSrc:two
  },
  {
    imgName:"Big Eyed Buggy",
    imgSrc:three
  },
   {
    imgName:"The Saint Doggo",
    imgSrc:four
  },
   {
    imgName:"Big Eye Buggy",
    imgSrc:five
  },
   {
    imgName:"The Innocent Look",
    imgSrc:six
  },
  {
    imgName:"The Saint Doggo",
    imgSrc:seven
  },
   {
    imgName:"Julie's Rabbit Ears",
    imgSrc:eight
  }
]
// Search section
function Imagecard(props){
  return(
   <div style={{display:"flex",flexDirection:"column",alignItems:"center",border:"1px solid black",padding:"10px",margin:"10px",backgroundColor:"white",flexBasis:"20%"}} >
    <img src={props.imgSrc} alt="not found" style={{width:"100%",height:"100%"}}></img>
    <h2>{props.imgName}</h2>
   </div>
  )
}

export default Imagecard
export {item}