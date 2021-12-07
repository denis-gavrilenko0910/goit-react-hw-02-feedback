import { Fragment } from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  optionsAllStateData,
  total,
  positivPercent,
}) {
  return (
    <Fragment>
      <ul className={s.statistics__list}>
        {optionsAllStateData.map(([item, value]) => (
          <li key={item} className={s.statistics__items}>
            <span className={s.item}>{item}</span>
            <span className={s.item__value}>{value}</span>
          </li>
        ))}
      </ul>
      <div className={s.total__container}>
        <ul className={s.results_menu}>
          <li>
            <span className={s.item__total}>Total:</span>
            <span className={s.item__total}>{total}</span>
          </li>
          <li>
            <span className={s.item__positivFeedbacks}>Positiv feedbacks:</span>
            <span className={s.item__positivPercnet}>{positivPercent}%</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
Statistics.propTypes = {
  optionsAllStateData: PropTypes.array,
};
