import { useEffect, useState } from "react";
import Post from "../post";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://blogappbackend-ss64.onrender.com/post")
    .then((response) => {
      response.json()
      .then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <>{posts.length > 0 && posts.map((post) => <Post {...post}></Post>)}</>
  );
}
