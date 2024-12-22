import {ArticleInterface} from "./interfaces.tsx";

export default function SingleArticle({title, content, id}: ArticleInterface){
  return (
    <div className={"article-box"}>
      <div className={"article-title"}>{title}</div>
      <div className={"article-content"}>{content}</div>
      <div className={"article-id"}>ID: {id}</div>
    </div>
  )
}