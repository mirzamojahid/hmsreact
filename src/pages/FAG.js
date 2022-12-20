import React from 'react'
import UseWindowSize from '../UseWindowSize'

function FAG() {
  const [innerHeight]=UseWindowSize();

  return (
    <div>
    <div className="faq_main center" style={{height:innerHeight-60}}>
        <div className="row">
        
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="faq_question">
                <div
                  id="hall_facility"
                  className="facility_name tablink"
                  style={{ display: "block" }}
                >
                  <h2 className="section_heading faq_heading">Hall Facility (FAG)</h2>
                  <hr></hr>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Is the hall facility available on campus?
                    </h3>
                    <p className="p_text">
                      Yes, we have hall facility available on campus.
                    </p>
                  </div>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Is the AC room available in the hall?
                    </h3>
                    <p className="p_text">
                      No, we are not offering any AC room for the students yet.
                    </p>
                  </div>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Is there any water filter available in the hall?
                    </h3>
                    <p className="p_text">
                      Yes, we have the water filter service available for each
                      student.
                    </p>
                  </div>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Is hot drinking water available
                    </h3>
                    <p className="p_text">
                      Yes, students have access to hot drinking water in the hall.
                    </p>
                  </div>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Can students stay in the hall for 15 days for trial?{" "}
                    </h3>
                    <p className="p_text">
                      No, we are not offering any trial period in the hall.
                    </p>
                  </div>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Can students keep their luggage in the hall during vacation
                      time?{" "}
                    </h3>
                    <p className="p_text">
                      Yes, students can keep their luggage in the hall during their
                      vacation time.
                    </p>
                  </div>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      How close are accommodation options to campus?
                    </h3>
                    <p className="p_text">All halls are on the campus premises.</p>
                  </div>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Can I take a tour of accommodation options?
                    </h3>
                    <p className="p_text">Yes</p>
                  </div>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Is there any accommodation for couples?
                    </h3>
                    <p className="p_text">No</p>
                  </div>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Can I bring a car/bike?
                    </h3>
                    <p className="p_text">Yes</p>
                  </div>
                </div>
                <div id="in-room_facility" className="facility_name tablink">
                  <h2 className="section_heading faq_heading">In-room Facility</h2>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      What is the room capacity?
                    </h3>
                    <p className="p_text">
                      Four students will be living in each room.
                    </p>
                  </div>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Are the necessary furniture's available in the room?
                    </h3>
                    <p className="p_text">
                      Yes, necessary furniture's are provided for each student in the
                      room
                    </p>
                  </div>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      What is the room size?
                    </h3>
                    <p className="p_text">Each room is 300 Square Feet in size.</p>
                  </div>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      In case any valuable items are lost from the room, will the
                      authority pay for that?
                    </h3>
                    <p className="p_text">No.</p>
                  </div>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Is the laundry facility available?
                    </h3>
                    <p className="p_text">
                      Yes, the laundry facility is available with other in-room
                      services.
                    </p>
                  </div>
                </div>
                <div id="medical_facility" className="facility_name tablink">
                  <h2 className="section_heading faq_heading">Medical Facility</h2>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Is the medical facility available on the campus?
                    </h3>
                    <p className="p_text">
                      Yes, we have medical facilities available on campus.
                    </p>
                  </div>
                </div>
                <div id="power_supply" className="facility_name tablink">
                  <h2 className="section_heading faq_heading">Power Supply</h2>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Is there electricity available in the hall?
                    </h3>
                    <p className="p_text">Yes.</p>
                  </div>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Is there any generator at the hall in case of load shedding?
                    </h3>
                    <p className="p_text">Yes.</p>
                  </div>
                </div>
                <div id="wifi_internet" className="facility_name tablink">
                  <h2 className="section_heading faq_heading">Wifi &amp; Internet</h2>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Is the Wi-Fi facility available in the hall?
                    </h3>
                    <p className="p_text">
                      Yes, 24/7 high-speed Wi-Fi facility is available in the hall.
                    </p>
                  </div>
                </div>
                <div id="admission_facility" className="facility_name tablink">
                  <h2 className="section_heading faq_heading">Admission</h2>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Can students book a seat from home?
                    </h3>
                    <p className="p_text">
                      Yes. Students can book seat from home online using{" "}
                      <a href="hall-portal.html">Hall Portal</a>
                    </p>
                  </div>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Can the students select the room and Hall?
                    </h3>
                    <p className="p_text">No.</p>
                  </div>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Who is eligible to apply for student accommodation?
                    </h3>
                    <p className="p_text">Students parents or local guardian.</p>
                  </div>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      When can I apply for accommodation?
                    </h3>
                    <p className="p_text">After university admission.</p>
                  </div>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Can I apply for accommodation before I know I am accepted to the
                      University?
                    </h3>
                    <p className="p_text">No.</p>
                  </div>
                  <div className="faq_box">
                    <h3 className="section_sub_heading faq_sub_heading">
                      Will I get a refund if I cancel my contract?
                    </h3>
                    <p className="p_text">No.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </div>
  )
}

export default FAG