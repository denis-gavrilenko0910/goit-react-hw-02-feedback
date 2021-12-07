import { Fragment } from 'react';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
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
