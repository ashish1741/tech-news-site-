import React from "react";
import { useGlobalContext } from "../Context";

const Story = () => {
  const { hits, nbPages, isLoading, removePost } = useGlobalContext();
  console.log(isLoading);
  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="stories">
      {hits.map((currData) => {
        const { title, author, objectID, num_comments, url } = currData;
        return (
          <>
            <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p>
                By <span>{author}</span> | <span>{num_comments}</span> comments
              </p>
              <div className="card_btn">
                <a href={url} target="_blank">
                  Read More
                </a>
                <a href="#" onClick={() => removePost(objectID)}>
                  Remove
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Story;
