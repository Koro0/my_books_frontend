import axios from "axios";
import {useContext} from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import ContextAdmin from "../Context/ContexteAdmin.component";

interface FormInput {
  email:string,
  password:string,
}
export default function Login() {
  const  {setIsAdmin} = useContext(ContextAdmin);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>();

  const onSubmit:SubmitHandler<FormInput> =async (data) =>{
    await axios.post("http://localhost:3500/api/users/login",data, {
       headers: {
          'Content-Type': 'application/json'
          },
      })
      .then((res)=> {
        localStorage.setItem('user', JSON.stringify(res.data.userId));
        localStorage.setItem('token', JSON.stringify(res.data.token));
        (!res.data.isAdmin ? setIsAdmin(false) : setIsAdmin(true)); 
        
      })
      .catch(()=> console.log('error login'));
      console.log(JSON.stringify(data));
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email : 
      </label>
      <input {...register("email", {required: true, pattern: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/i,})} defaultValue=""  />
      {errors.email && <p className="errorMsg">Email is required</p>}
      <label>Password : </label>
      <input {...register("password", { required: true,  minLength: 8, maxLength: 20 })}/>
      {errors.password && <p className="errorMsg">Email is required</p>}
      <input type="submit" value={"Connecter"} />
    </form>
  )
}
