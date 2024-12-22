import * as React from "react";
import {useState} from "react";
import {ArticleInterface} from "../components/interfaces.tsx";
import {useNavigate} from "react-router-dom";


export default function AddElement() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const storage = localStorage.getItem("articles")
    const articles: ArticleInterface[] = storage ? JSON.parse(storage) : []
    let id:number;
    if (articles.length === 0) id = 1
    else id = articles[0].id + 1
    if (!title || !content) {
      alert("Pola nie mogą być puste!")
      return
    }
    articles.unshift({
      id, title, content
    })
    localStorage.setItem("articles", JSON.stringify(articles));
    setTitle("")
    setContent("")
    navigate("/blog")

  }
  // const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, setter: React.Dispatch<React.SetStateAction<any>>) => {
    setter(e.target.value)

  }

  return (
    <>
      <form className={"form-box"} onSubmit={handleSubmit}>
        {/*<input className={"form-id"} name={"id"} value={id ? id : ""} onChange={(e) => handleChange(e, setId)}*/}
        {/*       type={"number"} placeholder={"id"}/>*/}
        <input className={"form-title"} name={"title"} value={title} onChange={(e) => handleChange(e, setTitle)}
               placeholder={"title"}/>
        <textarea className={"form-content"} name={"content"} value={content}
                  onChange={(e) => handleChange(e, setContent)} placeholder={"content"}></textarea>
        <button>Dodaj</button>
      </form>
    </>
  )
}