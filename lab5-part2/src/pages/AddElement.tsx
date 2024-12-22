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
    articles.push({
      id, title, content
    })
    localStorage.setItem("articles", JSON.stringify(articles));
    setId(0);
    setTitle("")
    setContent("")
    navigate("/blog")

  }
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, setter: React.Dispatch<React.SetStateAction<any>>) => {
    setter(e.target.value)

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={id ? id : ""} onChange={(e) => handleChange(e, setId)} type={"number"} placeholder={"id"}/>
        <input value={title} onChange={(e) => handleChange(e, setTitle)} placeholder={"title"}/>
        <textarea value={content} onChange={(e) => handleChange(e, setContent)} placeholder={"content"}></textarea>
        <button>Dodaj</button>
      </form>
    </>
  )
}