import Article from "../components/Article.tsx";
import {useEffect, useState} from "react";
import {ArticleInterface} from "../components/interfaces.tsx";
import {Link} from "react-router-dom";

export default function MainPage() {
  const [articles, setArticles] = useState<ArticleInterface[]>([]);
  useEffect(() => {
    const storage = localStorage.getItem('articles')
    setArticles(storage ? JSON.parse(storage) : [])
  }, [])
  const articlesElements = articles.map(el => (
    <Article id={el.id} title={el.title} content={el.content}/>
  ))

  return (
    <>
      <div className={"main"}>
        <Link to={"/add"}>
          <div className={"addContainer"}>
            <Article id={0} title={"Title"} content={""} add={true}/>
            <div className={"addButton"}>+</div>
          </div>
        </Link>
        {articlesElements}
      </div>
    </>
  )
}