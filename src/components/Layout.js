import React, { useEffect, useState } from 'react'
import Body from './Body'

import { Chart as ChartJS, ArcElement, Tooltip, Legend ,
  CategoryScale,
  LinearScale,
  BarElement,
 } from 'chart.js';
import { Doughnut,Bar } from 'react-chartjs-2';
import './styles/Layout.css'
import UseWindowSize from '../UseWindowSize'
import { fetchToken } from "../Auth";
import { baseUrl } from './Body';

ChartJS.register(ArcElement,  CategoryScale,
  LinearScale,
  BarElement, Tooltip, Legend);


  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
export default function Layout(props) {

   const [innerHeight]=UseWindowSize();

   const [summaryBar, setSummaryBar]=useState({
  
    labels: ["Hall","Room","Seat"],
    datasets: [
      {
       data: [0,0,0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
  
        ],
        borderWidth: 1,
      },

     
    ],
  });

   const [male, setMale]=useState(0);
   const [female, setFemale]=useState(0);

 
   const fetchData=()=>{
     const token =fetchToken()
    fetch(baseUrl+"/summary", {
       method: "GET",
       headers: new Headers({
         Authorization: "Token " + token,
         "Content-Type": "application/x-www-form-urlencoded",
       }),
       
     }).then((res)=>{
       return res.json()
     }).then((datax)=>{
      
      const {male_student,female_student,all}=datax;
      setMale(male_student);
      setFemale(female_student);
      let list =[];
      let i=0;
      for(i;i<all.length;i++){
        console.log(all[i].room);
        let randomColor = "#" + (Math.floor(Math.random()*16777215).toString(16));
        list.push({
           label:all[i].hall,
          data: [all[i].storey,all[i].room,all[i].total_seat],
          backgroundColor: randomColor,
         });
      }
      let y={
        labels: ["Storey","Room","Seat"],
        datasets: [
          ...list
        ],
      };
     setSummaryBar(y)


 console.log(datax);
     })
   }
   useEffect(() => {
     fetchData();

   },[]);



  
   const data = {
    labels: ["Male","Female"],
    datasets: [
      {
       data: [male, female],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],

        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        
        borderWidth: 1,
      },
    ],
  };

  return (
    
    <div>
           <div className='ContentBody' style={{height:innerHeight-63}} >
          <div className='sidebar'>

          <div className='graph' style={{width: "340px"}}>
             
             <Doughnut options={options} data={data} />
             <p>Gender Wise Student</p>
         </div>

          <div className='graph'>
           <Bar options={options} data={summaryBar} />
           <p>Hall Wise Total Seat and Room</p>
           </div>
          <div>
    </div>
              
{/*      <div>Availablity Seat Hall Wise
         
               {summary.all && summary.all.map(e=>{
                return <>{e.uid}
                <p>{e.hall}</p>
                <p>{e.room}</p>
                <p>{e.total_seat}</p>
              
                </>
               })}
              
            </div> */}

            </div>          
                       
                       <Body height={innerHeight}>
                        </Body>
                        </div>
                        </div>
           )}
