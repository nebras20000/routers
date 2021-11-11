import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ADD from "./ADD";
import Filter from "./Filter";
import Moviecard from "./Moviecard";


const Movielist = () => {

 
  
  const [Arr, setArr] = useState([
    {
      title: "Game of thrones",
      description: "Genre : Fantasy",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61r-vt0bLZL._AC_SX522_.jpg",
      rate: "1",
    },
    {
      title: "Breaking bad",
      description:
        "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
      rate: "4",
    },
    {
      title: "hunter x hunter",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg",
      rate: "5",
    },

  ]);
  const [text, settext] = useState("")
  const [rating, setrating] = useState("")
  const filtertext=(text)=>{
settext(text)
  }
  const ratingChanged = (newRating) => {
    setrating(newRating)
  }
  const addfilm = (newfilm) => {
    setArr([...Arr,newfilm])
  }
  return (
    <div>
        <Filter filtertext={filtertext} ratingChanged={ratingChanged}/> 
    <div className="movies">
     
{Arr.filter(el=>el.title.includes(text) && el.rate>= rating).map(el =><Moviecard movie={el}/>)}
    </div>
    <ADD addfilm={addfilm}/>
    </div>
  );
};
export default Movielist;
