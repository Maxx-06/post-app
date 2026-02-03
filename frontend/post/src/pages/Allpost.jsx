import React, { useEffect, useState } from "react";
import axios from "axios";
function Allpost() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        setPost(res.data.allPost);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="section-posts">
      {post.map((p) => {
        return (
          <div className="post" key={p._id}>
            <img src={p.Image} alt="" />
            <h2>{p.Caption}</h2>
          </div>
        );
      })}
    </section>
  );
}

export default Allpost;
