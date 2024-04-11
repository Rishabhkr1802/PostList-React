import { useState } from "react";

function Nav(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [showForm, setShowForm] = useState(false);

  function titleHandler(event) {
    setInputTitle(event.target.value);
  }

  function descriptionHandler(event) {
    setInputDesc(event.target.value);
  }

  function showAddPostForm() {
    setShowForm(!showForm);
  }

  function submitHandler(event) {
    event.preventDefault();
    const formSubmitData = {
      id: Math.random().toString(),
      title: inputTitle,
      description: inputDesc,
    };
    props.liftUpToApp(formSubmitData);
    setInputTitle("");
    setInputDesc("");
  }

  return (
    <>
      <div className="row bg-dark text-light justify-content-around align-items-center p-2">
        <p className="display-6">
          Here are some Exciting Yummy & Wonderful Feed in the Market
        </p>
        <button className="btn btn-light mt-3" onClick={showAddPostForm}>
          {showForm ? "Hide Form fields" : "Add New Post"}
        </button>
      </div>

      {showForm ? (
        <div className="row bg-dark text-light">
          <form className="d-flex mx-5" onSubmit={submitHandler}>
            <div className="col-8">
              <label htmlFor="name">Title</label>
              <input
                type="text"
                className="form-control"
                value={inputTitle}
                onChange={titleHandler}
              />
            </div>
            <div className="col-8">
              <label htmlFor="name">Description</label>
              <input
                type="text"
                className="form-control"
                value={inputDesc}
                onChange={descriptionHandler}
              />
            </div>
            <div className="col-8 py-4">
              <button className="btn btn-danger">Add Item</button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Nav;
