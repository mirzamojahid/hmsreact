import React from 'react'
import UseWindowSize from '../UseWindowSize'

function HallFacilities() {
      const [innerHeight]=UseWindowSize();

  return (
    <div className='center' style={{height:innerHeight-70}} >

        
<section id="inroom_facility_main">
           <div className="row">
                <div className="inroom_box">
                    <h2 className="section_sub_heading">Smart Living Scope</h2>
                    <p className="p_text page_text">Students at Hall will have access to the Library, the same community, stay closer to the faculty and students. So our research says they usually get higher grades than others.</p>
                </div>

                <div className="inroom_box">
                    <h2 className="section_sub_heading">Close to the className</h2>

                    <p className="p_text page_text">If you are planning to live in Hall then you are just 10 minutes away from your className, close to your library to study, Green Garden or Hall Dining, Sports Zone, Gymnasium and with friends.</p>
                </div>

                <div className="inroom_box">
                    <h2 className="section_sub_heading">Leadership Development</h2>

                    <p className="p_text page_text">When you are living in the Hall you are automatically developing your lifestyle, getting involved in the community which helps in developing the leadership capacity.</p>
                </div>

                <div className="inroom_box">
                    <h2 className="section_sub_heading">Cost-Effective Living Option</h2>

                    <p className="p_text page_text">Living in a Hall saves the cost if you compare it with other living options. You will find all services together in the single Hall cost. Make your life easy.</p>
                </div>

                <div className="inroom_box">
                    <h2 className="section_sub_heading">Enjoying the Wireless Life</h2>

                    <p className="p_text page_text">In your hall life, you will enjoy the Cable TV and WIFI Connections. So you can enjoy the Wireless Life at the Hall, Lab, and Library Compound.</p>
                </div>

                <div className="inroom_box">
                    <h2 className="section_sub_heading">Safety & Security</h2>

                    <p className="p_text page_text">The safety of the students is the best priority. We have CCTV surveillance, 24/7 staff for any support and services.</p>
                </div>
            </div>


      
    </section>
    
    </div>
  )
}

export default HallFacilities