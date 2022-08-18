import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import s from './feedback-widget.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div>
        {options.map(e => (
          <button
            className={s.section__btn}
            key={nanoid()}
            type="button"
            onClick={onLeaveFeedback}
            name={e}
          >
            {e}
          </button>
        ))}
      </div>
    </>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
