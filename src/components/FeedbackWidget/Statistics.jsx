import { PropTypes } from 'prop-types';
import s from './feedback-widget.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2>Statistics</h2>
      <ul className={s.statList}>
        <li className={s.statList__item}>Good:{good}</li>
        <li className={s.statList__item}>Neutral:{neutral}</li>
        <li className={s.statList__item}>Bad:{bad}</li>
        <li className={s.statList__item}>Total:{total}</li>
        <li className={s.statList__item}>
          Positive feedback:{`${positivePercentage}%`}
        </li>
      </ul>
    </>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
