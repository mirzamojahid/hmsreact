import React, { useEffect } from 'react'
import {useState} from 'react'
import './styles/Layout.css'
import { fetchToken } from "../../src/Auth";
import { createSearchParams,useNavigate } from 'react-router-dom';

//export const  baseUrl ="https://mirzamojahid.pythonanywhere.com";
export const  baseUrl ="http://127.0.0.1:8000";

export default function Body(props) {

const [hall, setHall]=useState([]);

const [checkin,setCheckin]=useState();
const [checkout,setCheckout]=useState();

const navigate = useNavigate();
const [seat, setSeat]=useState([]);



const fetchData=()=>{

  const token =fetchToken()

fetch(baseUrl+"/hall", {
  
    method: "GET",
    headers: new Headers({
      Authorization: "Token " + token,
      "Content-Type": "application/x-www-form-urlencoded",
    }),


    
  }).then((res)=>{
    return res.json()
  }).then((datax)=>{
console.log(datax);
setHall(datax);
  })


}
useEffect(() => {
  fetchData();
}, []);


const ccc=()=>{
  const token =fetchToken()

fetch(baseUrl+"/seat", {
  
method: "POST",
body: JSON.stringify({ check_in: checkin,check_out:checkout }) ,
headers: { 'Content-Type': 'application/json' ,
"Authorization": "Token " + token,
},



}).then((res)=>{
return res.json()
}).then((datax)=>{
console.log(datax);
setSeat(datax);
});

}




  return (
    <div className='content' style={{height:props.height-63}} > 
  
  <div className='searchBox'>
     <div >
<input value={checkin} className='date' type='date' onChange={(event)=>{
    const userValue = event.target.value;
setCheckin(userValue);
}} ></input></div>
     <div>
      
<input  className='date' type='date'  onChange={(event)=>{
    const userValue = event.target.value;
setCheckout(userValue);
}} ></input></div>
<div className='searchBtn' onClick={()=>{
  if(checkin!==undefined && checkout!==undefined){
    ccc(checkin,checkout);
  
  }
}

  }>Seat Search</div>
  </div>


<div className='searchResult'>

{seat.map((el)=>{
  return <div className='seatItem' key={el.id} onClick={()=>{
    console.log(el.id);
   return navigate({
    pathname:"/booking",

    search: createSearchParams({
      seatid:el.id,
    hallName:el.rooms.hallName.hallName,
    category:el.rooms.hallName.category,
    loaction:el.rooms.hallName.loaction,
    room: el.rooms.room_number,
    floor: el.rooms.floor,
    max_person: el.rooms.max_person,
    side: el.side,
    checkin:checkin,
    checkout:checkout,
   }).toString()});
  }}>
  <li>Side: {el.side}</li>
  <li>Room No. {el.rooms["room_number"]}</li>
  <li>Max Person: {el.rooms["max_person"]}</li>
  <li>Floor: {el.rooms["floor"]}</li>
  <li>{el.rooms['hallName']["hallName"]}</li>
  <li>Category: {el.rooms['hallName']["category"]}</li>
  <li>{el.rooms['hallName']["loaction"]}</li>
  </div>
})}


</div>



</div>
  )
}



/*

    <h1>Hostel Management System</h1>
      <h3>Author:  Mirza Mojahid</h3>
      <p>Api: <a href='https://mirzamojahid.pythonanywhere.com'>https://mirzamojahid.pythonanywhere.com</a></p>
   <select className='select' 
   
  >
    {hall.map((data)=>{
      return <option  className='option' key={data.id}  value={data.id}>{data.hallName}</option>
    })}
</select> 

*/