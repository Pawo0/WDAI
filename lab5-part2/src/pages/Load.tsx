import {useEffect} from "react";
import {ArticleInterface} from "../components/interfaces.tsx";

export default function Load(){
  useEffect(()=>{

  fetch("https://dummyjson.com/posts")
    .then(res => res.json())
    .then(data => {
      const articles:ArticleInterface[] = data.posts.map((el:any )=> {
        return ({id: el.id, title: el.title, content: el.body})
      })
      articles.reverse()
      localStorage.setItem("articles", JSON.stringify(articles))
    })
  },[])

  return <div>Data loaded...</div>
}