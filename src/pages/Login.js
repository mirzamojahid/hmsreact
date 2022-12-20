
import { useNavigate } from "react-router";
import { fetchToken } from "../../src/Auth";
import { setToken } from "../../src/Auth";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { baseUrl } from "../components/Body";



function Login() {
  const navigate = useNavigate();

  const login = (username , password) => {



    if ((username === "") & (password === "")) {
      return;
    } else {

      console.log(username);
      console.log(password);
      try{

    
fetch(baseUrl+"/auth0/login/", {
  method: "POST",
  body: JSON.stringify({ username: username,password:password }) ,
  headers: { 'Content-Type': 'application/json' },
}).then((res)=>{
  return res.json()
}).then((datax)=>{
//console.log(datax);
if(datax.non_field_errors){

  return alert("Something Wrong: "+datax.non_field_errors[0])
}
  setToken(datax.token);
  if (fetchToken().length ===40){
     navigate("/");
  }

})
}catch (errors){
  console.log(errors);
        }
    }
  };
useEffect(()=>{
  console.log(7879);
})
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
const username = data.username;
const password = data.password;
  if(username !==null || password !==null){
    login(username ,password);
}

};

useEffect(()=>{
  try{
    if(fetchToken().length===40){

      console.log(56789);
     return navigate("/");
    }
  }catch{

  }

})





  return (
    <>

<div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
      <p className="title">Login Form</p>

      <form classNameName="login-form"  onSubmit={handleSubmit(onSubmit)}>
        <input type="username" {...register("username", { required: true })} />
        {errors.username && <span style={{ color: "red" }}>
         *Username* is mandatory </span>}
        <input type="password" {...register("password",{ required: true })} />
        {errors.password && <span style={{ color: "red" }}>
         *Password* is mandatory </span>}
          <button>login</button>

      </form>

      <p className="message">Not registered? <span style={{color:"blue",cursor:"pointer"}} onClick={()=>{
            return navigate("/register")
          }} >Create an account</span></p>
      </div>
      </div>
    </>
  );
}
export default Login;