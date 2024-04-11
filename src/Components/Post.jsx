function Post(props) {
  const deleteItem = () => {
    const cardId = props.id;
    props.liftIdToParent(cardId);
  };

  return (
    <>
      <div className="card bg-secondary p-2 w-25 mt-1 mr-2">
        <h5 className="card-title text-warning">{props.title}</h5>
        <hr color="white" />
        <div className="card-text text-light">{props.desc}</div>

        <div className="btn-group mt-1">
          <button className="btn btn-warning mr-1" onClick={deleteItem}>
            Delete
          </button>
          {/* <button className="btn btn-warning">Update</button> */}
        </div>
      </div>
    </>
  );
}
export default Post;
