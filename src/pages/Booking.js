import React, { useEffect, useState } from 'react'
import {  useSearchParams } from 'react-router-dom'
import '../index.css'
import '../../src/components/styles/Layout.css'
import Student from '../components/Student';
import UseWindowSize from '../UseWindowSize'
import { fetchToken } from "../Auth";
import { baseUrl } from '../components/Body';

import { useNavigate } from "react-router";

export default function Booking(props) {
  const navigate = useNavigate();

//const [selectedData,setSelectedData] =useState({"name":"","student_id":"","id":""});
const [selectedData,setSelectedData] =useState({"name":"","student_id":"","id":""});
   
  const onSelectStudent=(selectedData,id,name)=>{
    console.log("Parent: "+selectedData);
    setSelectedData(
      {"name":name,"student_id":id,"id":selectedData}
      );

      }

 const [params]=useSearchParams();
 const [innerHeight]=UseWindowSize();
 const seatids=params.get("seatid");
 const checkin=params.get("checkin");
 const checkout=params.get("checkout");

 const addBooking=()=>{
  const token =fetchToken();
  console.log("seatids: "+seatids);
  fetch(baseUrl+"/booking", {
    method: "POST",
    body: JSON.stringify({student_id:selectedData.id,seats:seatids,check_in:checkin,check_out:checkout}) ,
    headers: { 'Content-Type': 'application/json',
    "Authorization": "Token " + token,

    },
  }).then((res)=>{

    return res.json()
  }).then((datax)=>{
     
  if(datax.message){
    return alert("Not valid data insert"+datax.errors)

  }else{
    return navigate("/");
    
  }

  
  })
  
  }
  
//const [dataSeat,setDataSeat]= useState({"seatId":"","hall":"","floor":"","room_number":"","side":"","category":"","loaction":""});
const [dataSeat,setDataSeat]= useState({});
 useEffect(()=>{
  var seatid=params.get("seatid");
  var hallName=params.get("hallName");
  var max_person=params.get("max_person");
  var room_number=params.get("room");
  var category=params.get("category");
  var loaction=params.get("loaction");
  var floor=params.get("floor");
  var side=params.get("side");
  var checkin=params.get("checkin");
  var checkout=params.get("checkout");

  const data={"seatId":seatid,
  "checkin":checkin,
  "checkout":checkout,
  "hall":hallName,
  "floor":floor,
  "room_number":room_number,
  "max_person":max_person,
  "side":side,
  "category":category,
  "loaction":loaction};
   setDataSeat(data);
   console.log(hallName);
 },[params])

  return (
    <div className='ContentBody' style={{height:innerHeight-63}}>
       
        <Student data={onSelectStudent}></Student>
        <div className='content'>
    
       <div className='seatdetails'>

          <div className='seatItem pd'>
  <li>Hall: {dataSeat.hall}</li>
  <li>Category:  {dataSeat.category}</li>
   <li>Room No: {dataSeat.room_number}</li>
   <li>Room Postion of Seat Side: {dataSeat.side}</li>
  <li>Max Person in Room: {dataSeat.max_person}</li>
  <li>Floor: {dataSeat.floor}</li>
  <li>Check-In:   {dataSeat.checkin}</li>
  <li>Check-Out:   {dataSeat.checkout}</li>
  <li>Location:    {dataSeat.loaction}</li>
  </div>

{/*         <div className='seatItem'>
  <li>Side: {el.side}</li>
  <li>Room No. {el.rooms["room_number"]}</li>
  <li>Max Person: {el.rooms["max_person"]}</li>
  <li>Floor: {el.rooms["floor"]}</li>
  <li>{el.rooms['hallName']["hallName"]}</li>
  <li>Category: {el.rooms['hallName']["category"]}</li>
  <li>{el.rooms['hallName']["loaction"]}</li>
  </div>  */}

        </div>

        {selectedData.id!==""?<div className='bookingSection'><p>Selected Student(Name,ID): {selectedData.name +" , "+selectedData.student_id}</p>
        <div  className='button' onClick={()=>{
          if(selectedData!==""){
            addBooking();
          }
        }}>
          Booking
        </div>
        </div>:""}

        </div>
    </div>
  )
}
