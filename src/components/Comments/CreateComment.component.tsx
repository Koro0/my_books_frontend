import axios from "axios";
import {ShowCommentsProps, createComment} from '../Interface';
import { useForm, SubmitHandler } from "react-hook-form";


const CreateComment = (props:ShowCommentsProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<createComment>();

    const onSubmit:SubmitHandler<createComment> = async (data) => {
      await axios.post('http://localhost:3500/api/comment/'+props.categories+"/"+props.ID, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          Accept: 'application/json',}
      })
      .then(()=>console.log('create successfull a comment'))
      .catch(()=>console.log("error with comment request"));
      console.log(JSON.stringify(data));
    }

      return(
        <form onSubmit={handleSubmit(onSubmit)} >
            <label >Votre commentaire :</label>
            <input {...register("commentText", {required: true, minLength: 4})} />
            {errors.commentText && <p className="errorMsg">Aucun texte saisie</p>}
            <input type="submit" value={"Envoyer"} />
        </form>
      );
}
export default CreateComment