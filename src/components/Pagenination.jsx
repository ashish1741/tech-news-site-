import React from "react";
import { useGlobalContext } from "../Context";

const Pagenination = () => {
  const { page, nbPages, previous, next } = useGlobalContext();
  return (
    <div className="pagenation_section">
      <button className="btn" onClick={() => previous()}>
        Previous
      </button>
      <p className="number">
        {page + 1} of {nbPages}
      </p>
      <button className="btn" onClick={() => next()}>
        Next{" "}
      </button>
    </div>
  );
};

export default Pagenination;
