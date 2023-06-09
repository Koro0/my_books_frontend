import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormInput {
  email:string,
  password:string,
  pseudo:string
}
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>();

  const onSubmit:SubmitHandler<FormInput> =async (data) =>{
    await axios.post("http://localhost:3500/api/users/register",data, {
       headers: {
          'Content-Type': 'application/json'
          },
      })
      .then(()=> console.log('Account was created'))
      .catch(()=> console.log('error register'));
      console.log(JSON.stringify(data));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>Email</label>
      <input {...register("email", {required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g})} defaultValue="" />
      {errors.email && <p className="errorMsg">Email is required</p>}
      <label>Password</label>
      <input
        {...register("password", { required: true,  minLength: 8, maxLength: 20 })}
      />
      {errors.password && <p className="errorMsg">Password is required</p>}
      <label>Pseudo :</label>
      <input
        {...register("pseudo", { required: true, minLength: 5, maxLength: 20 })}
      />
      {errors.pseudo && <p className="errorMsg">User Name is required</p>}
      <input type="submit" />
    </form>
  );
}
