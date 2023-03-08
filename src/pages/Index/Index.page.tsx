import {useContext} from 'react'
import Context from '../../components/Context/Context.component';

export default function Index() {
    const  {darkMode}= useContext(Context);
  return (
    <div className={!darkMode?"darkMode":"lightMode"}>
        <h1>Bienvenu sur mon site</h1>
        <p>Mon site est dédié au recette de cuisine et la lecture de roman.</p>
        <p>De nouvelle outil sera ajouter au fils du temps et des propositions.</p>
        <div>
        <h2>Organisation : </h2>
        <p>Nous aurons des recettes classaient dans different catégorie dans le future</p>
        <p>Ca sera de la même manièrepour les romans</p>
        </div>
    </div>
  )
}
