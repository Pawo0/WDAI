import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Hi user!</h1>
      <Link to={"/blog"} className={"link"}>
        See all articles here
      </Link>
    </div>
  )
}