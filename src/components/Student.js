
import React, { useEffect, useState} from 'react'
import { fetchToken } from "../Auth";
import '../../src/components/styles/Student.css'
import search from '../../src/search.svg'
import Add from '../../src/add-button.png'
import { baseUrl } from './Body';
import { useForm } from "react-hook-form";

export const arraySearch = (array, keyword) => {
  const searchTerm = keyword.toLowerCase();

  return array.filter(value => {
      return value.name.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
      value.address.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
      value.gender.toLowerCase().match(new RegExp(searchTerm, 'g'))
  });
}


function Student(props) {

  const [popup,setPop]=useState(false)
  const [inputValue, setInputValue]=useState('');
  const closePopup=()=>{
    setPop(false)
}

const addStudent=(name,student_id ,email,phone,gender,dob,department,father_name,mother_name,address)=>{
  const token =fetchToken();

fetch(baseUrl+"/student", {
  method: "POST",
  body: JSON.stringify({ name: name,father_name:father_name,mother_name:mother_name,gender:gender,dob:dob,student_id:student_id ,email:email,phone:phone,department:department,address:address}) ,
  headers: { 'Content-Type': 'application/json' ,
  "Authorization": "Token " + token,
  },

}).then((res)=>{
  return res.json()
}).then((datax)=>{

if(datax.message){
  return alert("Not valid data insert")
}
setPop(false);
fetchData();
})

}
  const onChangedHandler= (value)=>{

   setInputValue(value);

  }
  const [isFocuss,setIsFocuss]= useState(false);

  const focusCheck=()=>{
    setIsFocuss(!isFocuss)
    console.log(isFocuss);
  }

  const [user, setUser]=useState([]);
  const fetchData=()=>{
    const token =fetchToken()
 fetch(baseUrl+"/student", {
    
      method: "GET",
      headers: new Headers({
        Authorization: "Token " + token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      
    }).then((res)=>{
      return res.json()
    }).then((datax)=>{
 
setUser(datax);

    })
  }
  useEffect(() => {
    fetchData();
  }, []);

const addStudentPopup=()=>{
  setPop(true);
}


const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

const onSubmit = (data) => {
const name = data.name;
const gender = data.gender;
const student_id = data.student_id;
const email = data.email;
const department = data.department;
const phone = data.phone;
const dob = data.dob;
const father_name = data.father_name;
const mother_name = data.mother_name;
const address = data.address;
if(name !==null || student_id !==null || dob !==null || gender !==null || phone !==null || email !==null || department !==null || mother_name !==null || father_name !==null || address !==null){


  addStudent(name,student_id ,email,phone,gender,dob,department,father_name,mother_name,address);
}

};
  return (
    <div className='sidebar' style={{height:"100%"}}>

      <div className='flex'>
    
        <div className='flex' style={{padding:"20px 0px 0px 20px"}}>

        <div style={{backgroundColor:"white", boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px"
   , borderRadius: "8px", justifyContent: "center",display: "flex",marginRight: "20px",alignItems: "center",border:isFocuss?"1px solid blue":"none"}} >
        <img style={{marginLeft:"10px",alignItems:"center"}}  alt="hh" src={search} width={20} height={20}></img>
         <span style={{width: "1px",backgroundColor:"black",height:"20px",marginLeft:"5px"}}></span>
        <input className='inputF' onFocus={focusCheck}  onBlur={focusCheck} id="search" placeholder='Student ID | Name'  style={{width: "100%",height:"40px"}} onChange={(e)=>{console.log(e.target.value)
        onChangedHandler(e.target.value)
        }}></input>

        </div>

        <div className='addS' >
          <span>
          Add Student
          </span>

          <img  onClick={()=>{
            addStudentPopup();
          }} style={{marginLeft:"10px",alignItems:"center",cursor:"pointer"}}  alt="hh" src={Add} width={40} height={40}></img>

        </div>




      </div>
      </div>



   <div>
   <div>
                {
                    popup?
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                 <p>Student Information Add</p>
                                <p className='popup-close' onClick={closePopup}>X</p>
                            </div>
                            <form  onSubmit={handleSubmit(onSubmit)}>
                            <div className='popupBody'>
                            {errors.name && <span style={{ color: "red" }}>*</span>}
                           
                              <input  {...register("name", { required: true })} className='select'  placeholder='Student Name'></input>
                                <select  {...register("gender", { required: true })} className='select' 
   >
     <option  className='option' value="Male">Male</option>
     <option  className='option' value="Female">Female</option>
     
 </select> 
<div>
{errors.father_name && <span style={{ color: "red" }}>*</span>}
                            
                            <input  {...register("father_name", { required: true })} className='select' placeholder='Father name'></input>
                         
                            <input   {...register("mother_name", { required: true })} className='select' placeholder='Mother name'></input>
                            {errors.mother_name && <span style={{ color: "red" }}>*</span>}
                           
</div>


 <div>
                              {errors.student_id && <span style={{ color: "red" }}>*</span>}
                              <input  {...register("student_id", { required: true })} className='select'  placeholder='Student ID'></input>

<select  {...register("department", { required: true })} className='select'>
<option  className='option' value="CSE">CSE</option>
<option  className='option' value="EEE">EEE</option>
<option  className='option' value="Civil">Civil</option>
<option  className='option' value="English">English</option>
<option  className='option' value="Law">Law</option>
<option  className='option' value="Pharmacy">Pharmacy</option>
<option  className='option' value="NFE">NFE</option>
<option  className='option' value="TE">TE</option>
<option  className='option' value="IE">IE</option>
<option  className='option' value="BTHM">BTHM</option>
 </select> 
                              </div>
                              {errors.email && <span style={{ color: "red" }}>*</span>}
                              <input type='email' {...register("email", { required: true })}  className='select'  placeholder='Student Email'></input>
                            <input  {...register("dob", { required: true })} className='select' type="date"></input>
                              {errors.dob && <span style={{ color: "red" }}>*</span>}
                             
                             <div>
                               
                             {errors.phone && <span style={{ color: "red" }}>*</span>}
                            
                            <input  {...register("phone", { required: true })} className='select' type="number" placeholder='Phone'></input>
                            <input  {...register("address", { required: true })} className='select' placeholder='Address'></input>
                            {errors.address && <span style={{ color: "red" }}>*</span>}
                           
                             </div>
                            </div>
                            <div className='popupSubmit'>
                            
                            <input className='select' type='submit'></input>
                          
                              </div>
                              </form>
                        </div>
                    </div>:""

                }
            </div>
    <hr></hr>

      {user.length>=0 &&  user.filter((filterx)=>{
        return inputValue.toLowerCase()===''?filterx:
        filterx.name.toLowerCase().includes(inputValue) || filterx.student_id.includes(inputValue);
      }).map((data)=>{
    return <li key={data.id} className="stdDiv" onClick={()=>{
     // setOnSelected(data.student_id);
      console.log("Child: "+data.id);

      props.data(data.id,data.student_id,data.name);

    }}>
      <span>{data.name} <br></br>{data.student_id}</span>
    
    </li>
  })}

      </div>
       

     
    </div>
  )
}

export default Student



