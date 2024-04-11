import Post from "./Post";

function PostList(props) {

  function sendIdToParent (id) {
    props.sendIdToPostlist(id)
  }
  
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {props.item.map((items) => {
        return (
          <Post key={items.id} title={items.title} desc={items.description} id={items.id} liftIdToParent={sendIdToParent} />
        );
      })}
    </div>
  );
}

export default PostList;

/* 
import NewPost from "./NewPost";

function sendDataToPostList(acceptData) {
    const sendDataToApp = {
      ...acceptData,
    };
    props.liftUpToApp(sendDataToApp);
  }

   <div className="row mx-auto">
      <div className="col-8 my-3 bg-secondary">
        <NewPost liftUpToNewPost={sendDataToPostList} />
      </div>
    </div> 
*/
