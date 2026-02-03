import axios from "axios";
import React, { useState } from "react";
function CreatePost() {
  const [fileName, setFileName] = useState("No file selected");
  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here
    const formdata = new FormData(e.target);
    axios
      .post("http://localhost:3000/create-post", formdata)
      .then((res) => {
        alert("Post created successfully");
        e.target.reset();
      })
      .catch((err) => {
        alert("Error creating post");
      });
  }
  return (
    <section className="section-form">
      <h2 className="font-bold">Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="caption" />
        {/* <input type="file" accept="image/*" name="image" id="" /> */}
        <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
          }
        }}
      />

      <label
        htmlFor="image"
        className="cursor-pointer border px-3 py-2 rounded-md text-sm bg-white"
      >
        Choose Image
      </label>

      <span className="mb-3 mx-2 text-xs text-gray-500">
        {fileName}
      </span>
        <button type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default CreatePost;
