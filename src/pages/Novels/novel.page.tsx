import ShowNovel from "../../components/Novels/ShowNovel.component";
import Chapter from "../../components/Novels/Chapter.component";
export default function Novel() {
    return (
      <>
        <section>
          <ShowNovel />
        </section>
        <section>
          <Chapter  />
        </section>
      </>
    )
}