import {ArticleInterface} from "./interfaces.tsx";
import clsx from "clsx";

export default function Article(props: ArticleInterface) {
  const {id, content, title, add} = props
  return (
    <div className={clsx("article", add && "addArticle")}>
      <h2 className={"title"}>{title}</h2>
      <p className={"content"}>{content}</p>
      <p className={"article-footer"}>article id: {id}</p>
    </div>
  )
}