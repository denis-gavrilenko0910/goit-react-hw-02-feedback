import { Fragment } from 'react';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({
  options,
  onLeaveFeedback,
  countTotalFeedback,
}) {
  return (
    <Fragment>
      <ul className={s.button__list}>
        {options.map(item => (
          <li key={item} className={s.button__items}>
            <button
              className={s.button}
              type="button"
              onClick={() => {
                onLeaveFeedback(item);
                countTotalFeedback();
                // positivePercentage();
              }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
