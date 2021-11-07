// import React from "react";
// import Section from "../Section/Section";
function FeedbackOptions({ options }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          console.log("good");
        }}
      >
        {}
      </button>
      <button
        type="button"
        onClick={() => {
          console.log("neutral");
        }}
      >
        neutral
      </button>
      <button
        type="button"
        onClick={() => {
          console.log("bad");
        }}
      >
        bad
      </button>

      {/* {console.log(options, onLeaveFeedback)} */}
    </div>
  );
}

// function FeedbackOptions() {
//   return;
// }
export default FeedbackOptions;
