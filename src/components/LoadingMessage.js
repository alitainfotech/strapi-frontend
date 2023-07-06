import React from "react";

const LoadingMessage = ({ isLoading, len = 0, msg = "No Records Found!" }) => {
  return (
    <div className="text-center">
      {isLoading && <h4>Loading...</h4>}

      {!isLoading && len === 0 && <h4>-- {msg} --</h4>}
    </div>
  );
};

export default LoadingMessage;
