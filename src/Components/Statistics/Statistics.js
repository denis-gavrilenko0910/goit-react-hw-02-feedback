import { Fragment } from "react";
import s from "./Statistics.module.css";
// import PropTypes from "prop-types";
function Statistics({ optionsAllStateData }) {
  return (
    <Fragment>
      <ul className={s.statistics__list}>
        {optionsAllStateData.map((item) => (
          <li key={item[0]} className={s.statistics__items}>
            <span className={s.item}>{item[0]}</span>
            <span className={s.item__value}>{item[1]}</span>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
// Statistics.propTypes = {
//   optionsAllStateData: PropTypes.array,
// };
export default Statistics;
