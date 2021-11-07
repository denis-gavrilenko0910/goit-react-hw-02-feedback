function FeedbackOptions({ options, onLeaveFeedback }) {
  // console.log(options);
  // console.log(onLeaveFeedback);
  return (
    <div>
      <ul>
        {Object.keys(options).map((item, index, arr) => (
          <li key={index}>
            <button
              type="button"
              onClick={(event) => {
                onLeaveFeedback(event.target);
              }}
            >
              {arr[index]}
            </button>
          </li>
        ))}
      </ul>

      {/* {console.log(options, onLeaveFeedback)} */}
    </div>
  );
}
export default FeedbackOptions;
