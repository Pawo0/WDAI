import {useParams} from "react-router-dom";
import {ArticleInterface} from "../components/interfaces.tsx";
import SingleArticle from "../components/SingleArticle.tsx";

export default function ArticlePage() {
  let params = useParams()
  const storage = localStorage.getItem("articles")
  const articles: ArticleInterface[] = storage ? JSON.parse(storage) : []
  const {id, title, content} = articles.filter(el => String(el.id) === params.id)[0]

  return (
    <SingleArticle id={id} title={title} content={content} />
  )
}