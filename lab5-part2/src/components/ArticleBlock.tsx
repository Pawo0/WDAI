import {ArticleInterface} from "./interfaces.tsx";
import clsx from "clsx";

export default function ArticleBlock(props: ArticleInterface) {
  const {id, content, title, add} = props
  return (
    <div className={clsx("article", add && "addArticle")}>
      <div className={"title"}>{title.substring(0,15)}{title.length > 15 ? "..." : ""}</div>
      <div className={"content"}>{content.substring(0,150)}{content.length > 150 ? "..." : ""}</div>
      <div className={"article-footer"}>article id: {id}</div>
    </div>
  )
}