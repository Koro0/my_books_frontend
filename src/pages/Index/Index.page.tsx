import {useContext} from 'react'
import Context from '../../components/Context/ContextTheme.component';

export default function Index() {
    const  {darkMode}= useContext(Context);
  return (
    <div className={(!darkMode?"darkMode":"lightMode") + ' index'}>
        <h1>Bienvenue sur MyBooks, </h1>
        <p>
        Votre destination en ligne pour les amateurs de cuisine, 
          de cocktails et de littérature ! Notre site web est conçu pour les passionnés de ces trois domaines,
           offrant une expérience immersive et divertissante à tous les utilisateurs.
          </p> 
          <h2>Recettes de cuisine :</h2>
        <p>Plongez dans notre vaste collection de recettes de cuisine, allant des plats classiques aux créations innovantes. 
          Que vous soyez un chef expérimenté ou un novice en cuisine, notre site propose des recettes adaptées à tous les niveaux de compétence.<br/>
           Explorez différentes cuisines du monde entier, 
          découvrez des techniques de cuisine pratiques et trouvez l'inspiration pour préparer des repas délicieux et équilibrés.</p>
        <p>De nouvelle outil sera ajouter au fils du temps et des propositions.</p>
        <div>
        <h2>Cocktails :</h2>
        <p>Si vous êtes un amateur de cocktails, ne cherchez pas plus loin ! <br/>
        MyBooks vous offre une sélection de recettes de cocktails rafraîchissantes et sophistiquées.  <br/>
        Apprenez à mélanger les ingrédients avec style et découvrez les secrets des mixologues professionnels.  <br/>
        Que vous souhaitiez préparer des cocktails classiques ou essayer de nouvelles créations, notre site web vous guidera étape par étape pour créer des boissons savoureuses qui impressionneront vos invités lors de vos soirées.</p>
        <h2>Romans :</h2>
        <p>En plus de l'aspect culinaire, MyBooks vous invite à plonger dans le monde de la littérature.  <br/>
         Découvrez notre collection de romans captivants, allant des best-sellers aux chefs-d'œuvre méconnus.  <br/>
         Que vous soyez fan de romans d'amour, de thrillers palpitants ou de science-fiction épique, vous trouverez ici des recommandations de lectures, des critiques de livres et des discussions animées entre passionnés de littérature.</p>
        
        <p>Notre interface conviviale facilite la navigation à travers ces trois catégories, vous permettant de trouver rapidement les recettes de cuisine, les cocktails ou les romans qui vous intéressent.<br/>
           De plus, vous pouvez également interagir avec d'autres utilisateurs, partager vos propres recettes, cocktails préférés et recommandations de livres, et participer à des forums de discussion dynamiques.</p>
        </div>
    </div>
  )
}
