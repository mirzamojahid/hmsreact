import React from 'react'
import UseWindowSize from '../UseWindowSize'
function RoomFacilities() {
    const [innerHeight]=UseWindowSize();

  return (
    <div className='center' style={{height:innerHeight-60}}>
      

   <section id="inroom_facility_main">
      
            <div className="row">
               
                    <div className="inroom_box">
                        <h2 className="section_sub_heading">In-room Amenities</h2>
    
                             <ul>
                                <li>One Bed per Student shall be offered</li>
                                <li>Fully furnished rooms with beds &amp; underbed drawers</li>
                                <li>Study tables &amp; Chair</li>
                                <li>Tube lights &amp; LED, Fan</li>
                                <li>Dustbin in each room</li>
                            </ul>
                    

         
                </div>

               
                    <div className="inroom_box">
                        <h2 className="section_sub_heading">Self Help Amenities</h2>
           <ul>
                                <li>Laundry Service</li>
                                <li>Filter Water facility to be provided</li>
                                <li>Medical facility available with first aid/ provided to sick Residents</li>
                                <li>Doctor on call number(s) to be shared with the students</li>
                                <li>Dining area</li>
                            </ul>
               
                 
                </div>

               
                    <div className="inroom_box">
                        
                        <h2 className="section_sub_heading">Security</h2>
    
                            <ul>
                                <li>CCTV Cameras</li>
                                <li>Security Guard</li>
                                <li>24 Hour Security (incl CCTV)</li>
                            </ul>
                     
                    
                </div>

               
                    <div className="inroom_box">
                        
                        <h2 className="section_sub_heading">Housekeeping</h2>
    
                       
                            <ul>
                                <li>Rooms</li>
                                <li>Washrooms</li>
                                <li>Common areas are cleaned on a daily basis</li>
                                <li>Regular pest controlled services</li>
                            </ul>
                        
                    </div>
              

               
                    <div className="inroom_box">
                        
                        <h2 className="section_sub_heading">Electricity</h2>
    
                    
                            <ul>
                                <li>Electricity Facility in each room</li>
                                <li>Generator facility 24/7</li>
                            </ul>
                 
                    </div>
             

               
                    <div className="inroom_box">
                        
                        <h2 className="section_sub_heading">Broadband & WiFi</h2>
    
                       
                            <ul>
                                <li>High speed internet for each students</li>
                            </ul>
                   
                    </div>
                </div>

               
                    <div className="inroom_box">
                        
                        <h2 className="section_sub_heading">Entertainment</h2>
    
                            <ul>
                                <li>Mini lounge area with sitting arrangement</li>
                                <li>Common TV</li>
                                <li>Indoor games like carrom , chess, table tennis etc.</li>
                            </ul>
               
                    </div>
            
         
    </section>
  
    </div>
  )
}

export default RoomFacilities