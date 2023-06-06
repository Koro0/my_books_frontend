import { useForm, SubmitHandler } from "react-hook-form";

interface FormInput {
  Email:string,
  Password:string,
  Username:string
}
export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormInput>();

  console.log(watch("Password", "Email",)); // you can watch individual input by pass the name of the input

  const onSubmit:SubmitHandler<FormInput> = data => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>Email</label>
      <input {...register("Email", {required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g})} defaultValue="" />
      {errors.Email && <p>Email is required</p>}
      <label>Password</label>
      <input
        {...register("Password", { required: true, maxLength: 10 })}
      />
      {errors.Password && <p>Password is required</p>}
      <label>Pseudo :</label>
      <input
        {...register("Username", { required: true, maxLength: 20 })}
      />
      {errors.Password && <p>User Name is required</p>}
      <input type="submit" />
    </form>
  );
}
