//This file no more used

/* import { useState } from "react";

function NewPost(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    const formSubmitData = {
      id: Math.random().toString(),
      title: inputTitle,
      description: inputDesc,
    };
    props.liftUpToNewPost(formSubmitData);
    setInputTitle("");
    setInputDesc("");
  }

  function titleHandler(event) {
    setInputTitle(event.target.value);
  }

  function descriptionHandler(event) {
    setInputDesc(event.target.value);
  }
  return (
    <>
      <div className="row mt-2 rounded">
        <div className="col">
          <form onSubmit={submitHandler}>
            <p>
              <label htmlFor="name">Title</label>
              <input
                type="text"
                className="form-control"
                value={inputTitle}
                onChange={titleHandler}
              />
            </p>
            <p>
              <label htmlFor="name">Description</label>
              <input
                type="text"
                className="form-control"
                value={inputDesc}
                onChange={descriptionHandler}
              />
            </p>
            <button className="btn btn-danger">Add Item</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default NewPost;
 */