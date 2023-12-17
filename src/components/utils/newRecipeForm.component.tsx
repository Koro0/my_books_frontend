import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { FormData } from '../Interface';

export default function NewRecipeForm() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('portion', data.portion);
    formData.append('time', data.time);
    formData.append('ingredientList', JSON.stringify(data.ingredientList));
    formData.append('methodList', JSON.stringify(data.methodList));
    formData.append('image', data.image[0]); // 'image' est le nom du champ du fichier

    try {
      const response = await axios.post(
        'http://localhost:3000/api/recipe',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Réponse de création de recette :', response.data);
    } catch (error) {
      console.error('Erreur lors de la création de recette :', error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title')} placeholder="Title" />
      <input {...register('description')} placeholder="Description" />
      <input {...register('portion')} placeholder="Portion" />
      <input {...register('time')} placeholder="Time" />

      {/* Exemple d'input pour les ingrédients */}
      <input
        {...register('ingredientLists.name')}
        placeholder="Ingredient 1 Name"
      />
      <input
        {...register('ingredientList.quantity')}
        placeholder="Ingredient 1 Quantity"
      />

      {/* Exemple d'input pour les méthodes */}
      <input {...register('methodList.stepNumber')} placeholder="Step" />
      <input {...register('methodList.description')} placeholder="Step" />

      <input {...register('image')} type="file" />

      <input type="submit" />
    </form>
  );
}
