import React, { useState } from "react";

import Header from "./Components/Header";
import Nav from "./Components/Nav";
import PostList from "./Components/PostList";

function App() {
  const post = [
    {
      id: 1,
      title: "Domino",
      description: "We are offer world's best pizza!!! to the entire world",
    },
    {
      id: 2,
      title: "McDonald",
      description: "We have served world's best Burger!!!",
    },
    {
      id: 3,
      title: "StarBucks",
      description: "We have served world's best Coffee's!!!",
    },
  ];

  const [actualData, setActualData] = useState(post);

  function acceptNewPostFormData(data) {
    setActualData((prevState) => {
      return [data, ...prevState];
    });
  }

  function getIdFromPost(cardId) {
    const allPost = [...actualData];
    const finalPost = allPost.filter((item) => item.id !== cardId);
    setActualData(finalPost);
  }

  return (
    <>
      <div className="container">
        <Header />
        <Nav liftUpToApp={acceptNewPostFormData} />
        {actualData.length > 0 ? (
          <PostList item={actualData} sendIdToPostlist={getIdFromPost} />
        ) : (
          <h2 className="display-3 container text-center my-5">
            There is no Post, Please add yummy meal
          </h2>
        )}
      </div>
    </>
  );
}
export default App;

/* <PostList item={actualData} sendDataToPostList={acceptNewPostFormData}/> */
