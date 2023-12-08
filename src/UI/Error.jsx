import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div className="error-wrapper">
      <div className="error">
        <h2>500 Internal Server Error</h2>
        <h6>
          The server encountered an internal error or misconfiguration and was
          unable to complete your request.
        </h6>
        <h6>
          Please contact the server administrator to inform of the time the
          error occurred and of anything you might have done that may have
          caused the error.
        </h6>
        <h6>
          More information about this error may be available in the server error
          log.
        </h6>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
